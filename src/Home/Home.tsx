import { useState, useEffect, useContext } from "react";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import Background from "./components/Background/Background";
import ScrollCircle from "./components/ScrollCircle";
import { Container } from "./styles";
import IntroBackground from "./components/IntroBackground/IntroBackground";
import { CurrentContext } from "../Context/ContextStore";

import Profile from "./components/Profile/Profile";

const Home = () => {
	const { currentPosition, changeCursorState, menuOpen } = useContext(CurrentContext);
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
						<Profile loading={loading} />
					</>
				)}
			</Container>
		</>
	);
};

export default Home;
