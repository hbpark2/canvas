import { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { Container, ImageBox, ImageWrap, Inner, LoopContainer, LoopWrap } from "./styles";
import Noise from "../../../Components/Common/Noise";

SwiperCore.use([Navigation, Pagination, EffectFade]);

interface BackgroundProps {
	invert: boolean;
	scrollY: number;
}

const Background: React.FC<BackgroundProps> = ({ scrollY, invert }) => {
	const imgArr = [
		{ src: "", alt: "" },
		{ src: "", alt: "" },
	];

	return (
		<Container>
			<Inner>
				<LoopContainer>
					<LoopWrap>
						<ImageWrap>
							{imgArr.map((item, index) => {
								return <ImageBox key={`img${index}`} invert={invert} />;
							})}
						</ImageWrap>
						<ImageWrap>
							{imgArr.map((item, index) => {
								return <ImageBox key={`img${index}`} invert={invert} />;
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
