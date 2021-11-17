import { CircleBox, IntroSection, IntroCenter, IntroTop, IntroCenterText, Line } from "./styles";

const IntroBackground: React.FC<{ scrollY: number }> = ({ scrollY }) => {
	return (
		<>
			<CircleBox scrl={scrollY} />
			<IntroSection scrl={scrollY}>
				<IntroTop scrl={scrollY}>
					<span>Selected Art&amp;Works</span>
					<Line />
					<span>(01-04)</span>
				</IntroTop>
				<IntroCenter scrl={scrollY}>
					<IntroCenterText scrl={scrollY}>7ransis7or</IntroCenterText>
				</IntroCenter>
			</IntroSection>
		</>
	);
};

export default IntroBackground;
