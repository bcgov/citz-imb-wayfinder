/**
 * @summary This is the styling page for the Report view screen.
 * @author  Tyler Maloney
 * */

import styled from '@emotion/styled';
import typography from '../../typography';

export const StyledReportOuterDiv = styled.div`
    width: 100%;
    min-height: 100svh;
    // position: absolute;
    left:0;
    top:0;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50pt 0;
`;
export const StyledReportContainer = styled.div`
    ${typography.toString()}
    width: 100%;
    max-width: 768px;
    height: 100%;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 5em 7.5pt;
    background-color: white;
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const StyledTextArea = styled.textarea`
    resize: none;
`;
