import tw from "tailwind.macro";
import styled, { keyframes, css } from "styled-components";

export const verticalSlide = keyframes`
.slider {
	overflow-y: hidden;
	max-height: 500px; /* approximate max height */

	transition-property: all;
	transition-duration: .5s;
	transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const blink = keyframes`
  from {
    opacity:.1;
  }
  to {
    opacity:1;
  }
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const bounce = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
`;

const upDownWide = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;
const leftRight = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(50px);
  }
`;
const rightLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-30px);
  }
`;

const blinkAnimation = css`
  ${blink} 1s ease-in-out infinite alternate;
`;

const bounceAnimation = css`
  ${bounce} .7s infinite alternate;
  ${blink} 3s ease-in-out infinite alternate;
`;

const upDownAnimation = css`
  ${upDown} 4s ease-in-out infinite alternate;
`;

const upDownWideAnimation = css`
  ${upDownWide} 18s ease-in-out infinite alternate;
`;
const leftRightAnimation = css`
  ${leftRight} 5s ease-in-out infinite alternate;
`;
const rightLeftAnimation = css`
  ${rightLeft} 3s ease-in-out infinite alternate;
`;

export const Blink = styled.div`
  animation: ${blinkAnimation};
`;

export const Bounce = styled.div`
  animation: ${bounceAnimation};
  ${tw`pin absolute`};
`;

export const UpDown = styled.div`
  animation: ${upDownAnimation};
  ${tw`pin absolute`};
`;

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation};
  ${tw`pin absolute`};
`;
export const LeftRight = styled.div`
  animation: ${leftRightAnimation};
  ${tw`pin absolute`};
`;
export const RightLeft = styled.div`
  animation: ${rightLeftAnimation};
  ${tw`pin absolute`};
`;

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`;

export const rotateAnimation = length => css`
  animation: ${rotate} ${length} linear infinite;
`;
