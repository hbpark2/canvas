import {
	Container,
	Inner,
	NameWrap,
	Skill,
	Intro,
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
						저는 믿음이 없는 사람입니다.
						<br />
						"사람의 의지, 능력"에 관하여 믿음이 없죠. <br />
						그렇기 때문에 목적이 있으면 <br />
						그를 이루기 위한 "환경"을 만들어
						<br />
						그 속에 자신을 던집니다.
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
					{/* <IntroParagraph>
						프로덕트의 발전을 즐깁니다.
						<br />
						어떻게 접근성을 향상시킬지, 무엇이 표준에 더 근접한지,
						<br />
						어떻게 더 아름다운 UI를 구현할지, 어떻게 더 효율적인 UX를 구현할지,
						<br />
						어떻게 더 합리적인 코드를 짤 수 있을지 고민하는 것이
						<br />
						저의 일이자 취미입니다.
					</IntroParagraph> */}
					{/* <IntroParagraph>
						저는 1년차 프론트엔드 개발자 박형빈입니다. <br />
						내부적으로, 외부적으로 보기 좋은 프로덕트를 <br />
						만드는 것을 좋아합니다.
						<br />
					</IntroParagraph> */}

					<IntroParagraph>
						견고하고 근거있는 HTML 구조위에서 <br />
						CSS, react의 styled-component, JS 등을 이용해 <br />
						감각적이고 동적인 UI를 구현 하는 것을 즐긴다.
						<br />
					</IntroParagraph>
				</Intro>

				{/* <IntroText>
						구조화와 정보전달에 목적을 둔 HTML 마크업
						<blockquote>What is HTML - W3C standards HTML & CSS</blockquote>
					</IntroText> */}

				<Skill>
					<h3 className="blind">Skills</h3>

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
