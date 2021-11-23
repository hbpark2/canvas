import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import NoiseImg from "../../Assets/noise.png";
export const NoiseAni = keyframes`
	from {
		background-position: 0 0;
	}
	to {
		background-position: 180px 456px;
	}
`;

const Container = styled.div`
	/*noise*/

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	background: url(${NoiseImg});
	-webkit-animation: ${NoiseAni} 0.8s steps(10) infinite;
	animation: ${NoiseAni} 0.8s steps(10) infinite;
	pointer-events: none;
	z-index: 105;

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		/* display: none; */
	} ;
`;

const Noise = () => {
	return <Container></Container>;
};

export default Noise;
