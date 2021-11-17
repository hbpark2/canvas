import styled, { css } from "styled-components";

export const TabContainer = styled.ul<{ scrl: number }>`
	position: fixed;
	top: 50%;
	left: calc(50% + 400px);
	transform: translate(-50%, -50%);
	transition: filter 0.5s;
	z-index: 5;
	filter: blur(0.1px);
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
	width: 45px;
	height: 45px;
	padding: 10px;
	padding-bottom: 17px;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	font-size: 28px;
	color: ${({ theme: { accentColor } }) => accentColor};
	cursor: none;
`;
