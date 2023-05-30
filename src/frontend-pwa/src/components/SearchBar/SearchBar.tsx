import { useState } from 'react';
import searchicon from '/searchicon.svg';
import clearicon from '/clearicon.svg';

import {
  WrapperDiv,
  StyledInput,
  StyledSearchButton,
  StyledClearButton,
} from './searchbar.styles';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const wordEntered = event.target.value;
    setQuery(wordEntered);
  };

  return (
    <WrapperDiv className="searchInput">
      <StyledInput
        type="text"
        placeholder="Enter something here..."
        onChange={inputHandler}
        value={query}
      />
      <StyledSearchButton className="icon" type="submit">
        <img src={searchicon} alt="submit!" />
      </StyledSearchButton>
      <StyledClearButton className="icon" type="reset" onClick={() => setQuery('')}>
        <img src={clearicon} alt="clear!" />
      </StyledClearButton>
    </WrapperDiv>
  );
}
