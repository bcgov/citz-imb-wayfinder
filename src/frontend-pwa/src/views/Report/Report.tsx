/* eslint-disable react/no-array-index-key */
/**
 *
 * @summary - Event reporting page for the Wayfinder application.
 *          - Users can submit reports about events they witness.
 *
 * @author  TylerMaloney
 */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Button } from '../../components/Button/Button';
import {
  StyledReportContainer,
  StyledReportOuterDiv,
  StyledTextArea,
  Section,
  StyledSelect,
  StyledInput,
  StyledP,
} from './report.styles';
import constants from '../../constants/Constants';
import useAppService from '../../services/app/useAppService';

export default function Report() {
  const [eventType, setEventType] = useState('');
  const [details, setDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const { state } = useAppService();
  const latitude = state.currentLocation ? state.currentLocation.lat : 49.2827;
  const longitude = state.currentLocation ? state.currentLocation.long : -123.2;
  const eventOptions: Array<string> = [
    'Damaged Infrastructure',
    'Animal Sighting',
    'Suggestion/Complaint',
    'Miscellaneous',
  ];

  const checkFormValidity = useCallback(() => {
    const isEventTypeValid = !!eventType;
    const isDetailsValid = details.length >= 10 && details.length <= 256;
    // eslint-disable-next-line operator-linebreak
    const isPhoneNumberValid =
      (phoneNumber.length === 0) || (phoneNumber.length >= 10 && phoneNumber.length <= 16);
    const isValid = isEventTypeValid && isDetailsValid && isPhoneNumberValid;

    if (!isDetailsValid) {
      setErrorMessage('Tip: Details must be between 10 and 256 characters long');
    } else if (!isPhoneNumberValid) {
      setErrorMessage('Tip: Phone number must be between 10 and 16 characters long, if provided');
    } else {
      setErrorMessage('');
    }

    return isValid;
  }, [eventType, details, phoneNumber]);

  const handleEventTypeChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setEventType(e.target.value);
  };

  const handleDetailsChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setDetails(e.target.value);
  };

  const handlePhoneNumberChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const currentTime = new Date();

    const formData = {
      latitude,
      longitude,
      eventType,
      details,
      phoneNumber,
      time: currentTime,
    };

    try {
      await axios.post(`${constants.BACKEND_URL}/api/report`, formData);
      setErrorMessage('');
      setEventType('');
      setDetails('');
      setPhoneNumber('');
    } catch (error) {
      throw Error('Error: Form was not submitted');
    }
  };

  useEffect(() => {
    setIsFormValid(checkFormValidity());
  }, [checkFormValidity]);

  return (
    <form onSubmit={handleSubmit}>
      <StyledReportOuterDiv>
        <StyledReportContainer>
          <h2>Report An Event</h2>
          <Section>
            <div>Event Type:</div>
            <StyledSelect
              id="eventType"
              aria-label="event select"
              value={eventType}
              onChange={handleEventTypeChange}
              required
            >
              <option value="">Select an event type</option>
              {eventOptions.map((event: string, index: number) => (
                <option value={event} key={index}>
                  {event}
                </option>
              ))}
            </StyledSelect>
          </Section>
          <Section>
            <div>Event Details:</div>
            <StyledTextArea
              id="details"
              aria-label="detail field"
              value={details}
              onChange={handleDetailsChange}
              rows={7}
              cols={25}
              required
            />
          </Section>
          <Section>
            <div>Phone Number (optional): </div>
            <StyledInput
              type="text"
              aria-label="phone field"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </Section>
          {errorMessage && <StyledP>{errorMessage}</StyledP>}
          <Section>
            <Button text="Submit" variant="primary" size="md" disabled={!isFormValid} />
          </Section>
        </StyledReportContainer>
      </StyledReportOuterDiv>
    </form>
  );
}
