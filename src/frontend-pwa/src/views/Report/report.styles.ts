/**
 * @summary This is the styling page for the Report view screen.
 * @author  Tyler Maloney
 * */

import styled from '@emotion/styled';
import typography from '../../typography';

export const StyledReportOuterDiv = styled.div`
    width: 100%;
    left:0;
    top:0;
    min-width: 100vw;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30pt 0;
    background-color: white;
    @media (min-width: 768px) {
        padding: 20px;
    }
`;
export const StyledReportContainer = styled.div`
    ${typography.toString()}
    width: 100%;
    max-width: 768px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 0.5em 0;
    padding: 5em 7.5pt;
    background-color: white;
    @media (min-width: 768px) {
        padding: 20px;
    }
`;

export const StyledTextArea = styled.textarea`
    border-radius: 0.4em;
    resize: none;
`;

export const Section = styled.div`
    // padding-top: 20px;
`;

export const StyledSelect = styled.select`
    border-radius: 0.4em;
`;

export const StyledInput = styled.input`
    border-radius: 0.4em;
    border-width: 0.03em;
`;

export const StyledP = styled.p`
    color: red;
`;
