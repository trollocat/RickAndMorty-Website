import Card from "./Card";

const Cards = (props) => {
  const { characters } = props;
  return (
    <div>
      {characters.map(({id, name, species, gender, image}) => {
        return (
          <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert("Emula que se cierra la card de " + name)}
          />
        );
      })}
    </div>
  );
}

export default Cards;