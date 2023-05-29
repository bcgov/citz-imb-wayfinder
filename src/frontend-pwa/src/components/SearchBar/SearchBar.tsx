import { useState } from 'react';

import {
  WrapperDiv,
  StyledInput,
  StyledIconButton,
} from './searchbar.styles';

// import useState from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const wordEntered = event.target.value;
    setQuery(wordEntered);
  };

  return (
    <WrapperDiv className="searchInput">
      <form>
        <StyledInput
          type="text"
          placeholder="Enter something here..."
          onChange={inputHandler}
          value={query}
        />
        <StyledIconButton className="icon">🔍</StyledIconButton>
      </form>
    </WrapperDiv>
  );
}

// <StyledIconButton className="icon" onClick={setQuery('')}>🔍</StyledIconButton>
