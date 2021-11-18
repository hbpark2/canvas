import styled, { css } from "styled-components";

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	padding: 50px;
	/* background-color: rgba(0, 0, 0, 0.5); */
	z-index: 200;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		padding: 30px;
	} ;
`;
export const Logo = styled.h1`
	font-family: ${({ theme: { accentFont } }) => accentFont};
	color: ${({ theme: { accentColor } }) => accentColor};
	font-size: 54px;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		font-size: 32px;
	} ;
`;
