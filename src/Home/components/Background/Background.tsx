import { useContext, useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { Container, ImageBox, ImageWrap, Inner, LoopContainer, LoopWrap } from "./styles";
import Noise from "../../../Components/Common/Noise";
import { CurrentContext } from "../../../Context/ContextStore";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Background: React.FC = () => {
	const { invert, tabState } = useContext(CurrentContext);
	const [loading, setLoading] = useState(true);

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

	return (
		<>
			<Container>
				{!loading && (
					<Inner>
						<LoopContainer>
							<LoopWrap>
								<ImageWrap>
									{imgArr.map((item, index) => {
										return (
											<ImageBox key={`img${index}`} invert={invert} bgImage={tabState.bgImage} />
										);
									})}
								</ImageWrap>
								<ImageWrap>
									{imgArr.map((item, index) => {
										return (
											<ImageBox key={`img${index}`} invert={invert} bgImage={tabState.bgImage} />
										);
									})}
								</ImageWrap>
							</LoopWrap>
						</LoopContainer>
					</Inner>
				)}
			</Container>
			<Noise />
		</>
	);
};

export default Background;
