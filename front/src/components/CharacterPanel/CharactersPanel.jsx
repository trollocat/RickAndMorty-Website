import React from "react";
import { Cards } from "../Cards/Cards";

export const CharactersPanel = ({onClose, characters}) => {
  

  return (
    <div>
      <Cards onClose={onClose} characters={characters} />
    </div>
  );
};
