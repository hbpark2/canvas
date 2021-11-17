import { useState, useEffect } from "react";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import Background from "./components/Background/Background";
import ScrollCircle from "./components/ScrollCircle";
import Bubble2 from "../Assets/bubble1.jpg";
import {
	CircleBox,
	Container,
	Image,
	ImageWrap,
	ImgSection,
	IntroSection,
	IntroCenter,
	IntroTop,
	IntroCenterText,
	Line,
	TextWrap,
} from "./styles";

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
	console.log(scrollY);

	return (
		<>
			<ScrollCircle />
			<Cursor currentPosition={currentPosition} />
			<Container id="content">
				<CircleBox scrl={scrollY} />
				<IntroSection scrl={scrollY}>
					<IntroTop scrl={scrollY}>
						<span>Selected Art&amp;Works</span>
						<Line />
						<span>(01-04)</span>
					</IntroTop>
					<IntroCenter scrl={scrollY}>
						<IntroCenterText scrl={scrollY}>7ransis7or</IntroCenterText>
					</IntroCenter>
				</IntroSection>
				{scrollY > 1000 && (
					<ImgSection>
						<ImageWrap>
							<Image
								src={Bubble2}
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
