/**
 * @summary Styling for EULA view.
 * @author Tyler Maloney
 * */

import styled from '@emotion/styled';
import typography from '../../typography';

export const StyledOuterDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    position: absolute;
    left:0;
    top:0;
    min-width: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50pt 0;
`;
export const StyledContainer = styled.div`
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
    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const StyledFieldSetDiv = styled.div`
${typography.toString()}
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background-color: white;
    align-items: center;
    justify-content: space-evenly;
    padding: 2em 1em;
    @media (min-width: 768px){
        width: 288pt;
    }
`;

export const p = styled.p`
`;
