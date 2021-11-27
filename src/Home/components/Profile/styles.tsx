import styled, { css } from "styled-components";
import { FadeIn } from "../../../Styles/animation";

export const Container = styled.article<{ scrl: number }>`
	position: relative;
	display: flex;
	margin: 0 auto;
	padding-bottom: 50px;
	z-index: 1;
	animation-name: ${FadeIn};
	animation-duration: 1s;

	background-color: ${({ theme: { bgColor1 } }) => bgColor1};
	padding: 50px 20px;

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

export const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	font-size: 42px;
`;

export const DescriptionList = styled.dl`
	display: flex;
	margin-bottom: 40px;

	dt {
		margin-right: 15px;
		width: 100px;
	}
`;

export const NameWrap = styled.div`
	line-height: 1.4em;
	dd {
		font-size: 62px;
	}
`;

export const SkillWrap = styled.div`
	line-height: 1.2em;

	dt {
		margin-bottom: 10px;
	}
	dd {
		font-size: 32px;
	}
`;
