import { useState } from 'react';
import {
  Select,
  SelectChangeEvent,
  InputLabel,
  MenuItem,
} from '@mui/material';

import { Button } from '../../components/Button/Button';

import {
  ReportWrapperDiv,
  ReportOuterDiv,
  StyledTextField,
  // StyledInput,
  StyledSelect,
  StyledForm,
  StyledMenuItem,
} from './report.styles';

// export type ReportProps = {
//   latitude: number;
//   longitude: number;
//   date: Date;
//   eventType: string;
//   details: string;
//   phone?: string;
// }

export default function Report() {
  const [value, setValue] = useState('Select An Event');
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <ReportOuterDiv>
      <ReportWrapperDiv>
        <h2>
          Report an Event
        </h2>
        <StyledForm>
          <InputLabel id="event-label">Type of event to report:</InputLabel>
          <StyledSelect
            name="eventselect"
            id="demo-simple-select"
            value={value}
            label="Type Of Event"
            onChange={() => handleDropdownChange}
          >
            <StyledMenuItem value="Select An Event">
              Select An Event
            </StyledMenuItem>
            <MenuItem value="Fire">
              Fire
            </MenuItem>
            <MenuItem value="Crime">
              Crime
            </MenuItem>
            <StyledMenuItem value="Animal Sighting">
              Animal Sighting
            </StyledMenuItem>
          </StyledSelect>
          <InputLabel id="details-label">Please describe the event:</InputLabel>
          <StyledTextField
            multiline
            id="event-details"
            type="text"
            variant="filled"
          />
          <InputLabel id="phone-label">Phone number, for contact if necessary. (Optional):</InputLabel>
          <StyledTextField
            type="text"
          />
          <center>
            <Button
              text="Submit"
              variant="primary"
              size="md"
              aria-label="submit button"
              disabled={false}
            />
          </center>
        </StyledForm>
      </ReportWrapperDiv>
    </ReportOuterDiv>
  );
}
