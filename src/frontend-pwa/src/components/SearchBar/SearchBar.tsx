import { useState } from 'react';
import searchicon from '/searchicon.svg';

import {
  WrapperDiv,
  StyledInput,
  StyledIconButton,
} from './searchbar.styles';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const wordEntered = event.target.value;
    setQuery(wordEntered);
  };

  return (
    <WrapperDiv className="searchInput">
      <div className="inputDiv">
        <StyledInput
          type="text"
          placeholder="Enter something here..."
          onChange={inputHandler}
          value={query}
        />
      </div>
      <StyledIconButton className="icon" type="submit">
        <img src={searchicon} alt="submit!" />
      </StyledIconButton>
    </WrapperDiv>
  );
}

// <StyledIconButton className="icon" onClick={setQuery('')}>🔍</StyledIconButton>
