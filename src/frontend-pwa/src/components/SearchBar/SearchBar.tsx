/* eslint-disable max-len */
/**
 * @summary This is a common SearchBar component for use in our application.
 *          Functionality is left undefined aside from stub functions to foster modularity
 * @param   handleChange - stub function to allow for variable response to input change.
 * @param   handleSubmit - stub function to allow for variable response in regard to query submission.
 * @param   handleClear - stub function to allow for variable response in clearing the text field.
 * @param   query - the query to be searched for.
 * @type    {( handleChange: () => void, handleSubmit: () => void, handleClear: () => void, query: boolean )}
 * @author  Tyler Maloney
 */
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
