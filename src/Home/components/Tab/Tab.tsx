import { useContext, useState } from "react";
import { TabArr } from "./tabdata";
import { CurrentContext } from "../../../Context/ContextStore";
import { useScroll } from "../../../Hooks/Scroll";
import { TabButton, TabContainer, TabList, TabSpan } from "./styles";

const Tab = () => {
	const { changeCursorState, onTabClick, tabState } = useContext(CurrentContext);

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
						<TabButton
							onClick={() => tabState.id !== index + 1 && onTabClick(item)}
							current={tabState.id === index + 1}
						>
							0{index + 1}
						</TabButton>
						<TabSpan>{item.text}</TabSpan>
					</TabList>
				);
			})}
		</TabContainer>
	);
};

export default Tab;
