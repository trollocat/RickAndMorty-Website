import { FachaLink, ActiveRectangle } from "../css/StyledNavbar";

const LinkNav = (props) => {
  return (
    <FachaLink to={props.to}>
      <span>{props.text}</span>
      <ActiveRectangle />
    </FachaLink>
  );
};

export default LinkNav;
