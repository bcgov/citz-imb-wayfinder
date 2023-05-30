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
  handleSearch: () => void;
  handleClear: () => void;
  query: string;
}

export default function SearchBar({
  handleChange,
  handleSearch,
  handleClear,
  query,
}: SearchBarProps) {
  return (
    <WrapperDiv className="searchInput">
      <StyledInput
        type="text"
        placeholder="Enter something here..."
        onChange={handleChange}
        value={query}
      />
      <StyledSearchButton className="icon" type="submit" onClick={() => handleSearch()}>
        <img src={searchicon} alt="submit!" />
      </StyledSearchButton>
      <StyledClearButton className="icon" type="reset" onClick={() => handleClear()}>
        <img src={clearicon} alt="clear!" />
      </StyledClearButton>
    </WrapperDiv>
  );
}

// const [query, setQuery] = useState('');

// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   const wordEntered = event.target.value;
//   setQuery(wordEntered);
// };
