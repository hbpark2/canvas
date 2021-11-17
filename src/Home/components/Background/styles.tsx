import styled, { css } from "styled-components";
import MainImg from "../../../Assets/mvp.jpg";
import Drawing1 from "../../../Assets/drawing-1.jpg";
import Drawing2 from "../../../Assets/drawing-2.jpg";
import Drawing3 from "../../../Assets/drawing-3.jpg";
import Drawing4 from "../../../Assets/drawing-4.jpg";
import Drawing5 from "../../../Assets/drawing-5.jpg";
import Drawing6 from "../../../Assets/drawing-6.jpg";
import Drawing7 from "../../../Assets/drawing-7.jpg";
import Drawing8 from "../../../Assets/drawing-8.jpg";
import Drawing9 from "../../../Assets/drawing-9.jpg";
import Drawing10 from "../../../Assets/drawing-10.jpg";
import Drawing11 from "../../../Assets/drawing-11.jpg";
import Drawing12 from "../../../Assets/drawing-12.jpg";
import Drawing13 from "../../../Assets/drawing-13.jpg";
import Drawing14 from "../../../Assets/drawing-14.jpg";
import Drawing15 from "../../../Assets/drawing-15.jpg";
import Drawing16 from "../../../Assets/drawing-16.jpg";
import Drawing17 from "../../../Assets/drawing-17.jpg";
import Drawing18 from "../../../Assets/drawing-18.jpg";
import Drawing19 from "../../../Assets/drawing-19.jpg";
import Bubble1 from "../../../Assets/bubble1.jpg";
import Bubble2 from "../../../Assets/bubble2.jpg";
import Bubble3 from "../../../Assets/bubble3.jpg";
import Moon1 from "../../../Assets/moon.jpg";
import Noise from "../../../Components/Common/Noise";
import { CircleAni, FadeIn, Loop, Loop2, RightToLeft } from "../../../Styles/animation";

export const Container = styled.div`
	position: absolute;
	top: 0;
	height: 100vh;
	background-color: ${({ theme: { bgColor1 } }) => bgColor1};
`;

export const Inner = styled.div`
	width: 100vw;
	height: 100vh;
	animation-name: ${RightToLeft};
	animation-duration: 2s;
`;

export const LoopContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme: { bgColor1 } }) => bgColor1};
`;

export const LoopWrap = styled.div`
	position: relative;
	display: flex;
	transform: rotate(15deg);
	flex-flow: row nowrap;
	width: 150vw;
	height: 100vh;
	left: 50%;
	margin-left: -50vw;
	margin-top: 20%;
	ul:first-child {
		animation: ${Loop} 50s -25s linear infinite;
		backface-visibility: hidden;
		will-change: transform;
	}
	ul + ul {
		-webkit-animation: ${Loop2} 50s linear infinite;
		animation: ${Loop2} 50s linear infinite;
	}
`;

export const ImageWrap = styled.ul`
	display: flex;
	flex-flow: row nowrap;
	width: 100%;
	margin: 0;
	padding: 0;
`;

export const ImageBox = styled.li<{ invert: boolean; bgImage: string }>`
	display: inline-block;
	width: calc(100vw / 2);
	height: 80vh;
	margin: 0 5% 0 0;
	list-style: none;
	text-align: center;
	background: url(${({ bgImage }) => bgImage}) center center;
	background-size: cover;
	transition: all 0.5s;

	${({ invert }) =>
		invert
			? css`
					filter: blur(2px) invert(0.8);
			  `
			: css`
					filter: blur(2px);
			  `};

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		width: 75vw;
	}
`;

export const CircleBox = styled.i`
	position: fixed;
	display: block;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid #e4cbac;
	z-index: 5;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(1.5px);
	animation-name: ${FadeIn};
	animation-duration: 1s;
	filter: blur(1px);

	&::after {
		position: absolute;
		top: -2px;
		left: -2px;
		display: block;
		width: 500px;
		height: 500px;
		content: "";
		border: 1px solid #e4cbac;
		border-radius: 100% 70% 80% 60% / 100% 70% 80% 60%;
		animation-name: ${CircleAni};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-fill-mode: inherit;
		animation-timing-function: linear;
		opacity: 0.8;
	}

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 500px;
		height: 500px;
		content: "";
		border: 1px solid #e4cbac;
		border-radius: 100% 70% 80% 60% / 100% 70% 80% 60%;
		animation-name: ${CircleAni};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-fill-mode: inherit;
		animation-timing-function: linear;
		animation-direction: reverse;
		opacity: 0.8;
		transition: opacity 1s;
	}

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		width: 300px;
		height: 300px;
		&::after,
		&::before {
			width: 300px;
			height: 300px;
		}
	}
`;

export const IntroCenter = styled.p`
	overflow: hidden;

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		transform: translateY(-30px);
	}
`;
