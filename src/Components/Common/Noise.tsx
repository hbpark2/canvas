import styled from "styled-components";

import NoiseImg from "../../Assets/noise.png";
import { NoiseAni } from "../../Styles/animation";

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
	return <Container />;
};

export default Noise;
