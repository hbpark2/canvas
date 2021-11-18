import styled, { css } from "styled-components";
import { CircleAni, FadeIn } from "../../../Styles/animation";

export const CircleBox = styled.article<{ scrl: number }>`
	display: flex;
	justify-content: center;
	align-items: center;
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
						margin-top: 1100px;
				  `
				: css`
						position: fixed;
				  `}
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
	color: #e4cbac;
	font-size: 22px;
	transform: translateY(-80px);
	transition: opacity 1s, transform 1s;
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

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		width: 90%;
		transform: translateY(-50px);

		${({ scrl }) =>
			scrl > 50
				? css`
						opacity: 1;
						transform: translateY(-50px);
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

	@media ${({ theme: { deviceScreen } }) => deviceScreen.mobile} {
		font-size: 80px;
		vertical-align: top;
	}
`;
