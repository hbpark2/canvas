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
`;

export const TabList = styled.li`
	margin: 15px 0;
	border: 1px solid ${({ theme: { accentColor } }) => accentColor};
	border-radius: 50%;
`;

export const TabButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 46px;
	height: 46px;
	padding: 10px;
	padding-bottom: 17px;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 28px;
	color: ${({ theme: { accentColor } }) => accentColor};
	cursor: none;
	transition: background 0.5s;
	border-radius: 50%;
	&:hover {
		background-color: ${({ theme: { accentColor } }) => accentColor};
		color: inherit;
	}
`;
