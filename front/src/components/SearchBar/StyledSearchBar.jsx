import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  gap: 3rem;
`;

export const BigInputField = styled.input`
  border-radius: 0.5rem;
  border-style: none;
  font-size: 2rem;
  width: 15rem;
`;

export const BigButton = styled.button`
  background-color: hsl(155, 60%, 40%);
  border-style: none;
  border-radius: 0.5rem;
  font-weight: bold;
  padding: 0 1rem 0 1rem;
  margin-right: 2rem;

  &:hover {
    opacity: 75%;
  }
`;
