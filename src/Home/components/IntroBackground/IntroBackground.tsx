import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import Tab from "../Tab/Tab";
import { TabArr } from "../Tab/tabdata";
import {
	CircleBox,
	IntroSection,
	IntroCenter,
	IntroTop,
	IntroCenterText,
	Line,
	FirstSection,
} from "./styles";

const IntroBackground: React.FC<{ scrollY: number }> = ({ scrollY }) => {
	const { tabState, changeCursorState } = useContext(CurrentContext);
	console.log(scrollY);

	return (
		<>
			<FirstSection scrl={scrollY}>
				Hello
				<br />
				This is Jake
				<br />
				if you wanna {window.innerWidth < 640 && <br />} keep seeing this page <br />
				scroll down plz
			</FirstSection>
			<CircleBox scrl={scrollY}>
				<h3 className="blind">intro</h3>
				<IntroSection>
					<IntroTop scrl={scrollY}>
						<span>Selected Art&amp;Works</span>
						<Line />
						<span>
							&#40; 0{tabState.id} - 0{TabArr.length} &#41;
						</span>
					</IntroTop>
					<IntroCenter
						scrl={scrollY}
						onMouseOver={() => changeCursorState("biggerLink")}
						onMouseOut={() => changeCursorState("")}
					>
						<IntroCenterText scrl={scrollY}>{tabState.text}</IntroCenterText>
					</IntroCenter>
				</IntroSection>
				{scrollY < 1300 && <Tab />}
			</CircleBox>
			{scrollY > 1300 && <Tab />}
		</>
	);
};

export default IntroBackground;
