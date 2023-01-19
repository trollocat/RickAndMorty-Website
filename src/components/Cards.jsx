import Card from "./Card";
import { CardList } from "../css/StyledHome";

const Cards = ({ characters, onClose }) => {
  return (
    <CardList>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
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

export default Cards;
