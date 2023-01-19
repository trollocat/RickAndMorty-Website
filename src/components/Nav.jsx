import { Navbar, LinkContainer } from "../css/StyledNavbar";
import SearchBar from "./SearchBar";
import LinkNav from "./LinkNav";

const Nav = ({ onSearch }) => {
  return (
    <Navbar>
      <LinkContainer>
        <LinkNav to="/" text="home" />
        <LinkNav to="/about" text="about" />
      </LinkContainer>
      <SearchBar onSearch={onSearch} />
    </Navbar>
  );
};

export default Nav;
