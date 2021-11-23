import { useState, useEffect, useContext } from "react";
import Cursor from "../Components/Common/Cursor";
import { useScroll } from "../Hooks/Scroll";
import Background from "./components/Background/Background";
import ScrollCircle from "./components/ScrollCircle";
import Portrait from "../Assets/portrait-2.jpg";
import { Container, Image, ImageWrap, ImgSection, TextWrap } from "./styles";
import IntroBackground from "./components/IntroBackground/IntroBackground";
import { CurrentContext } from "../Context/ContextStore";

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
						<ImgSection scrl={scrollY} aria-hidden={!loading}>
							<ImageWrap>
								<Image
									src={Portrait}
									alt=""
									onMouseOver={() => changeCursorState("biggerInvert")}
									onMouseOut={() => changeCursorState("")}
								/>
							</ImageWrap>
							<TextWrap>
								<dl>
									<dt>Name</dt>
									<dd>-Jake</dd>
								</dl>
								<dl>
									<dt>Skill</dt>
									<dd>
										<ul>
											<li>- HTML5</li>
											<li>- CSS3</li>
											<li>- javascript</li>
											<li>- React</li>
											<li>- Prisma</li>
											<li>- typescript</li>
											<li>- React Native</li>
											<li>- Git & Github</li>
										</ul>
									</dd>
								</dl>
							</TextWrap>
						</ImgSection>
					</>
				)}
			</Container>
		</>
	);
};

export default Home;
