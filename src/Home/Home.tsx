import { useState, useEffect, useContext } from "react";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import Background from "./components/Background/Background";
import ScrollCircle from "./components/ScrollCircle";
import { Container } from "./styles";
import IntroBackground from "./components/IntroBackground/IntroBackground";
import { CurrentContext } from "../Context/ContextStore";
import Portrait from "../Assets/portrait-2.jpg";

import Profile from "./components/Profile/Profile";
import { Image, ImageWrap, ImgSection, TextWrap } from "./components/Profile/styles";

const Home = () => {
	const { currentPosition, changeCursorState, menuOpen, tabState } = useContext(CurrentContext);
	const [loading, setLoading] = useState<boolean>(true);
	const { scrollY } = useScroll();

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	useEffect(() => {
		if (loading || menuOpen) {
			document.body?.classList.remove("overflow-unset");
			document.body?.classList.add("overflow-hidden");
		} else {
			document.body?.classList.remove("overflow-hidden");
			document.body?.classList.add("overflow-unset");
		}
	}, [loading, menuOpen]);

	return (
		<>
			<ScrollCircle />
			<Cursor currentPosition={currentPosition} />
			<Background />
			<Container aria-hidden={!menuOpen}>
				<h2 className="blind">contents</h2>
				{!loading && (
					<>
						<IntroBackground scrollY={scrollY} />
						{tabState.text === "Profile" && (
							<Profile loading={loading} scrollY={scrollY} changeCursorState={changeCursorState} />
						)}

						{tabState.text === "TH-ROAD" && (
							<Profile loading={loading} scrollY={scrollY} changeCursorState={changeCursorState} />
						)}
					</>
				)}
			</Container>
		</>
	);
};

export default Home;
