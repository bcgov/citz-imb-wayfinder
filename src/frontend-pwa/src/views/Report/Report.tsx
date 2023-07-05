/* eslint-disable react/no-array-index-key */
/**
 * @summary Sends validated form and geolocation data to the API for
 *          consumption, or stores in localStorage while offline
 * @author  TylerMaloney
 */
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Button } from '../../components/common';
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
import { localStorageKeyExists } from '../../utils/AppLocalStorage';
import OnlineCheck from '../../utils/OnlineCheck';
import { reportContent } from '../../content/content';

export default function Report() {
  const charLimit = 256;
  const minCharLimit = 10;
  const [eventType, setEventType] = useState('');
  const [details, setDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [reportSentSuccess, setReportSentSuccess] = useState(false);
  const { state, setAnalytics, setReports } = useAppService();
  const { lang } = state.settings;
  const geolocationKnown = localStorageKeyExists(constants.CURRENT_LOCATION_KEY);
  const latitude = state.currentLocation ? state.currentLocation.lat : 49.2827;
  const longitude = state.currentLocation ? state.currentLocation.long : -123.2;

  /**
 * @desc - Validates the phone number (if inputted) against regex pattern.
 * @returns {boolean} Valid phone number format, or blank.
 */
  const validatePhoneNumber = useCallback((): boolean => {
    const regex = /^(?:\+?1-?)?(?:\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/gi;
    if (!phoneNumber || phoneNumber.match(regex)) {
      setErrorMessage('');
      return true;
    }
    setErrorMessage(reportContent.invalidPhone[lang]);
    return false;
  }, [phoneNumber, lang]);

  /**
 * @desc - Validates the detail input is longer than the minumum length, or not present.
 * @returns {boolean} - Indicates whether the message inputted is over the
 *                      character minimum, but under the maximum.
 */
  const validateDetailBox = useCallback((): boolean => {
    if (details.length >= minCharLimit && details.length <= charLimit) {
      return true;
    }
    setErrorMessage(reportContent.minLengthValidationFailure[lang]);
    setReportSentSuccess(false);
    return false;
  }, [details, charLimit, lang]);

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

    if (state.settings.analytics_opt_in && geolocationKnown) {
      const analytics = {
        latitude,
        longitude,
        usage: {
          function: 'report',
        },
      };

      if (state.settings.offline_mode) {
        setAnalytics(false, analytics);
      } else {
        OnlineCheck()
          .then((Online) => {
            setAnalytics(Online, analytics);
          });
      }
    }

    await axios.post(`${constants.BACKEND_URL}/api/report`, formData)
      .then((res) => {
        setErrorMessage('');
        setEventType('');
        setDetails('');
        setPhoneNumber('');
        setReportSentSuccess(true);
        setReports(res.data);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        setReportSentSuccess(false);
        setErrorMessage(reportContent.reportFailure[lang]);
      });
  };

  useEffect(() => {
    setIsFormValid(checkFormValidity());
  }, [checkFormValidity]);

  return (
    <form onSubmit={handleSubmit}>
      <StyledReportOuterDiv>
        <StyledReportContainer>
          <h2>{reportContent.reportLabel[lang]}</h2>
          <Section>
            <StyledP>{reportContent.eventTypeLabel[lang]}</StyledP>
            <StyledSelect
              id="eventType"
              aria-label="event select"
              value={eventType}
              onChange={handleEventTypeChange}
              required
            >
              <option value="">{reportContent.eventTypeOptionLabel[lang]}</option>
              {reportContent.reportOptions[lang].map((event: string, index: number) => (
                <option value={reportContent.reportOptions[lang][index]} key={index}>
                  {event}
                </option>
              ))}
            </StyledSelect>
          </Section>
          <Section>
            <StyledTextAreaWrapper>
              <StyledP>{reportContent.detailsLabel[lang]}</StyledP>
              <StyledTextArea
                id="details"
                aria-label="Event details field"
                value={details}
                onChange={handleDetailsChange}
                onBlur={validateDetailBox}
                rows={5}
                cols={25}
                placeholder={reportContent.enterDetails[lang]}
                required
              />
              <StyledCharacterCounter>{`${details.length} / ${charLimit}`}</StyledCharacterCounter>
            </StyledTextAreaWrapper>
          </Section>
          <Section>
            <StyledP>{reportContent.phoneLabel[lang]}</StyledP>
            <StyledInput
              type="text"
              aria-label="phone field"
              id="phoneNumber"
              value={phoneNumber}
              onBlur={validatePhoneNumber}
              onChange={handlePhoneNumberChange}
            />

            {reportSentSuccess
              ? <SuccessP>{reportContent.reportSentSuccess[lang]}</SuccessP>
              : (<ErrorP>{errorMessage}</ErrorP>)}
          </Section>
          <ButtonSection>
            <Button
              text={reportContent.submit[lang]}
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
