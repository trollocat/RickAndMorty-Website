import { useState } from "react";
import { SearchBarContainer, BigInputField, BigButton } from "../css/StyledNavbar";

const SearchBar = ({ onSearch }) => {
  const [character, setCharacter] = useState("");

  const changeHandler = (event) => {
    setCharacter(event.target.value);
  };

  return (
    <SearchBarContainer>
      <BigInputField
      type="search"
      placeholder="Character ID"
      value={character}
      onChange={changeHandler}
      onKeyPress={(event) => event.key === 'Enter' && onSearch(character)}
      />
      <BigButton onClick={() => onSearch(character)}>Agregar</BigButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
