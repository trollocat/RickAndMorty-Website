import { CardNormal, CloseButton, RoundedImage } from "../styled";

const Card = (props) => {
  const { name, species, gender, image, onClose } = props;
  return (
    <CardNormal>
      <CloseButton onClick={onClose}>X</CloseButton>
      <br />
      <RoundedImage src={image} alt={name} />
      <h2>{name}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
    </CardNormal>
  );
};

export default Card;
