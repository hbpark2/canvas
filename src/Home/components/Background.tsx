import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import MainImg from "../../Assets/mvp.jpg";
import Drawing1 from "../../Assets/drawing-1.jpg";
import Drawing2 from "../../Assets/drawing-2.jpg";
import Drawing3 from "../../Assets/drawing-3.jpg";
import Drawing4 from "../../Assets/drawing-4.jpg";
import Drawing5 from "../../Assets/drawing-5.jpg";
import Drawing6 from "../../Assets/drawing-6.jpg";
import Drawing7 from "../../Assets/drawing-7.jpg";
import Drawing8 from "../../Assets/drawing-8.jpg";
import Drawing9 from "../../Assets/drawing-9.jpg";
import Drawing10 from "../../Assets/drawing-10.jpg";
import Drawing11 from "../../Assets/drawing-11.jpg";
import Drawing12 from "../../Assets/drawing-12.jpg";
import Drawing13 from "../../Assets/drawing-13.jpg";
import Drawing14 from "../../Assets/drawing-14.jpg";
import Drawing15 from "../../Assets/drawing-15.jpg";
import Drawing16 from "../../Assets/drawing-16.jpg";
import Drawing17 from "../../Assets/drawing-17.jpg";
import Bubble1 from "../../Assets/bubble1.jpg";
import Bubble2 from "../../Assets/bubble2.jpg";
import Bubble3 from "../../Assets/bubble3.jpg";
import Moon1 from "../../Assets/moon.jpg";

import { CircleAni, Loop, Loop2, RightToLeft } from "../../Styles/animation";
import Noise from "../../Components/Common/Noise";
import { useScroll } from "../../Hooks/Scroll";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Container = styled.div`
	position: fixed;
	top: 0;
	height: 100vh;
	background-color: #706260;
	/* background-color: #4d5e65; */
	/* background-color: #9a7951; */
	/* background-color: #cf8c5f; */
`;

const Inner = styled.div`
	overflow: hidden;
	animation-name: ${RightToLeft};
	animation-duration: 2s;
`;
const LoopContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: #4d5e65;
	background-color: #706260;
`;

const LoopWrap = styled.div`
	position: relative;
	display: flex;
	transform: rotate(15deg);
	flex-flow: row nowrap;
	width: 150vw;
	height: 100vh;
	left: 50%;
	margin-left: -50vw;
	margin-top: 20%;
	ul:first-child {
		-webkit-animation: ${Loop} 50s -25s linear infinite;
		animation: ${Loop} 50s -25s linear infinite;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		will-change: transform;
	}
	ul + ul {
		-webkit-animation: ${Loop2} 50s linear infinite;
		animation: ${Loop2} 50s linear infinite;
	}
`;

const FrontBox = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100px;
	height: 600px;
	border: 1px solid #e4cbac;
	z-index: 5;
`;

const BackBox = styled(FrontBox)<{ scrl: number }>`
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
	filter: blur(2px);
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

	${(props) =>
		props.scrl / 1000 < 1 &&
		css`
			opacity: ${props.scrl / 1000 < 1 && props.scrl / 2000};
			transform: translate(-50%, -50%) rotateY(${props.scrl + 200}deg)
				scale(${props.scrl / 1000});
		`};
`;

const ImageWrap = styled.ul`
	display: flex;
	flex-flow: row nowrap;
	width: 100%;
	margin: 0;
	padding: 0;
`;

const ImageBox = styled.li`
	display: inline-block;
	width: calc(100vw / 2);
	height: 80vh;
	margin: 0 5% 0 0;
	list-style: none;
	text-align: center;
	/* background: url(${Bubble1}) center center; */
	background: url(${Moon1}) center center;
	background-size: cover;
	filter: blur(2px);
	transition: all 0.5s;
`;
const Background: React.FC<{ scrollY: number }> = ({ scrollY }) => {
	const imgArr = [
		{ src: "", alt: "" },
		{ src: "", alt: "" },
		{ src: "", alt: "" },
		{ src: "", alt: "" },
	];
	return (
		<Container>
			<Inner>
				{/* <FrontBox /> */}
				{/* <BackBox scrl={scrollY} /> */}
				<LoopContainer>
					<LoopWrap>
						<ImageWrap>
							{imgArr.map((item, index) => {
								return <ImageBox key={`img${index}`} />;
							})}
						</ImageWrap>
						<ImageWrap>
							{imgArr.map((item, index) => {
								return <ImageBox key={`img${index}`} />;
							})}
						</ImageWrap>
					</LoopWrap>
				</LoopContainer>
			</Inner>
			<Noise />
		</Container>
	);
};

export default Background;
