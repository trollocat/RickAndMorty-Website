import { FachaLink, ActiveRectangle } from "./StyledLinkNav";

export const LinkNav = (props) => {
  return (
    <FachaLink to={props.to}>
      <span>{props.text}</span>
      <ActiveRectangle />
    </FachaLink>
  );
};
