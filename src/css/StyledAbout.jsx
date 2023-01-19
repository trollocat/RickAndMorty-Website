import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 4rem;
  margin: 0;

  & > div {
    display: flex;
    gap: 4rem;
    background-color: #131313;
    border-radius: 1rem;
  }
`;

export const BigPhoto = styled.img`
  height: 70vh;
  /* border-radius: 1rem; */
`;

export const TextContainer = styled.div`
  width: 40vh;
`;

export const Headline = styled.h1``;

export const Paragraph = styled.p`
  text-indent: 1.5em;
  font-size: 1.35rem;
`;
