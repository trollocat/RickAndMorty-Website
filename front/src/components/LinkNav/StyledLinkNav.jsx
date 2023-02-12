import styled from "styled-components";
import { Link } from "react-router-dom";

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
