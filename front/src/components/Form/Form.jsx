import { useEffect, useState } from "react";
import { validate } from "./validation";
import {
  FormContainer,
  StyledForm,
  FieldContainer,
  FieldElement,
  SubmitButton,
  ErrorContainer,
  ErrorMessage,
} from "./StyledForm";

export const Form = ({login}) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    usernameErrors: {
      isEmail: "",
      isEmpty: "",
      validLength: "",
    },
    passwordErrors: {
      hasNumber: "",
      validLength: "",
    },
  });

  useEffect(() => {
    validate(form, setErrors);
  }, [form]);

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(form);
    // setForm({
    //   username: "",
    //   password: "",
    // });
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={submitHandler}>
        <FieldContainer>
          <h1>R&M Login</h1>
        </FieldContainer>
        <FieldContainer>
          <FieldElement>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={onChangeHandler}
            />
          </FieldElement>
          <ErrorContainer>
            {errors.usernameErrors.isEmpty !== "" && (
              <ErrorMessage>{errors.usernameErrors.isEmpty}</ErrorMessage>
            )}
            {errors.usernameErrors.isEmail !== "" && (
              <ErrorMessage>{errors.usernameErrors.isEmail}</ErrorMessage>
            )}
            {errors.usernameErrors.validLength !== "" && (
              <ErrorMessage>{errors.usernameErrors.validLength}</ErrorMessage>
            )}
          </ErrorContainer>
        </FieldContainer>
        <FieldContainer>
          <FieldElement>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={onChangeHandler}
            />
          </FieldElement>
          <ErrorContainer>
            {errors.passwordErrors.hasNumber !== "" && (
              <ErrorMessage>{errors.passwordErrors.hasNumber}</ErrorMessage>
            )}
            {errors.passwordErrors.validLength !== "" && (
              <ErrorMessage>{errors.passwordErrors.validLength}</ErrorMessage>
            )}
          </ErrorContainer>
        </FieldContainer>
        <FieldContainer>
          <SubmitButton type="submit">ENVIAR</SubmitButton>
        </FieldContainer>
      </StyledForm>
    </FormContainer>
  );
};
