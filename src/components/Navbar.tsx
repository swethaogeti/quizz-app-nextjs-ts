import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.nav`
  max-width: 100%;

  display: flex;
  padding: 1rem;
  ul {
    display: flex;

    li {
      list-style: none;
      padding: 1rem;
      font-weight: bold;
      text-decoration: none;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #e7006c;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
`;
const Navbar = () => {
  return (
    <NavContainer>
      <ul>
        <li>
          <StyledLink href="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink href="/about">About</StyledLink>
        </li>
      </ul>
    </NavContainer>
  );
};
export default Navbar;
