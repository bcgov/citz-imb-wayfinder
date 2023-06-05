import styled from '@emotion/styled';
import typography from '../../typography';

export const StyledContainer = styled.div`
    ${typography.toString()}
    width: 100%;
    height: 100%;
    flex: auto;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    overflow-x: hidden;
    display: inline-block;
    padding: 5em 10em;

`;
// changed below "max-height" from "min-height"

export const StyledOuterDiv = styled.div`
    width: 100%;
    max-height: 100%;
    min-width: 0;
    min-height: 0;
    display: flex;
    flex-direction: column;
    background-color: #003366;
    align-items: center;
    justify-content: center;
    overflow-y: hidden;
    padding: 4em 0em;

`;

export const StyledFieldSetDiv = styled.div`
${typography.toString()}
    width: 100%;
    height: 100%;
    flex: auto;
    flex-direction: row;
    background-color: white;
    align-items: center;
    justify-content: center;
    display: inline-block;
    padding: 1em 11em;
`;

export const p = styled.p`
`;
