import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.bg};
  width: 100%;
`;
const Ul = styled.ul`
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  font-family: "Open Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", "sans-serif";
  li {
    color: #d9c492;
    display: inline-block;
    list-style-type: none;

    &::after {
      content: "|";
      float: right;
      padding: 0 5rem;
    }
    &:last-child::after {
      display: none;
    }
  }
`;

const Menu = ({ children, bg }) => (
  <Wrapper bg={bg}>
    <Ul>{children}</Ul>
  </Wrapper>
);

export default Menu;
