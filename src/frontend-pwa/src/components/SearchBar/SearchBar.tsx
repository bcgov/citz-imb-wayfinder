/* eslint-disable max-len */
/**
 * @summary This is a common SearchBar component for use in our application.
 *          Functionality is left undefined aside from stub functions to foster modularity
 * @param   setUseState - useState setter of the query.
 * @param   handleClear - stub function to allow for variable response in clearing the text field.
 * @param   borderRadius - Boolean whether to turn borderRadius on
 * @param   border - Boolean whether to turn border on
 * @param   query - the query to be searched for.
 * @type    {( handleChange: () => void, handleSubmit: () => void, handleClear: () => void, query: boolean, border: boolean, borderRadius: boolean )}
 * @author  Tyler Maloney
 */
import { FormEvent } from 'react';
import clearicon from '/clearicon.svg';

import {
  WrapperDiv,
  StyledInput,
  StyledButton,
  StyledImg,
} from './searchbar.styles';

export type SearchBarProps = {
  setUseState: (type: any) => void;
  handleClear: () => void;
  borderRadius: boolean;
  border: boolean;
  query: string;
}

export default function SearchBar({
  setUseState,
  handleClear,
  query,
  borderRadius = true,
  border = true,

}: SearchBarProps) {
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setUseState(event.currentTarget.value);
  };

  return (
    <WrapperDiv
      className="searchInput"
      borderRadius={borderRadius}
      border={border}
    >
      <StyledInput
        type="text"
        aria-label="search input field"
        placeholder="Filter search..."
        onChange={handleChange}
        value={query}
      />
      <StyledButton
        className="icon"
        type="reset"
        aria-label="clear text field button"
        onClick={handleClear}
      >
        <StyledImg src={clearicon} alt="clear!" />
      </StyledButton>
    </WrapperDiv>
  );
}
