import styled, { css } from "styled-components";
import { CircleAni, FadeIn, SlideUp, SlideUpMo, SlideUpMoTop } from "../../../Styles/animation";

export const CircleBox = styled.article<{ scrl: number }>`
	display: flex;
	justify-content: center;
	align-items: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid ${({ theme: { accentColor } }) => accentColor};
	z-index: 5;
	width: 500px;
	height: 500px;
	border-radius: 50%;
	filter: blur(1.5px);
	animation-name: ${FadeIn};
	animation-duration: 1s;
	transition: border-color 0.5s;

	&::after {
		position: absolute;
		top: -2px;
		left: -2px;
		display: block;
		width: 500px;
		height: 500px;
		content: "";
		border: 1px solid ${({ theme: { accentColor } }) => accentColor};
		border-radius: 100% 70% 80% 60% / 100% 70% 80% 60%;
		animation-name: ${CircleAni};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-fill-mode: inherit;
		animation-timing-function: linear;
		transition: opacity 1s, border-color 0.5s;

		@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
			${({ scrl }) =>
				scrl > 50
					? css`
							opacity: 0.8;
					  `
					: css`
							opacity: 0.1;
					  `}
		}
	}

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 500px;
		height: 500px;
		content: "";
		border: 1px solid ${({ theme: { accentColor } }) => accentColor};
		border-radius: 100% 70% 80% 60% / 100% 70% 80% 60%;
		animation-name: ${CircleAni};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-fill-mode: inherit;
		animation-timing-function: linear;
		animation-direction: reverse;
		transition: opacity 1s, border-color 0.5s;
		@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
			${({ scrl }) =>
				scrl > 100
					? css`
							opacity: 0.8;
					  `
					: css`
							opacity: 0.2;
					  `}
		}
	}

	// MOBILE
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		position: relative;
		left: 0;
		transform: none;
		width: 300px;
		height: 300px;
		margin: 200px auto 250px;
		filter: none;
		&::after,
		&::before {
			width: 300px;
			height: 300px;
		}
	}

	// NOMAL PC
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
		${({ scrl }) =>
			scrl > 300
				? css`
						filter: blur(0.5px);
				  `
				: css`
						filter: blur(1.5px);
				  `}

		${({ scrl }) =>
			scrl > 800
				? css`
						position: relative;
						margin-top: 1300px;
				  `
				: css`
						position: fixed;
				  `}
	}

	// 4K WIDE PC
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
		width: 1200px;
		height: 1200px;
		&::after,
		&::before {
			width: 1200px;
			height: 1200px;
		}
	}
`;

export const FirstSection = styled.div<{ scrl: number }>`
	justify-content: center;
	align-items: center;
	width: 100%;
	height: ${({ theme: { fullHeight } }) => fullHeight};
	color: ${({ theme: { accentColor } }) => accentColor};
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 45px;
	text-align: center;
	transition: opacity 1s, transform 1s, filter 1s;
	animation: ${FadeIn} 1s;
	filter: blur(0.5px);

	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
		${({ scrl }) =>
			scrl > 600
				? css`
						display: none;
				  `
				: scrl > 200
				? css`
						display: flex;
						opacity: 0;
				  `
				: css`
						display: flex;
						opacity: 1;
						filter: blur(0.5px);
				  `}
	}

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		display: none;
	}
`;
export const IntroSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

export const IntroTop = styled.div<{ scrl: number }>`
	display: flex;
	flex-wrap: wrap;
	width: 650px;
	line-height: 1.2em;
	align-items: center;
	color: ${({ theme: { accentColor } }) => accentColor};
	font-size: 22px;
	transform: translateY(-80px);
	transition: opacity 1s, transform 1s, color 0.5s;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	overflow: hidden;

	span {
		display: block;
		flex: 1;
		text-align: center;
	}

	span:last-of-type {
		flex: 0.6;
	}

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 100%;
		transform: translateY(-50px);
		filter: none;
		animation: ${SlideUpMoTop} 2s;
		span:last-of-type {
			flex: 1.6;
		}
	}

	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
		${({ scrl }) =>
			scrl > 50
				? css`
						opacity: 1;
						filter: blur(0.5px);
						transform: translateY(-100px);
				  `
				: css`
						opacity: 0;
						filter: blur(1px);
						transform: translateY(100px);
				  `}
	}
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
		width: 1400px;
		font-size: 70px;
		transform: translateY(-200px);
	}
`;

export const Line = styled.i`
	flex: 1.4;
	display: block;
	height: 1px;
	background-color: ${({ theme: { accentColor } }) => accentColor};
	margin: 0 10px;
`;

export const IntroCenter = styled.p<{ scrl: number }>`
	overflow: hidden;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		opacity: 0;
		animation: ${SlideUpMo} 2s;
		animation-delay: 1s;
		animation-fill-mode: both;
	}

	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
		transform: translateY(-110px);
	}
`;

export const IntroCenterText = styled.span<{ scrl: number }>`
	display: block;
	font-size: 150px;
	line-height: 1em;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-style: italic;
	color: ${({ theme: { accentColor } }) => accentColor};
	transform: translateY(-30px);
	transition: opacity 1s, transform 1s, color 0.5s;
	text-shadow: ${({ theme: { textShadow } }) => textShadow};
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		font-size: 80px;
		vertical-align: top;
		filter: none;
	}

	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
		${({ scrl }) =>
			scrl > 300
				? css`
						opacity: 1;
						transform: translateY(-30px);
						filter: blur(1px);
				  `
				: css`
						opacity: 0;
						transform: translateY(100px);
						filter: blur(1.5px);
				  `};
	}
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
		font-size: 300px;
	}
`;
