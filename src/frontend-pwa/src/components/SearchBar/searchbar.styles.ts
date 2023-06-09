/**
 * @summary This is the styling page for the universal searchbar component.
 * @author  Tyler Maloney
 */

import styled from '@emotion/styled';
import typography from '../../typography';

export const WrapperDiv = styled.div`
    max-width: 62.5em;
    height: 2.5em;
    padding: 0.25em;
    margin: 0.25em;
    width: 20em; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
    border-radius: 8pt;
    border: 1px solid black;
`;

export const StyledInput = styled.input`
  ${typography.toString()}
  max-width: 50em;
  padding: 0.125em 1em;
  border-radius: 0.5em;
  border: none;
  background-color: inherit;
  &:focus {
    outline: white 0.2em;
  }
`;

export const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  background-color: #fbfbfb0;
  border: none;
  background: inherit;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledImg = styled.img`
  height: 100%;
  margin: 0;
`;
