import styled from '@emotion/styled';
import {
  TextField,
  TextFieldProps,
  Select,
  SelectProps,
  MenuItem,
  MenuItemProps,
} from '@mui/material';
import BCSans from '/BCSans-Regular.woff';
import typography from '../../typography';

export const ReportWrapperDiv = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 1em;
    margin: auto; 
    width: 30em; 
    position: relative;
    // display: inline-block;
    overflow: auto;
`;

export const ReportOuterDiv = styled.div`
    width: 100%;
    max-height: 100%;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    // align-items: center;
    padding: 4em 2em;
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

// export const StyledSelect = styled.select`
//     ${typography.toString()}
//     padding: 2em;
// `;

export const StyledSelect = styled(Select)<SelectProps>`
    variant: filled;
    border: 1px solid red;
    border-radius: 4px;
    font-family: BCSans, Arial, sans-serif;
    line-height: 1.25;
    font-weight: 400;

    @font-face {
        font-family: 'BCSans';
        src: url(${BCSans}) format('woff');
    }
`;

export const StyledMenuItem = styled(MenuItem)<MenuItemProps>`
    padding: 1em;
    border: 1px solid red;
    border-radius: 4px;
    font-family: BCSans, Arial, sans-serif;
    line-height: 1.25;
    font-weight: 400;
`;

export const StyledInput = styled.input`
    ${typography.toString()}
`;

export const StyledTextField = styled(TextField)<TextFieldProps>`
    border: 1em solid red;
    border-radius: 4px;
    font-family: BCSans, Arial, sans-serif;
    line-height: 1.25;
    font-weight: 400;
    white-space: pre-wrap; /* Enable word wrap */
    overflow-wrap: break-word; /* Enable word break */

    input {
      min-height: 1em; /* Set the minimum height */
    }

    @font-face {
        font-family: 'BCSans';
        src: url(${BCSans}) format('woff');
    }
`;

export const StyledP = styled.p`
`;
