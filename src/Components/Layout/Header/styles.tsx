import styled, { css } from "styled-components";

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - 80px);
	padding: 50px;
	z-index: 200;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		padding: 30px;
	} ;
`;

export const Logo = styled.h1`
	position: relative;
	z-index: 205;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	color: ${({ theme: { accentColor } }) => accentColor};
	font-size: 54px;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		font-size: 32px;
	} ;
`;

export const MenuBtn = styled.button`
	position: relative;
	z-index: 205;
	color: ${({ theme: { accentColor } }) => accentColor};
`;

export const Nav = styled.nav<{ menuOpen: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.bgColor2};
	transition: opacity 0.5s, visibility 0.5s, transform 0.5s;

	${({ menuOpen }) =>
		menuOpen
			? css`
					visibility: visible;
					opacity: 1;
					transform: translateX(0) skew(0deg);
			  `
			: css`
					visibility: hidden;
					opacity: 0;
					transform: translateX(-100%) skew(50deg);
			  `}
`;

export const NavList = styled.li``;
