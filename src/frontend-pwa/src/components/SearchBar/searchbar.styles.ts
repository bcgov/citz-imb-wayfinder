/**
 * @summary This is the styling page for the universal searchbar component.
 * @author  Tyler Maloney
 */

import styled from '@emotion/styled';
import typography from '../../typography';

type SearchBarProps = {
  borderRadius: boolean;
  border: boolean;
}
export const WrapperDiv = styled.div<SearchBarProps>`
    width: 100%;
    height: 2.5em;
    padding: 0.25em;
    margin: 0.25em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: white;
    border-radius: ${(props) => (props.borderRadius === true ? '8pt' : 0)};
    border: ${(props) => (props.border ? '1px solid black' : 'none')};
`;

export const StyledInput = styled.input`
  ${typography.toString()}
  padding: 0.125em 1em;
  border-radius: 0.5em;
  border: none;
  width: 100%;
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
