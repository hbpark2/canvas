import { useContext } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import { useScroll } from "../../../Hooks/Scroll";
import { TabButton, TabContainer, TabList } from "./styles";
import Bubble1 from "../../../Assets/bubble1.jpg";
import Bubble2 from "../../../Assets/bubble2.jpg";
import Bubble3 from "../../../Assets/bubble3.jpg";
const Tab = () => {
	const { changeCursorState, setBgImage, setThemeState } = useContext(CurrentContext);
	const { scrollY } = useScroll();

	const onTabClick = (img: string) => {
		setBgImage(img);
		// setThemeState("brown");
	};

	const TabArr = [
		{ number: "01", img: Bubble1, text: "" },
		{ number: "02", img: Bubble2, text: "" },
		{ number: "03", img: Bubble3, text: "" },
		{ number: "04", img: Bubble1, text: "" },
	];

	return (
		<TabContainer scrl={scrollY}>
			{TabArr.map((item, index) => {
				return (
					<TabList
						key={`tab${index}`}
						onMouseOver={() => changeCursorState("bigger")}
						onMouseOut={() => changeCursorState("")}
					>
						<TabButton onClick={() => onTabClick(item.img)}>{item.number}</TabButton>
					</TabList>
				);
			})}
		</TabContainer>
	);
};

export default Tab;
