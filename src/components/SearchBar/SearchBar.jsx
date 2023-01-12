import { SearchBarContainer } from "../styled";

const SearchBar = (props) => {
  const { onSearch } = props;
  return (
    <SearchBarContainer>
      <input type="search" />
      <button onClick={onSearch}>Agregar</button>
    </SearchBarContainer>
  );
};

export default SearchBar;
