import styled, { css } from "styled-components";

export const Container = styled.main`
	position: relative;
	width: 100%;
	min-height: 250vh;
	z-index: 100;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		min-height: 100vh;
	}
`;
