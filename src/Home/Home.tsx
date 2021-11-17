import { useState, useEffect, useContext } from "react";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import Background from "./components/Background/Background";
import ScrollCircle from "./components/ScrollCircle";

import { Container } from "./styles";
import IntroBackground from "./components/IntroBackground/IntroBackground";
import Tab from "./components/Tab/Tab";
import { CurrentContext } from "../Context/ContextStore";

const Home = () => {
	const { currentPosition, invert, changeCursorState, bgImage } = useContext(CurrentContext);
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
			<Container id="content">
				{!loading && (
					<>
						<IntroBackground />
						<Tab />
					</>
				)}
				<Background scrollY={scrollY} invert={invert} bgImage={bgImage} />
			</Container>
		</>
	);
};

export default Home;
