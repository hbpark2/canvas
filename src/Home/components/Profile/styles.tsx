import styled, { css } from "styled-components";
import { FadeIn } from "../../../Styles/animation";

export const ImgSection = styled.article<{ scrl: number }>`
	position: relative;
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	padding-bottom: 50px;
	z-index: 1;
	animation-name: ${FadeIn};
	animation-duration: 1s;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
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

export const ImageWrap = styled.div`
	width: 50%;
`;

export const TextWrap = styled.div`
	width: 50%;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-weight: 400;
	color: ${({ theme: { accentColor } }) => accentColor};
	font-size: 36px;
	line-height: 1.4em;

	dl {
		display: flex;
		margin-bottom: 10px;

		dt {
			margin-right: 15px;
			width: 100px;
		}
	}
`;

export const Image = styled.img`
	display: block;
	width: 500px;
	opacity: 0.9;
	transition: all 0.5s;
	margin: 0 auto;
	&:hover {
		opacity: 1;
		filter: blur(0px);
	}

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 45%;
		opacity: 1;
	}
`;
