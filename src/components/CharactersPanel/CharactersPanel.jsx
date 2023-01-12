import React from "react";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import characters from "../../data";

import {CuteHr} from "../styled";

// Lo hice class en vez de funcional para no perder la costumbre (solo este componente)

export default class CharactersPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <Cards characters={characters} />
        </div>
        <CuteHr />
        <div>
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
      </div>
    );
  }
}
