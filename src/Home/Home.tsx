import { useState, useEffect, useContext } from "react";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import Background from "./components/Background/Background";
import ScrollCircle from "./components/ScrollCircle";
import { Container } from "./styles";
import IntroBackground from "./components/IntroBackground/IntroBackground";
import Tab from "./components/Tab/Tab";
import { CurrentContext } from "../Context/ContextStore";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectFade, Mousewheel, Keyboard } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, EffectFade, Mousewheel, Keyboard]);

const Home = () => {
	const { currentPosition, invert, bgImage } = useContext(CurrentContext);
	const [loading, setLoading] = useState<boolean>(true);
	const { scrollY } = useScroll();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	useEffect(() => {
		if (loading) {
			document.body?.classList.add("overflow-hidden");
		} else {
			document.body?.classList.remove("overflow-hidden");
			document.body?.classList.add("overflow-unset");
		}
	}, [loading]);

	return (
		<>
			<ScrollCircle />
			<Cursor currentPosition={currentPosition} />
			<Tab />
			<Swiper
				pagination={{ clickable: true }}
				// loop
				direction="vertical"
				mousewheel={true}
				keyboard={true}
				speed={1000}
				a11y={{
					prevSlideMessage: "previousSlide",
					nextSlideMessage: "nextSlide",
				}}
				style={{
					width: "100vw",
					height: "100vh",
				}}
				effect="fade"
				fadeEffect={{ crossFade: true }}
				onSlideChange={(e) => console.log(e.activeIndex)}
			>
				<SwiperSlide>
					{({ isActive }) => <Container>{isActive && <IntroBackground />}</Container>}
				</SwiperSlide>
				<SwiperSlide>
					{({ isActive }) => <Container>{isActive && <IntroBackground />}</Container>}
				</SwiperSlide>
			</Swiper>
			<Background scrollY={scrollY} invert={invert} bgImage={bgImage} />
		</>
	);
};

export default Home;
