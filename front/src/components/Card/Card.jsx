import {
  CardNormal,
  RoundedImage,
  CardTitle,
  InfoContainer,
  CategoryContainer,
  CategorySubtitle,
  CategoryValue,
  CloseButton,
  FavButton,
} from "./StyledCard";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";

export const Card = ({ id, name, species, gender, image, onClose }) => {
  // estado global
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(id));
    } else {
      setIsFav(true);
      dispatch(addFavorite({ id, name, species, gender, image, onClose }));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  // estado local
  const [isFav, setIsFav] = useState(false);

  return (
    <CardNormal>
      {onClose && (
        <CloseButton
          onClick={() => {
            onClose();
            isFav && dispatch(deleteFavorite(id));
          }}
        >
          X
        </CloseButton>
      )}
      {isFav ? (
        <FavButton onClick={handleFavorite}>❤️</FavButton>
      ) : (
        <FavButton onClick={handleFavorite}>🤍</FavButton>
      )}
      <Link to={`/detail/${id}`}>
        <RoundedImage src={image} alt={name} />
      </Link>
      <CardTitle>{name}</CardTitle>
      <InfoContainer>
        <CategoryContainer>
          <CategorySubtitle>Id</CategorySubtitle>
          <CategoryValue>{id}</CategoryValue>
        </CategoryContainer>
        <CategoryContainer>
          <CategorySubtitle>Specie</CategorySubtitle>
          <CategoryValue>{species}</CategoryValue>
        </CategoryContainer>
        <CategoryContainer>
          <CategorySubtitle>Gender</CategorySubtitle>
          <CategoryValue>{gender}</CategoryValue>
        </CategoryContainer>
      </InfoContainer>
    </CardNormal>
  );
};
