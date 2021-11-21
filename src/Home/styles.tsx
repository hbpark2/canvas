import styled, { css } from "styled-components";
import { FadeIn } from "../Styles/animation";

export const Container = styled.main`
	position: relative;
	width: 100%;
	min-height: 250vh;
	z-index: 100;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		min-height: 100vh;
	}
`;

export const ImgSection = styled.article<{ scrl: number }>`
	position: relative;
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	padding-bottom: 50px;
	z-index: 1;
	animation-name: ${FadeIn};
	animation-duration: 1s;

	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
		${({ scrl }) =>
			scrl > 800
				? css`
						opacity: 1;
				  `
				: css`
						opacity: 0;
						top: 1300px;
				  `}
	}

	// 4K WIDEPC
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.mobile} {
		${({ scrl }) =>
			scrl > 800
				? css`
						opacity: 1;
				  `
				: css`
						opacity: 0;
						top: 2600px;
				  `}
	}
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

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 45%;
		opacity: 1;
		filter: blur(0px);
	}
`;
