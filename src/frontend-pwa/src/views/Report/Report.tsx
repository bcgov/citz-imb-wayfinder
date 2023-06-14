import React, { useState } from 'react';

export function Report() {
  const [eventType, setEventType] = useState('');
  const [eventInfo, setEventInfo] = useState('');

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
      <div>
        <label htmlFor="eventType">Event Type:</label>
        <select id="eventType" value={eventType} onChange={handleEventTypeChange}>
          <option value="">Select an event type</option>
          <option value="event1">Event 1</option>
          <option value="event2">Event 2</option>
          <option value="event3">Event 3</option>
          <option value="event4">Event 4</option>
        </select>
      </div>
      <div>
        <label htmlFor="eventInfo">Event Information:</label>
        <textarea id="eventInfo" value={eventInfo} onChange={handleEventInfoChange} rows={4} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Report;
