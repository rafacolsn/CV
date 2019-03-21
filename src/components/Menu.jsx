import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.bg};
  width: 100%;
`;
const Ul = styled.ul`
  @media (max-width: 900px) {
    i {
      padding: 0 1rem;
    }
   
    #phone {
      padding: 0;
    }
      overflow-y: hidden;
      min-height: 3rem;

    li {
      max-height: 0;
    }
    
    @keyframes slideup {
      from {
        transform: translateY(12rem)
      }
    
      to {
        transform: translateY(-12rem)
      }
    }
    #li-1 {
      animation: slideup 12s -3s infinite cubic-bezier(0,.77,1,.35);
    }
    #li-2 {
      animation: slideup 12s -6s infinite cubic-bezier(0,.77,1,.35);
    }
    #li-3 {
      animation: slideup 12s -9s infinite cubic-bezier(0,.77,1,.35);
    }
    #li-4 {
      animation: slideup 12s -12s infinite cubic-bezier(0,.77,1,.35);
    }
  }
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  font-family: "Open Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", "sans-serif";
    li {
      color: #d9c492;
      list-style-type: none;

    }
  @media (min-width: 900px) {
    li {
      
      display: inline-block;

      &::after {
        content: "|";
        float: right;
        padding: 0 5rem;
      }
      &:last-child::after {
        display: none;
      }
      i {
        padding: 0 1rem;
      }
    }
  }
`;

const Menu = ({ children, bg }) => (
  <Wrapper bg={bg}>
    <Ul>{children}</Ul>
  </Wrapper>
);

export default Menu;
