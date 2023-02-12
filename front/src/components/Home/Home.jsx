import { CharactersPanel } from "../CharacterPanel/CharactersPanel";

export const Home = ({onClose, characters}) => {
  return <CharactersPanel onClose={onClose} characters={characters}/>;
};
