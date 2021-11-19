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

import { Loop, Loop2, RightToLeft } from "../../../Styles/animation";

export const Container = styled.div<{ blur: boolean }>`
	position: fixed;
	top: 0;
	width: 100%;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	transition: background-color 0.5s;
	background-color: ${({ theme: { bgColor1 } }) => bgColor1};
	transition: filter 0.5s;
	${({ blur }) => (blur ? "filter:blur(10px)" : "filter:none")};

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		overflow-x: hidden;
	}
`;

export const Inner = styled.div`
	width: 98vw;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	animation-name: ${RightToLeft};
	animation-duration: 2s;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 80vw;
		overflow: hidden;
		animation: none;
	}
`;

export const LoopContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	transition: background-color 0.5s;
	background-color: ${({ theme: { bgColor1 } }) => bgColor1};
`;

export const LoopWrap = styled.div`
	position: relative;
	display: flex;
	transform: rotate(15deg);
	flex-flow: row nowrap;
	width: 150vw;
	height: ${({ theme: { fullHeight } }) => fullHeight};
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

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 75vw;
		height: 550px;
	}
`;
