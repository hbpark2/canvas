import styled, { css } from "styled-components";

export const TabContainer = styled.ul<{ scrl: number }>`
	position: absolute;
	top: 50%;
	left: calc(50% + 400px);
	transform: translate(-50%, -50%);
	transition: filter 0.5s;
	z-index: 1;

	${({ scrl }) =>
		scrl > 150
			? css`
					filter: blur(0px);
			  `
			: css`
					filter: blur(1.5px);
			  `};

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		display: none;
	}
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
		left: calc(50% + 900px);
	}
`;

export const TabList = styled.li`
	display: flex;
	align-items: center;
	margin: 15px 0;
	word-break: keep-all;
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
		margin: 40px 0;
		font-size: 36px;
	}
`;

export const TabSpan = styled.span`
	display: block;
	margin-left: 10px;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	color: ${({ theme: { accentColor } }) => accentColor};
	font-weight: 700;
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
		margin-left: 30px;
	}
`;

export const TabButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 46px;
	height: 46px;
	padding: 10px;
	padding-bottom: 17px;
	border: 1px solid ${({ theme: { accentColor } }) => accentColor};
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 28px;
	color: ${({ theme: { accentColor } }) => accentColor};
	cursor: none;
	transition: background-color 0.5s;
	border-radius: 50%;
	&:hover {
		background-color: ${({ theme: { accentColor } }) => accentColor};
		color: inherit;
	}
	@media ${({ theme: { deviceScreenMin } }) => deviceScreenMin.wide} {
		width: 120px;
		height: 120px;
		font-size: 52px;
	}
`;
