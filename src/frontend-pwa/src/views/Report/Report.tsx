/* eslint-disable react/no-array-index-key */
/**
 * TODO:    - implement error handling
 *          - make less ugly
 *
 * @summary - Event reporting page for the Wayfinder application.
 *          - Users can submit reports about events they witness.
 *
 * @author  TylerMaloney
 */

import React, { useState, useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { StyledReportContainer, StyledReportOuterDiv, StyledTextArea } from './report.styles';

export function Report() {
  const [eventType, setEventType] = useState('');
  const [details, setDetails] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const eventOptions: Array<string> = ['Damaged Infrastructure', 'Animal Sighting', 'Suggestion/Complaint', 'Miscellaneous'];

  const handleEventTypeChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEventType(e.target.value);
  };

  const handleDetailsChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setDetails(e.target.value);
  };

  const handlePhoneNumberChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
      // Send JSON object to the API endpoint
      const response = await fetch('https://wf-api-ec1236-dev.apps.silver.devops.gov.bc.ca/api/report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form fields
        setEventType('');
        setDetails('');
        setPhoneNumber('');
      } else {
        throw new Error('Form data submission failed');
      }
    } catch (error) {
      throw new Error('fetch failed');
    }
  };

  useEffect(() => {
    // Get user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (_error) => {
        setLatitude(49.2827);
        setLongitude(123.1207);
      },
    );
  }, [latitude, longitude]);

  return (
    <form onSubmit={handleSubmit}>
      <StyledReportOuterDiv>
        <StyledReportContainer>
          <h1>Report An Event</h1>
          <label htmlFor="eventType">
            <div>Event Type:</div>
            <select id="eventType" value={eventType} onChange={handleEventTypeChange} required>
              <option value="">Select an event type</option>
              {eventOptions.map((event: string, index: number) => (
                <option value={event} key={index}>
                  {event}
                </option>
              ))}
            </select>
          </label>
          <br />
          <div>Event Details:</div>
          <StyledTextArea
            id="details"
            value={details}
            onChange={handleDetailsChange}
            rows={10}
            cols={30}
            required
          />
          <br />
          <label htmlFor="phoneNumber">
            <div>Phone Number (optional): </div>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </label>
          <br />
          <Button text="Submit" variant="primary" size="md" disabled={false} />
        </StyledReportContainer>
      </StyledReportOuterDiv>
    </form>
  );
}

export default Report;
