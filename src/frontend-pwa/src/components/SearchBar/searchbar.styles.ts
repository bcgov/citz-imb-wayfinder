/**
 * @summary This is the styling page for the universal searchbar component.
 * @author Tyler Maloney
 */

import styled from '@emotion/styled';
import typography from '../../typography';

export const WrapperDiv = styled.div`
    max-width: 62.5em;
    margin: auto; 
    width: 20em; 
    height: 80%;
    position: relative;
    display: inline-block;
`;

export const StyledInput = styled.input`
  ${typography.toString()}
  max-width: 50em;
  width: 80%;
  padding: 0.125em 3.125em 0.125em 0.3125em;
  border-radius: 0.5em;
  font-family: ‘BCSans’, ‘Noto Sans’, Verdana, Arial, sans-serif;
  &:focus {
    outline: white 0.2em;
}
`;

export const StyledSearchButton = styled.button`
  position: absolute;
  height: 1.5625em;
  width: 1.5625em;
  right: 3.625em;
  top: 0.1875em;
  padding: 0em;
  background-color: #fbfbfb00;
`;

export const StyledClearButton = styled.button`
  position: absolute;
  height: 1.6875em;
  width: 1.6875em;
  right: 2.1875em;
  top: 0.125em;
  padding: 0em;
  background-color: #fbfbfb00;
`;
