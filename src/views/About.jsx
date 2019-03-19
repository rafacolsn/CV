import React from "react";
import PropTypes from "prop-types";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { UpDown, UpDownWide, LeftRight, RightLeft } from "../styles/animations";
import { colors } from "../../tailwind";
import SVG from "../components/SVG";
import Menu from "../components/Menu";


const About = ({ children, offset }) => (
  <>
 
    <Divider 
      bg="#23262b"
      clipPath="polygon(0 6%, 100% 24%, 100% 100%, 0 94%)"
      speed={0.2}
      offset={offset}
    />
    <Divider speed={0.1} offset={offset}>
      <UpDown>
        <SVG
          icon="box"
          hiddenMobile
          width={6}
          fill={colors.blue}
          left="50%"
          top="75%"
        />
        <SVG
          icon="video"
          hiddenMobile
          width={38}
          fill={colors["grey-darkest"]}
          left="70%"
          top="20%"
        />
        <SVG
          icon="triangle"
          width={8}
          stroke={colors["grey-darkest"]}
          left="25%"
          top="5%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={24}
          fill={colors.orange}
          left="80%"
          top="80%"
        />
        <SVG
          icon="camera"
          hiddenMobile
          width={10}
          fill={colors.orange}
          left="42%"
          top="26%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="triangle"
          width={12}
          stroke={colors.white}
          left="95%"
          top="50%"
        />
        <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          fill={colors["grey-darkest"]}
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <LeftRight>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG
          icon="circle"
          width={12}
          fill={colors["grey-darkest"]}
          left="70%"
          top="60%"
        />
        <SVG icon="box" width={6} fill={colors.orange} left="90%" top="10%" />
        <SVG
          icon="box"
          width={12}
          fill={colors["grey-darkest"]}
          left="20%"
          top="30%"
        />
        <SVG
          icon="hexa"
          width={8}
          stroke={colors["grey-darkest"]}
          left="80%"
          top="70%"
        />
      </LeftRight>
      <RightLeft>
        <SVG
          icon="envira"
          hiddenMobile
          width={10}
          stroke={colors.red}
          left="5%"
          top="80%"
        />
      </RightLeft>
    </Divider>
    <Content speed={0.4} offset={offset}>
      <Inner>{children}</Inner>
    </Content>
  </>
);

export default About;

About.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
