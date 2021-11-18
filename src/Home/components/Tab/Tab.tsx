import { useContext } from "react";
import { TabArr } from "./tabdata";
import { CurrentContext, TabStateType } from "../../../Context/ContextStore";
import { useScroll } from "../../../Hooks/Scroll";
import { TabButton, TabContainer, TabList, TabSpan } from "./styles";

const Tab = () => {
	const { changeCursorState, onTabClick } = useContext(CurrentContext);
	const { scrollY } = useScroll();

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
						<TabSpan>{item.text}</TabSpan>
					</TabList>
				);
			})}
		</TabContainer>
	);
};

export default Tab;
