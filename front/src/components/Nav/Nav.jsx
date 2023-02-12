import { Navbar, LinkContainer } from "./StyledNavbar";
import { SearchBar } from "../SearchBar/SearchBar";
import { LinkNav } from "../LinkNav/LinkNav";
import { Login } from "../Login/Login";

export const Nav = ({ onSearch, logout }) => {
  return (
    <Navbar>
      <LinkContainer>
        <LinkNav to="/home" text="home" />
        <LinkNav to="/about" text="about" />
        <LinkNav to="/favorites" text="favorites" />
      </LinkContainer>
      <SearchBar onSearch={onSearch} />
      <Login logout={logout} />
    </Navbar>
  );
};
