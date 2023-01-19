import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: hsl(270, 10%, 5%);
`;

export const LinkContainer = styled.div`
  display: flex;
  background-color: #131313;
`;

export const FachaLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  height: 100%;
  width: 9rem;
  text-decoration: none;
  color: #d1d1d1;
  border-right: #282828 solid 2px;

  & > span {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1.25rem;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
  }

  &:hover {
    color: white;
  }

  &:active {
    color: hsl(155, 60%, 40%);
  }

  &:hover > div {
    transition: 0ms;
    background-color: white;
  }

  &:active > div {
    transition: 0ms;
    background-color: hsl(155, 60%, 40%);
  }
`;

export const ActiveRectangle = styled.div`
  transition: all 0.15s ease-out;
  background-color: gray;
  height: 0.2rem;
`;

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
