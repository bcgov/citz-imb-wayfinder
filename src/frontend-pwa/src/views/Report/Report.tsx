/* eslint-disable react/no-array-index-key */
/**
 *
 * @summary - Event reporting page for the Wayfinder application.
 *          - Users can submit reports about events they witness.
 *          - Data is submitted to /report endpoint
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
  StyledTextAreaWrapper,
  Section,
  ButtonSection,
  StyledSelect,
  StyledInput,
  StyledP,
  StyledCharacterCounter,
} from './report.styles';
import constants from '../../constants/Constants';
import useAppService from '../../services/app/useAppService';

export default function Report() {
  const charLimit = 256;
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

  const validatePhoneNumber = useCallback((): boolean => {
    const regex = /^(?:\+?1-?)?(?:\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/gi;
    if (!phoneNumber || phoneNumber.match(regex)) {
      setErrorMessage('');
      return true;
    }
    setErrorMessage('Invalid Format, Example (250) 555-5555');
    return false;
  }, [phoneNumber]);

  const validateDetailBox = useCallback((): boolean => {
    if (details.length >= 10 && details.length <= charLimit) {
      return true;
    }
    setErrorMessage('Minimum message length is 10 characters.');
    return false;
  }, [details, charLimit]);

  const checkFormValidity = useCallback(() => {
    const isEventTypeValid = !!eventType;
    const isValid = isEventTypeValid && validateDetailBox() && validatePhoneNumber();
    return isValid;
  }, [eventType, validateDetailBox, validatePhoneNumber]);

  const handleEventTypeChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setEventType(e.target.value);
  };

  const handleDetailsChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    if (e.target.value.length <= charLimit) {
      setDetails(e.target.value);
    }
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

    await axios.post(`${constants.BACKEND_URL}/api/report`, formData)
      .then(() => {
        setErrorMessage('');
        setEventType('');
        setDetails('');
        setPhoneNumber('');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setErrorMessage('Unable to submit report.');
      });
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
            <StyledTextAreaWrapper>
              <div>Event Details:</div>
              <StyledTextArea
                id="details"
                aria-label="Event details field"
                value={details}
                onChange={handleDetailsChange}
                onBlur={validateDetailBox}
                rows={7}
                cols={25}
                placeholder="Enter event details..."
                required
              />
              <StyledCharacterCounter>{`${details.length} / ${charLimit}`}</StyledCharacterCounter>
            </StyledTextAreaWrapper>
          </Section>
          <Section>
            <div>Phone Number (optional): </div>
            <StyledInput
              type="text"
              aria-label="phone field"
              id="phoneNumber"
              value={phoneNumber}
              onBlur={validatePhoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <StyledP>
              {errorMessage}
            </StyledP>
          </Section>
          <ButtonSection>
            <Button text="Submit" variant="primary" size="md" disabled={!isFormValid} />
          </ButtonSection>
        </StyledReportContainer>
      </StyledReportOuterDiv>
    </form>
  );
}
