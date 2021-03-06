import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { colors } from "../../tailwind";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import {
  UpDown,
  UpDownWide,
  LeftRight,
  RightLeft,
  Bounce
} from "../styles/animations";
import SVG from "../components/SVG";

const Wrapper = styled.div`
  ${tw`w-full xl:w-2/3`};
`;

const Hero = ({ children, offset }) => (
  <>
    <Divider speed={0.2} offset={offset}>
      <UpDown>
        <SVG
          icon="video"
          hiddenMobile
          width={32}
          stroke={colors.orange}
          left="5%"
          top="20%"
        />
        <SVG
          icon="box"
          width={6}
          fill={colors["grey-darker"]}
          left="60%"
          top="15%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="envira"
          width={12}
          stroke={colors["grey-darker"]}
          left="90%"
          top="50%"
        />
        <SVG
          icon="camera"
          width={16}
          fill={colors["grey-darker"]}
          left="70%"
          top="90%"
        />
        <SVG
          icon="triangle"
          hiddenMobile
          width={16}
          stroke={colors["grey-darkest"]}
          left="30%"
          top="65%"
        />
        <SVG icon="camera" width={16} fill={colors.red} left="82%" top="5%" />
        <SVG
          icon="circle"
          width={6}
          hiddenMobile
          fill={colors["grey-darkest"]}
          left="75%"
          top="10%"
        />

        <SVG
          icon="circle"
          width={12}
          fill={colors.orange}
          left="55%"
          top="45%"
        />
      </UpDownWide>
      <LeftRight>
        <SVG
          icon="box"
          hiddenMobile
          width={6}
          fill={colors["grey-darkest"]}
          left="10%"
          top="10%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darker"]}
          left="80%"
          top="70%"
        />
        <SVG
          icon="leaf"
          hiddenMobile
          width={24}
          fill={colors.red}
          left="6%"
          top="70%"
        />
      </LeftRight>
      <RightLeft>
        <SVG icon="circle" width={6} fill={colors.red} left="4%" top="20%" />
        <SVG
          icon="upDown"
          width={8}
          fill={colors["grey-darkest"]}
          left="95%"
          top="90%"
        />

        <SVG
          icon="triangle"
          hiddenMobile
          width={8}
          stroke={colors["grey-darker"]}
          left="25%"
          top="5%"
        />
        <SVG icon="circle" width={64} fill={colors.green} left="95%" top="5%" />
      </RightLeft>
      <SVG
        icon="upDown"
        hiddenMobile
        width={24}
        fill={colors["grey-darker"]}
        left="5%"
        top="95%"
      />
      <SVG
        icon="hexa"
        width={16}
        hiddenMobile
        stroke={colors["grey-darker"]}
        left="10%"
        top="50%"
      />
        <Bounce>
          <SVG
            icon="doubleDown"
            hiddenMobile
            width={8}
            stroke={colors["grey-lighter"]}
            left="48%"
            top="80%"
          />
        </Bounce>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Wrapper>{children}</Wrapper>
    </Content>
  </>
);

export default Hero;

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
