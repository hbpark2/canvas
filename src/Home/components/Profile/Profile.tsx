import {
	Container,
	Inner,
	NameWrap,
	DescriptionList,
	Skill,
	Intro,
	IntroText,
	SkillWrap,
	IntroParagraph,
	Career,
} from "./styles";

const Profile: React.FC<{ loading: boolean; scrollY: number; changeCursorState: Function }> = ({
	loading,
	scrollY,
	changeCursorState,
}) => {
	return (
		<Container scrl={scrollY} aria-hidden={!loading}>
			<Inner>
				<NameWrap
					onMouseOver={() => changeCursorState("image")}
					onMouseOut={() => changeCursorState("")}
				>
					<h3 className="blind">name : 박형빈 @jake @7ransis7or</h3>
					<span>B. 1995</span>
					<br />
					<span>
						박형빈 <span className="small-span">@Jake</span>
					</span>
					<br />
					<span className="border-bottom">Front-end developer</span>
				</NameWrap>

				<Intro>
					<h3 className="blind">Intro</h3>
					{/* <IntroParagraph>
						믿음이 없는 사람입니다.
						<br />
						"사람의 의지, 능력"에 관하여 믿음이 없죠. <br />
						그렇기 때문에 목적이 있으면 <br />
						목적을 이루기 위한 "환경"을 만들어
						<br />
						그 속에 나를 던집니다.
						<br />
						<br />
						마찬가지로 <br />
						"나의 MARK UP" <br />
						"나의 CSS"
						<br />
						"나의 코드"
						<br />
						에 관하여 믿음이 없습니다.
						<br />
						그렇기 때문에 프로젝트에 임할 때<br />
						좋은 코드를 짜기 위한 "환경"을 만들어 <br />
						그 속에 코드를 던져
						<br />
						만족스런 결과를 얻습니다.
					</IntroParagraph> */}
					<IntroParagraph>
						프로덕트의 발전을 즐깁니다.
						<br />
						어떻게 접근성을 향상시킬지, 무엇이 표준에 더 근접한지,
						<br />
						어떻게 더 아름다운 UI를 구현할지, 어떻게 더 효율적인 UX를 구현할지,
						<br />
						어떻게 더 합리적인 코드를 짤 수 있을지 끊임없이 고민합니다.
					</IntroParagraph>
				</Intro>

				{/* <IntroText>
						구조화와 정보전달에 목적을 둔 HTML 마크업
						<blockquote>What is HTML - W3C standards HTML & CSS</blockquote>
					</IntroText> */}

				<Skill>
					<SkillWrap>
						<ul>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>Javascript</li>
							<li>Typescript</li>
							<li>React</li>
							<li>React Native</li>
							<li>Node</li>
							<li>Git & Github</li>
							<li>GraphQL</li>
							<li>Apollo</li>
							<li>Prisma</li>
							<li>AWS S3</li>
							<li>Heroku</li>
							<li>Azure</li>
							<li>Netlifty</li>
						</ul>
					</SkillWrap>
				</Skill>

				<Career></Career>
			</Inner>
		</Container>
	);
};

export default Profile;
