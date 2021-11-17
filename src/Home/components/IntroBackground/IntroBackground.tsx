import { IntroSection, IntroCenter, IntroTop, IntroCenterText, Line } from "./styles";

const IntroBackground: React.FC = () => {
	return (
		<>
			<IntroSection>
				<IntroTop>
					<span>Selected Art&amp;Works</span>
					<Line />
					<span>(01-04)</span>
				</IntroTop>
				<IntroCenter>
					<IntroCenterText>7ransis7or</IntroCenterText>
				</IntroCenter>
			</IntroSection>
		</>
	);
};

export default IntroBackground;
