import { useContext } from "react";
import { CurrentContext, TabStateType } from "../../../Context/ContextStore";
import { useScroll } from "../../../Hooks/Scroll";
import { TabButton, TabContainer, TabList, TabSpan } from "./styles";
import Bubble1 from "../../../Assets/bubble1.jpg";
import Bubble2 from "../../../Assets/bubble2.jpg";
import Bubble3 from "../../../Assets/bubble3.jpg";
const Tab = () => {
	const { changeCursorState, setTabState } = useContext(CurrentContext);
	const { scrollY } = useScroll();

	const onTabClick = (theme: TabStateType) => {
		setTabState({ theme: theme.theme, bgImage: theme.bgImage });
	};

	const TabArr: TabStateType[] = [
		{ bgImage: Bubble1, theme: "01", text: "가나다라마바사" },
		{ bgImage: Bubble2, theme: "02", text: "가나다라마바사" },
		{ bgImage: Bubble3, theme: "01", text: "가나다라마바사" },
		{ bgImage: Bubble1, theme: "02", text: "가나다라마바사" },
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
						<TabButton onClick={() => onTabClick(item)}>0{index + 1}</TabButton>
						{/* <TabSpan>{item.text}</TabSpan> */}
					</TabList>
				);
			})}
		</TabContainer>
	);
};

export default Tab;
