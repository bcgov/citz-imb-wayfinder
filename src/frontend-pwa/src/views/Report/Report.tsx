import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { StyledReportContainer, StyledReportOuterDiv } from './report.styles';

export function Report() {
  const [eventType, setEventType] = useState('');
  const [eventInfo, setEventInfo] = useState('');
  const eventOptions: Array<string> = ['Damaged Infrastructure', 'Animal Sighting', 'Suggestion/Complaint', 'Miscellaneous'];

  const handleEventTypeChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEventType(e.target.value);
  };

  const handleEventInfoChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEventInfo(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Handle form submission, e.g., send data to the server

    // Reset form fields
    setEventType('');
    setEventInfo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledReportOuterDiv>
        <StyledReportContainer>
          <h1>Report An Event</h1>
          <label htmlFor="eventType">
            <div>Event Type:</div>
            <select id="eventType" value={eventType} onChange={handleEventTypeChange}>
              <option value="">Select an event type</option>
              {eventOptions.map((event: string, index: number) => (
                <option value={index}>{event}</option>
              ))}
            </select>
          </label>
          <br />
          <label htmlFor="eventInfo">
            <div>Event Information:</div>
            <textarea id="eventInfo" value={eventInfo} onChange={handleEventInfoChange} rows={10} cols={30} />
          </label>
          <br />
          <Button text="Submit" variant="primary" size="md" disabled={false} />
        </StyledReportContainer>
      </StyledReportOuterDiv>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Report;
