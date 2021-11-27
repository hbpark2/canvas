import styled, { css } from "styled-components";

import { Loop, Loop2, RightToLeft } from "../../../Styles/animation";

export const Container = styled.div<{ blur: boolean }>`
	position: fixed;
	top: 0;
	width: 100%;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	transition: background-color 0.5s;
	background-color: ${({ theme: { bgColor1 } }) => bgColor1};
	transition: filter 0.5s;
	${({ blur }) => (blur ? "filter:blur(5px)" : "filter:none")};

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.nomalPC} {
		overflow-x: hidden;
		display: none;
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
		width: 70vw;
		height: 550px;
	}
`;
