import { LogOut } from "./StyledLogin";

export const Login = ({ logout }) => {
  return (
    <LogOut>
      <svg
        onClick={() => logout()}
        width="32px"
        height="32px"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" fill="white" fillOpacity="0.01" />
        <path
          d="M23.9917 6L6 6L6 42H24"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 33L42 24L33 15"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 23.9917H42"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </LogOut>
  );
};
