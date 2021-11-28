import React from "react";
import styled, { keyframes } from "styled-components";

const RadiusAni = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

const Container = styled.i`
	display: block;
	position: fixed;
	left: 30px;
	bottom: 30px;
	z-index: 101;
	font-style: normal;
	font-family: ${({ theme: { accentFont } }) => accentFont};
	letter-spacing: 1em;
	transform-origin: 50% 50%;
	animation: ${RadiusAni} 10s infinite linear;
	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		letter-spacing: 0.8em;
		left: 10px;
		bottom: 10px;
	} ;
`;

const SvgContainer = styled.svg`
	width: 300px;
	height: 300px;
	path {
		transform: translate(150px, 150px);
	}
	tspan {
		font-size: 24px;
	}

	@media ${({ theme: { deviceScreenMax } }) => deviceScreenMax.mobile} {
		width: 150px;
		height: 150px;
		path {
			transform: translate(75px, 75px);
		}
		tspan {
			font-size: 16px;
		}
	}
`;

const ScrollCircle = () => {
	return (
		<Container>
			<SvgContainer>
				<path
					id="myTextPath"
					d={
						window.innerWidth > 640
							? "M 84,0 A 84,84 0 0 1 -84,0 A 84,84 0 0 1 84,0"
							: "M 64,0 A 64,64 0 0 1 -64,0 A 64,64 0 0 1 64,0"
					}
					fill="none"
					stroke="transparent"
					strokeWidth="25"
				/>

				<text fill="#fff" strokeWidth="0">
					<textPath xlinkHref="#myTextPath">
						<tspan dy="5">Scroll Scroll Scroll</tspan>
					</textPath>
				</text>
			</SvgContainer>
		</Container>
	);
};

export default ScrollCircle;
