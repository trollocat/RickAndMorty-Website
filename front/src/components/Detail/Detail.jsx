import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <h1>NOMBRE: {character?.name}</h1>
      <h2>ESPECIE: {character?.species}</h2>
      <h2>GÉNERO: {character?.gender}</h2>
      <h2>ORIGIN: {character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name} />
      <Link to="/home">
        <button>HOME</button>
      </Link>
    </div>
  );
};
