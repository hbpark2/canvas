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
	font-family: "Cormorant Garamond", serif;
	letter-spacing: 1.2em;
	transform-origin: 50% 50%;
	animation-name: ${RadiusAni};
	animation-duration: 10s;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

const Scroll = () => {
	return (
		<Container>
			<svg height="300px" width="300px">
				<path
					id="myTextPath"
					d="M 84,0 A 84,84 0 0 1 -84,0 A 84,84 0 0 1 84,0"
					transform="translate(150, 150)"
					fill="none"
					stroke="transparent"
					strokeWidth="25"
				/>

				<text fill="#fff" strokeWidth="0">
					<textPath xlinkHref="#myTextPath">
						<tspan dy="5" fontSize={24}>
							Scroll Scroll Scroll
						</tspan>
					</textPath>
				</text>
			</svg>
		</Container>
	);
};

export default Scroll;
