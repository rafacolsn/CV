import styled from "styled-components";
import tw from "tailwind.macro";
import { rotateAnimation } from "../styles/animations";
import refresh from "../images/refresh-page-arrow-button.svg";
import cog from "../images/cog-solid.svg";


export const Title = styled.h1`
  ${tw`text-4xl lg:text-4xl font-serif text-hair mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    width: 40px;
    height: 40px;
    background: url(${refresh});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation("4s")};
    left: -60px;
    top: 5px;
  }
`;

export const CogTitle = styled.h1`
  ${tw`text-4xl lg:text-4xl font-serif text-hair mb-8 tracking-wide relative inline-block`};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    width: 40px;
    height: 40px;
    background: url(${cog});
    position: absolute;
    background-size: 40px;
    ${rotateAnimation("4s")};
    left: -60px;
    top: 5px;
  }
`;

export const BigTitle = styled.h1`
  ${tw`text-5xl lg:text-5xl font-serif text-black mb-6 tracking-wide`};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

export const Subtitle = styled.p`
  ${tw`text-2xl lg:text-2xl font-sans text-grey-darkest mt-8 xxl:w-3/4`};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;
