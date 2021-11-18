import { useContext } from "react";
import { CurrentContext, ThemeStateType } from "../../../Context/ContextStore";
import { useScroll } from "../../../Hooks/Scroll";
import { TabButton, TabContainer, TabList } from "./styles";
import Bubble1 from "../../../Assets/bubble1.jpg";
import Bubble2 from "../../../Assets/bubble2.jpg";
import Bubble3 from "../../../Assets/bubble3.jpg";
const Tab = () => {
	const { changeCursorState, setThemeState } = useContext(CurrentContext);
	const { scrollY } = useScroll();

	const onTabClick = (theme: ThemeStateType) => {
		setThemeState({ theme: theme.theme, bgImage: theme.bgImage });
	};

	const TabArr: { number: string; text: string; themeState: ThemeStateType }[] = [
		{ number: "01", text: "", themeState: { bgImage: Bubble1, theme: "common" } },
		{ number: "02", text: "", themeState: { bgImage: Bubble2, theme: "brown" } },
		{ number: "03", text: "", themeState: { bgImage: Bubble3, theme: "common" } },
		{ number: "04", text: "", themeState: { bgImage: Bubble1, theme: "brown" } },
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
						<TabButton onClick={() => onTabClick(item.themeState)}>{item.number}</TabButton>
					</TabList>
				);
			})}
		</TabContainer>
	);
};

export default Tab;
