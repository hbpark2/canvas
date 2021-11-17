import styled, { css } from "styled-components";
import { CircleAni, FadeIn, SlideUp } from "../Styles/animation";

export const Container = styled.main`
	position: relative;
	width: 100%;
	min-height: 2000px;
	z-index: 100;
`;
export const IntroSection = styled.article<{ scrl: number }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	z-index: 1;
	${({ scrl }) =>
		scrl > 800
			? css`
					position: relative;
					top: 800px;
			  `
			: css`
					position: fixed;
			  `}
`;

export const IntroTop = styled.div<{ scrl: number }>`
	display: flex;
	flex-wrap: wrap;
	width: 650px;
	line-height: 1.2em;
	align-items: center;
	color: #e4cbac;
	font-size: 22px;
	transform: translateY(-80px);
	transition: opacity 1s, transform 1s;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	filter: ${({ scrl }) => `blur(${1 - scrl / 1000}px)`};
	overflow: hidden;

	span {
		display: block;
		flex: 1;
		text-align: center;
	}

	span:last-of-type {
		flex: 0.6;
	}

	${({ scrl }) =>
		scrl > 50
			? css`
					opacity: 1;
					transform: translateY(-100px);
			  `
			: css`
					opacity: 0;
					transform: translateY(100px);
			  `}

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		width: 90%;
		${({ scrl }) =>
			scrl > 50
				? css`
						opacity: 1;
						transform: translateY(-70px);
				  `
				: css`
						opacity: 0;
						transform: translateY(100px);
				  `}
	}
`;



export const Line = styled.i`
	flex: 1.4;
	display: block;
	height: 1px;
	background-color: #e4cbac;
	margin: 0 10px;
`;

export const CircleBox = styled.i<{ scrl: number }>`
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

	${({ scrl }) =>
		scrl > 300
			? css`
					filter: blur(1px);
			  `
			: css`
					filter: blur(1.5px);
			  `}

	${({ scrl }) =>
		scrl > 800
			? css`
					position: absolute;
					top: 1300px;
			  `
			: css`
					position: fixed;
			  `}

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
		transition: opacity 1s;
		${({ scrl }) =>
			scrl > 50
				? css`
						opacity: 0.8;
				  `
				: css`
						opacity: 0.1;
				  `}
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
		transition: opacity 1s;
		${({ scrl }) =>
			scrl > 100
				? css`
						opacity: 0.8;
				  `
				: css`
						opacity: 0.2;
				  `}
	}

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		width: 300px;
		height: 300px;
		&::after,
		&::before {
			width: 300px;
			height: 300px;
		}

		${({ scrl }) =>
			scrl > 800
				? css`
						position: absolute;
						top: 1100px;
				  `
				: css`
						position: fixed;
				  `}
	}
`;

export const IntroCenter = styled.p<{ scrl: number }>`
	overflow: hidden;
	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		${({ scrl }) =>
			scrl > 800 &&
			css`
				transform: translateY(-30px);
			`};
	}
`;
export const IntroCenterText = styled.span<{ scrl: number }>`
	display: block;
	font-size: 150px;
	line-height: 1em;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-style: italic;
	color: #e4cbac;
	transform: translateY(-30px);
	transition: opacity 1s, transform 1s;

	${({ scrl }) => scrl < 1000 && `filter:blur(${1 - scrl / 1500}px);`}

	${({ scrl }) =>
		scrl > 300
			? css`
					opacity: 1;
					transform: translateY(-30px);
			  `
			: css`
					opacity: 0;
					transform: translateY(100px);
			  `};

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		font-size: 80px;
		vertical-align: top;
	}
`;

export const ImgSection = styled.article`
	position: relative;
	top: 800px;
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	padding-bottom: 50px;
	z-index: 1;
	animation-name: ${FadeIn};
	animation-duration: 1s;
`;

export const ImageWrap = styled.div``;

export const TextWrap = styled.div`
	font-family: ${({ theme: { accentFont } }) => accentFont};
	color: #e4cbac;
`;

export const Image = styled.img`
	display: block;
	width: 500px;
	opacity: 0.9;
	filter: blur(2px);
	transition: all 0.5s;

	&:hover {
		opacity: 1;
		filter: blur(0px);
	}

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		width: 55%;
		opacity: 1;
		filter: blur(0px);
	}
`;
