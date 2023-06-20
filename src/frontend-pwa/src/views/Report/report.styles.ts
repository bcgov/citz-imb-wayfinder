/**
 * @summary This is the styling page for the Report view screen.
 * @author  Tyler Maloney
 * */

import styled from '@emotion/styled';
import typography from '../../typography';
import mq from '../../constants/mq';

export const StyledReportOuterDiv = styled.div`
    width: 100%;
    position: absolute;
    left:0;
    top:0;
    min-width: 100svw;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10pt 0;
    background-color: white;
    @media (min-width: ${mq.tablet}) {
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
    @media (min-width: ${mq.tablet}) {
        padding: 20px;
    }
`;

export const StyledTextAreaWrapper = styled.div`
`;

export const StyledCharacterCounter = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

export const StyledTextArea = styled.textarea`
    width: 100%;
    border-radius: 0.4em;
    resize: none;
    padding: 5pt;
`;

export const Section = styled.div`
    width: 90%;
    @media (min-width: ${mq.tablet}){
        width: 80%;
    }
`;

export const ButtonSection = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    @media (min-width: ${mq.tablet}) {
        justify-content: left;
    }
`;

export const StyledSelect = styled.select`
    width: 100%;
    border-radius: 0.4em;
    padding: 5pt;
    background-color: inherit;
`;

export const StyledInput = styled.input`
    width: 100%;
    border-radius: 0.4em;
    border-width: 0.03em;
    padding: 5pt;
`;

export const StyledP = styled.p`
    width: 100%;
    min-height: 1.2em;
    color: #8b0000;
    font-size: 10pt;
    padding: 0;
    margin: 0;
`;
