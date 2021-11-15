import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import { CircleAni, SlideUp } from "../Styles/animation";
import Background from "./components/Background";

const Container = styled.main`
	position: relative;
	width: 100%;
	min-height: 2000px;
	z-index: 100;
`;
const IntroSection = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const IntroText = styled.p`
	overflow: hidden;
`;

const CircleBox = styled.i`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid #e4cbac;
	z-index: 5;
	width: 500px;
	height: 500px;
	transition: all 0.5s;
	border-radius: 50%;
	filter: blur(1.5px);
	&::after {
		position: absolute;
		top: -2px;
		left: -2px;
		display: block;
		width: 500px;
		height: 500px;
		content: "";
		border: 1px solid #e4cbac;
		border-radius: 100% 70% 80% 60% / 100% 70% 80% 60%;
		animation-name: ${CircleAni};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-fill-mode: inherit;
		animation-timing-function: linear;
		opacity: 0.5;
	}
	&::before {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 500px;
		height: 500px;
		content: "";
		border: 1px solid #e4cbac;
		border-radius: 100% 70% 80% 60% / 100% 70% 80% 60%;
		animation-name: ${CircleAni};
		animation-duration: 3s;
		animation-iteration-count: infinite;
		animation-fill-mode: inherit;
		animation-timing-function: linear;
		animation-direction: reverse;
		opacity: 0.3;
	}
`;

const IntroWord = styled.span<{ scrl: number }>`
	display: block;
	font-size: 150px;
	line-height: 1em;
	font-family: "Cormorant Garamond", serif;
	font-style: italic;
	color: #e4cbac;
	transform: translateY(-15px);
	transition: opacity 1s;
	filter: blur(1px);

	${({ scrl }) =>
		scrl > 950
			? css`
					opacity: 1;
					/* animation: ${SlideUp} 1s 0s 1 normal;
					animation-fill-mode: both; */
			  `
			: css`
					opacity: 0;
			  `}
`;

const Home = () => {
	const [currentPosition, setCurrentPosition] = useState("");
	const { scrollY } = useScroll();
	return (
		<>
			<Cursor currentPosition={currentPosition} />
			<Container id="content">
				<CircleBox />
				<IntroSection>
					<IntroText>
						<IntroWord scrl={scrollY}>7ransis7or</IntroWord>
					</IntroText>
				</IntroSection>
			</Container>
			<Background scrollY={scrollY} />
		</>
	);
};

export default Home;
