import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  margin: 2rem;
  border-radius: 1rem;
  background-color: #101010;
  width: 24em;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;

export const FieldContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 0.3rem;
  font-size: 1.5rem;
  max-height: 2rem;
  padding: 1rem;
`;

export const FieldElement = styled.div`
  display: flex;
  gap: 1rem;

  & > input {
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

export const ErrorContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  left: calc(100% + 3rem);
  width: 50rem;
  user-select: none;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  padding: 0.2rem 0.8rem 0.2rem 0.8rem;
  color: #fefefe;
  background-color: #f45555;
  border: 1px solid #ffffff;
  border-radius: .2rem; 
  font-size: 1rem;
`;

export const SubmitButton = styled.button`
  height: 2rem;
  width: 8rem;
`;
