import { useScroll } from "../../../Hooks/Scroll";
import { Image, ImageWrap, ImgSection, TextWrap } from "./styles";
import Portrait from "../../../Assets/portrait-2.jpg";
import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";

const Profile: React.FC<{ loading: boolean }> = ({ loading }) => {
	const { changeCursorState } = useContext(CurrentContext);

	const { scrollY } = useScroll();

	return (
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
				{/* <a href="naver.com" rel="noopener noreferrer">
      aa
    </a> */}
			</TextWrap>
		</ImgSection>
	);
};

export default Profile;
