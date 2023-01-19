import { CardNormal, CloseButton, RoundedImage, CardTitle } from "../css/StyledHome";

const Card = ({ name, species, gender, image, onClose }) => {
  return (
    <CardNormal>
      <CloseButton onClick={onClose}>X</CloseButton>
      <RoundedImage src={image} alt={name} />
      <CardTitle>{name}</CardTitle>
      <h3>Specie: {species}</h3>
      <h3>Gender: {gender}</h3>
    </CardNormal>
  );
};

export default Card;
