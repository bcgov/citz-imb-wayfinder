/* eslint-disable react/no-array-index-key */
/**
 *
 * @summary - Sends validated form and geolocation data to the API for
 *            consumption, or stores in localStorage while offline
 *
 * TODO:    - Implement offline caching
 *
 * @author  TylerMaloney
 */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Button } from '../../components/common';
import Analytics from '../../utils/Analytics';
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
  ErrorP,
  SuccessP,
} from './report.styles';
import constants from '../../constants/Constants';
import useAppService from '../../services/app/useAppService';

export default function Report() {
  const charLimit = 256;
  const minCharLimit = 10;
  const [eventType, setEventType] = useState('');
  const [details, setDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [reportSentSuccess, setReportSentSuccess] = useState(false);
  const { state } = useAppService();
  const latitude = state.currentLocation ? state.currentLocation.lat : 49.2827;
  const longitude = state.currentLocation ? state.currentLocation.long : -123.2;
  const eventOptions: Array<string> = [
    'Damaged Infrastructure',
    'Animal Sighting',
    'Suggestion/Complaint',
    'Miscellaneous',
  ];

  /**
 * @desc - Validates the phone number (if inputted) against regex pattern.
 * @returns {boolean} - indicates whether the phone number is valid (true), or not (false).
 *                      Also returns true if nothing is entered, as the field is optional.
 */
  const validatePhoneNumber = useCallback((): boolean => {
    const regex = /^(?:\+?1-?)?(?:\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/gi;
    if (!phoneNumber || phoneNumber.match(regex)) {
      setErrorMessage('');
      return true;
    }
    setErrorMessage('Invalid Format. Example: (250) 555-5555');
    return false;
  }, [phoneNumber]);

  /**
 * @desc - Validates the detail input is longer than the minumum length, or not present.
 * @returns {boolean} - Indicates whether the message inputted is over the
 *                      character minimum, but under the maximum.
 */
  const validateDetailBox = useCallback((): boolean => {
    if (details.length >= minCharLimit && details.length <= charLimit) {
      return true;
    }
    setErrorMessage('Minimum message length is 10 characters.');
    setReportSentSuccess(false);
    return false;
  }, [details, charLimit]);

  /**
 * @desc - Validates all form fields to ensure they contain valid values.
 * @param {boolean} isValid - Indicates whether the form fields are valid (true)
 *                            or not valid (false).
 * @returns {boolean}       - Returns isValid, set to either true or false.
 */
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

  /**
 * @desc - Sends a "formData" object to the /report endpoint.
 *       - Form validity is determined externally through the useEffect below.
 */
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

    const analytics = {
      latitude,
      longitude,
      usage: {
        function: 'report',
      },
    };

    Analytics(analytics);

    await axios.post(`${constants.BACKEND_URL}/api/report`, formData)
      .then(() => {
        setErrorMessage('');
        setEventType('');
        setDetails('');
        setPhoneNumber('');
        setReportSentSuccess(true);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setReportSentSuccess(false);
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
            <StyledP>Event Type:</StyledP>
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
              <StyledP>Event Details:</StyledP>
              <StyledTextArea
                id="details"
                aria-label="Event details field"
                value={details}
                onChange={handleDetailsChange}
                onBlur={validateDetailBox}
                rows={5}
                cols={25}
                placeholder="Enter event details..."
                required
              />
              <StyledCharacterCounter>{`${details.length} / ${charLimit}`}</StyledCharacterCounter>
            </StyledTextAreaWrapper>
          </Section>
          <Section>
            <StyledP>Phone Number (optional): </StyledP>
            <StyledInput
              type="text"
              aria-label="phone field"
              id="phoneNumber"
              value={phoneNumber}
              onBlur={validatePhoneNumber}
              onChange={handlePhoneNumberChange}
            />

            {reportSentSuccess
              ? <SuccessP>Report Published</SuccessP>
              : (
                <ErrorP>
                  {errorMessage}
                </ErrorP>
              )}
          </Section>
          <ButtonSection>
            <Button
              text="Submit"
              variant="primary"
              size="md"
              disabled={!isFormValid}
            />
          </ButtonSection>
        </StyledReportContainer>
      </StyledReportOuterDiv>
    </form>
  );
}
