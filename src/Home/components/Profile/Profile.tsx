import { Container, Inner, NameWrap, DescriptionList, SkillWrap } from "./styles";

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
					<DescriptionList>
						<dt>이름</dt>
						<dd>박형빈 @Jake</dd>
					</DescriptionList>
				</NameWrap>
				<SkillWrap>
					<dl>
						<dt>다루는 언어, 기술</dt>
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
								<li>- AWS S3</li>
								<li>- Heroku</li>
								<li>- Netlifty</li>
								<li>- Azure</li>
							</ul>
						</dd>
					</dl>
					{/* <a href="naver.com" rel="noopener noreferrer">
      aa
    </a> */}
				</SkillWrap>
			</Inner>
		</Container>
	);
};

export default Profile;
