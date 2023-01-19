import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
`;

export const CardNormal = styled.div`
  position: relative;
  display: inline-block;
  color: hsl(270, 5%, 10%);
  background-color: hsl(0, 0%, 100%);
  border-radius: 1.1em;

  &:hover {
    opacity: 50%;
  }
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

export const RoundedImage = styled.img`
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  // no la tenia a float, se mueve a si mismo a la derecha
  float: right;
  margin-bottom: 1rem;
`
