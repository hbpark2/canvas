import { useContext, useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { Container, ImageBox, ImageWrap, Inner, LoopContainer, LoopWrap } from "./styles";
import Noise from "../../../Components/Common/Noise";
import { CurrentContext } from "../../../Context/ContextStore";
import { useScroll } from "../../../Hooks/Scroll";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Background: React.FC = () => {
	const { invert, tabState } = useContext(CurrentContext);
	const [blur, setBlur] = useState(false);
	const [loading, setLoading] = useState(true);
	const { scrollY } = useScroll();
	const imgArr = [
		{ src: "", alt: "" },
		{ src: "", alt: "" },
		{ src: "", alt: "" },
		{ src: "", alt: "" },
	];

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 50);
		setLoading(true);
	}, [tabState]);

	useEffect(() => {
		if (window.innerWidth > 639) {
			if (scrollY > 800) {
				setBlur(true);
			} else {
				setBlur(false);
			}
		} else {
			if (scrollY > 400) {
				setBlur(true);
			} else {
				setBlur(false);
			}
		}
	}, [scrollY]);

	return (
		<>
			<Container blur={blur}>
				{!loading && (
					<Inner>
						<LoopContainer>
							<LoopWrap>
								<ImageWrap>
									{imgArr.map((item, index) => {
										if (window.innerWidth < 640) {
											return (
												index < 2 && (
													<ImageBox
														key={`img${index}`}
														invert={invert}
														bgImage={tabState.bgImage}
													/>
												)
											);
										} else {
											return (
												<ImageBox key={`img${index}`} invert={invert} bgImage={tabState.bgImage} />
											);
										}
									})}
								</ImageWrap>
								<ImageWrap>
									{imgArr.map((item, index) => {
										if (window.innerWidth < 640) {
											return (
												index < 2 && (
													<ImageBox
														key={`img${index}`}
														invert={invert}
														bgImage={tabState.bgImage}
													/>
												)
											);
										} else {
											return (
												<ImageBox key={`img${index}`} invert={invert} bgImage={tabState.bgImage} />
											);
										}
									})}
								</ImageWrap>
							</LoopWrap>
						</LoopContainer>
					</Inner>
				)}
			</Container>
		</>
	);
};

export default Background;
