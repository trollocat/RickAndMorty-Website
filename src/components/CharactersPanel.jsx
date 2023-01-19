import React from "react";
import Cards from "./Cards";
import Nav from "./Nav";
import { useState } from "react";

const CharactersPanel = () => {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        // mapeo characters a un array de solo sus id, y checkeo si incluyen el data.id
        if (data.name && !characters.map((char) => char.id).includes(data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else if(data.name) {
          alert("Ese personaje ya existe")
        }
        else {
          alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
};

export default CharactersPanel;
