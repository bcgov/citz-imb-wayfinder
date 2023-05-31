// import { useState } from 'react';
import searchicon from '/searchicon.svg';
import clearicon from '/clearicon.svg';

import {
  WrapperDiv,
  StyledInput,
  StyledSearchButton,
  StyledClearButton,
} from './searchbar.styles';

export type SearchBarProps = {
  handleChange: () => void;
  handleSubmit: () => void;
  handleClear: () => void;
  query: string;
}

export default function SearchBar({
  handleChange,
  handleSubmit,
  handleClear,
  query,
}: SearchBarProps) {
  return (
    <WrapperDiv className="searchInput">
      <StyledInput
        type="text"
        aria-label="search input field"
        placeholder="Enter something here..."
        onChange={() => handleChange()}
        value={query}
      />
      <StyledSearchButton
        className="icon"
        type="submit"
        aria-label="submit button"
        onClick={() => handleSubmit()}
      >
        <img src={searchicon} alt="submit!" />
      </StyledSearchButton>
      <StyledClearButton
        className="icon"
        type="reset"
        aria-label="clear text field button"
        onClick={() => handleClear()}
      >
        <img src={clearicon} alt="clear!" />
      </StyledClearButton>
    </WrapperDiv>
  );
}
