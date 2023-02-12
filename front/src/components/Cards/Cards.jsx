import { Card } from "../Card/Card";
import { CardList } from "./StyledCards";

export const Cards = ({ characters, onClose }) => {
  return (
    <CardList>
      {characters?.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => onClose(id)}
          />
        );
      })}
    </CardList>
  );
};
