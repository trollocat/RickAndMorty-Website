import styled from "styled-components";

export const CardNormal = styled.div`
  position: relative;
  display: inline-block;
  color: hsl(270, 5%, 10%);
  border-radius: 1.2em;
  transition: all 0.1s ease-out;

  &:hover {
    & > button {
      transform: translateY(58%);
    }
    transform: translateY(-3%);
  }
`;

export const RoundedImage = styled.img`
  transition: inherit;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
`;

export const CardTitle = styled.h2`
  position: absolute;
  top: 15.85rem;
  left: 0.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.66);
  padding: 0.2rem;
  margin: 0;
  width: fit-content;
`;

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  justify-content: space-evenly;
  background-color: white;
`;

export const CategoryContainer = styled.div`
  flex: 1;
  border-radius: 0.2rem;
  background-color: #dcdcdc;
  padding: 0.5rem;
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const CategorySubtitle = styled.h5`
  text-transform: uppercase;
  margin: 0;
`;

export const CategoryValue = styled.h5`
  /* text-transform: uppercase; */
  font-weight: 100;
  font-style: italic;
  margin: 0;
`;

// botones

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  // no la tenia a float, se mueve a si mismo a la derecha
  float: right;
  transition: inherit;
`;

export const FavButton = styled.button`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  float: left;
  transition: inherit;
`;
