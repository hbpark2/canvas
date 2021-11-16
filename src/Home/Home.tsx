import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import { CircleAni, FadeIn, SlideUp } from "../Styles/animation";
import Background from "./components/Background";
import Drawing1 from "../Assets/drawing-19.jpg";
import Bubble2 from "../Assets/bubble1.jpg";
import Scroll from "./components/Scroll";

const Container = styled.main`
	position: relative;
	width: 100%;
	min-height: 2000px;
	z-index: 100;
`;
const IntroSection = styled.article<{ scrl: number }>`
	/* position: fixed; */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	z-index: 1;
	${({ scrl }) =>
		scrl > 800
			? css`
					position: relative;
					top: 800px;
			  `
			: css`
					position: fixed;
			  `}
`;

const IntroTop = styled.div<{ scrl: number }>`
	display: flex;
	flex-wrap: wrap;
	width: 650px;
	line-height: 1.2em;
	align-items: center;
	color: #e4cbac;
	font-size: 22px;
	transform: translateY(-80px);
	transition: opacity 1s, transform 1s;
	font-family: "Cormorant Garamond", serif;

	/* filter: blur(1px); */
	filter: ${({ scrl }) => `blur(${1 - scrl / 1000}px)`};
	overflow: hidden;

	span:last-of-type {
		flex: 0.6;
	}

	${({ scrl }) =>
		scrl > 50
			? css`
					opacity: 1;
					transform: translateY(-100px);
			  `
			: css`
					opacity: 0;
					transform: translateY(100px);
			  `}
`;

const IntroSpan = styled.span`
	display: block;
	flex: 1;
	text-align: center;
`;
const Line = styled.i`
	flex: 1.4;
	display: block;
	height: 1px;
	background-color: #e4cbac;
	margin: 0 10px;
`;
const IntroText = styled.p`
	overflow: hidden;
`;

const CircleBox = styled.i<{ scrl: number }>`
	/* position: fixed; */
	display: block;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border: 1px solid #e4cbac;
	z-index: 5;
	width: 500px;
	height: 500px;
	/* transition: all 0.5s; */
	border-radius: 50%;
	filter: blur(1.5px);

	${({ scrl }) =>
		scrl > 300
			? css`
					filter: blur(1px);
			  `
			: css`
					filter: blur(1.5px);
			  `}

	${({ scrl }) =>
		scrl > 800
			? css`
					position: absolute;
					top: 1300px;
			  `
			: css`
					position: fixed;
			  `}

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
		transition: opacity 1s;
		${({ scrl }) =>
			scrl > 50
				? css`
						opacity: 0.8;
				  `
				: css`
						opacity: 0.1;
				  `}
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
		transition: opacity 1s;
		${({ scrl }) =>
			scrl > 100
				? css`
						opacity: 0.8;
				  `
				: css`
						opacity: 0.2;
				  `}
	}
`;

const IntroWord = styled.span<{ scrl: number }>`
	display: block;
	font-size: 150px;
	line-height: 1em;
	font-family: "Cormorant Garamond", serif;
	font-style: italic;
	color: #e4cbac;
	transform: translateY(-30px);
	transition: opacity 1s, transform 1s;

	${({ scrl }) => scrl < 1500 && `filter:blur(${1 - scrl / 1500}px);`}

	${({ scrl }) =>
		scrl > 300
			? css`
					opacity: 1;
					transform: translateY(-30px);
					/* animation: ${SlideUp} 1s 0s 1 normal;
					animation-fill-mode: both; */
			  `
			: css`
					opacity: 0;
					transform: translateY(100px);
			  `}
`;

const ImgSection = styled.article`
	position: relative;
	top: 800px;
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	padding-bottom: 50px;
	z-index: 1;
	animation-name: ${FadeIn};
	animation-duration: 1s;
`;

const ImageWrap = styled.div``;
const TextWrap = styled.div`
	font-family: "Cormorant Garamond", serif;
	color: #e4cbac;
`;
const Image = styled.img`
	width: 500px;
	opacity: 0.9;
	filter: blur(2px);
	transition: all 0.5s;

	&:hover {
		opacity: 1;
		filter: blur(0px);
	}
`;

const Home = () => {
	const [currentPosition, setCurrentPosition] = useState("");
	const [invert, setInvert] = useState(false);
	const { scrollY } = useScroll();
	const onImageMouseOn = () => {
		setCurrentPosition("imgHover");
		setInvert(true);
	};
	const onImageMouseOut = () => {
		setInvert(false);
		setCurrentPosition("");
	};
	// console.log(scrollY);

	return (
		<>
			<Scroll />
			<Cursor currentPosition={currentPosition} />
			<Container id="content">
				<CircleBox scrl={scrollY} />
				<IntroSection scrl={scrollY}>
					<IntroTop scrl={scrollY}>
						<IntroSpan>Selected Art&amp;Works</IntroSpan>
						<Line />
						<IntroSpan>(01-04)</IntroSpan>
					</IntroTop>
					<IntroText>
						<IntroWord scrl={scrollY}>7ransis7or</IntroWord>
					</IntroText>
				</IntroSection>
				{scrollY > 1000 && (
					<ImgSection>
						<ImageWrap>
							<Image
								src={Bubble2}
								// src={Drawing1}
								alt=""
								onMouseOver={onImageMouseOn}
								onMouseOut={onImageMouseOut}
							/>
						</ImageWrap>
						<TextWrap></TextWrap>
					</ImgSection>
				)}
				<Background scrollY={scrollY} invert={invert} />
			</Container>
		</>
	);
};

export default Home;
