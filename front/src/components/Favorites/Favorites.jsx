import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { orderCards, filterCards } from "../../redux/actions";
import { Card } from "../Card/Card";
import { CardList } from "../Cards/StyledCards";

export const Favorites = () => {
  const { allFavs, myFavorites } = useSelector((state) => state);
  const [warning, setWarning] = useState({
    filter: "",
  });
  const dispatch = useDispatch();
  const filterWarningCheck = () => {
    if (!myFavorites?.length && allFavs?.length) {
      setWarning({
        filter: `Hay ${
          allFavs?.length + 1
        } card/s favorita/s ocultas con el filtro actual, seleccionar "All" para verlas`,
      });
    } else {
      setWarning({ filter: "" });
    }
  };
  const handleSelect = (event, cb) => {
    dispatch(cb(event.target.value));
  };
  useEffect(() => {
    filterWarningCheck();
  }, [myFavorites]);
  return (
    <div>
      <div>
        <select
          onChange={(event) => handleSelect(event, orderCards)}
          id="orderCards"
          defaultValue="Order By"
        >
          <option value="Order By" disabled="disabled">
            Order By
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          onChange={(event) => handleSelect(event, filterCards)}
          id="filterCards"
          defaultValue="Filter By"
        >
          <option value="Filter By" disabled="disabled">
            Filter By
          </option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        {warning.filter && <span>{warning.filter}</span>}
      </div>
      <CardList>
        {myFavorites?.map(({ id, name, species, gender, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        ))}
      </CardList>
    </div>
  );
};
