import styled, { createGlobalStyle } from "styled-components";

// documentation: https://pablomonteserin.com/curso/react/styled-components/

export const GlobalStyle = createGlobalStyle`
    body {
        color: hsl(270, 100%, 95%);
        background-color: hsl(270, 5%, 10%);
        margin: 0%;
    }
    `;

export const CardList = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const CardNormal = styled.div`
  color: hsl(270, 5%, 10%);
  background-color: hsl(270, 100%, 95%);
  border-radius: 1em;
  padding: 1rem;

  &:hover {
    opacity: 50%;
  }
`;

export const RoundedImage = styled.img`
  border-radius: 0.5em;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const CloseButton = styled.button`
  display: flex;
  float: right; // no la tenia a float, lo mueve a la derecha
`;

export const CuteHr = styled.hr`
  border-style: dotted;
`;
