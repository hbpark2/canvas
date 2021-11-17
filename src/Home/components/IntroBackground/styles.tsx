import styled, { css } from "styled-components";
import { CircleAni, FadeIn, SlideUp } from "../../../Styles/animation";

export const IntroSection = styled.article`
	position: absolute;
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
