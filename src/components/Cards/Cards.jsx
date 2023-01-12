import Card from "../Card/Card";
import { CardList } from "../styled";

const Cards = (props) => {
  const { characters } = props;
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
            onClose={() =>
              window.alert("Emula que se cierra la card de " + name)
            }
          />
        );
      })}
    </CardList>
  );
};

export default Cards;
