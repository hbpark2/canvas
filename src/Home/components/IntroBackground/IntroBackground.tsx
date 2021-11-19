import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import Tab from "../Tab/Tab";
import { CircleBox, IntroSection, IntroCenter, IntroTop, IntroCenterText, Line } from "./styles";

const IntroBackground: React.FC<{ scrollY: number }> = ({ scrollY }) => {
	const { tabState } = useContext(CurrentContext);

	return (
		<>
			<CircleBox scrl={scrollY}>
				<h3 className="blind">intro</h3>
				<IntroSection>
					<IntroTop scrl={scrollY}>
						<span>Selected Art&amp;Works</span>
						<Line />
						<span>&#40; {tabState.theme} - 04 &#41;</span>
					</IntroTop>
					<IntroCenter scrl={scrollY}>
						<IntroCenterText scrl={scrollY}>7ransis7or</IntroCenterText>
					</IntroCenter>
				</IntroSection>
				{scrollY < 1100 && <Tab />}
			</CircleBox>
			{scrollY > 1100 && <Tab />}
		</>
	);
};

export default IntroBackground;
