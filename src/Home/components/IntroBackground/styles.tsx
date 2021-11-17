import styled, { css } from "styled-components";
import { CircleAni, FadeIn, SlideUp } from "../../../Styles/animation";

export const IntroSection = styled.article`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	z-index: 1;
`;

export const IntroTop = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 650px;
	line-height: 1.2em;
	align-items: center;
	color: #e4cbac;
	font-size: 22px;
	transform: translateY(-100px);
	transition: opacity 1s, transform 1s;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	overflow: hidden;
	filter: blur(0.5px);

	span {
		display: block;
		flex: 1;
		text-align: center;
	}

	span:last-of-type {
		flex: 0.6;
	}

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		width: 90%;
		transform: translateY(-50px);
		opacity: 1;
		transform: translateY(-50px);
	}
`;

export const Line = styled.i`
	flex: 1.4;
	display: block;
	height: 1px;
	background-color: #e4cbac;
	margin: 0 10px;
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
export const IntroCenterText = styled.span`
	display: block;
	font-size: 150px;
	line-height: 1em;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-style: italic;
	color: #e4cbac;
	transform: translateY(-30px);
	opacity: 1;
	filter: blur(1px);
	animation: ${SlideUp} 2s;

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		font-size: 80px;
		vertical-align: top;
	}
`;
