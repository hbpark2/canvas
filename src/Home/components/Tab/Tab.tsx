import { useContext, useState } from "react";
import { TabArr } from "./tabdata";
import { CurrentContext } from "../../../Context/ContextStore";
import { useScroll } from "../../../Hooks/Scroll";
import { TabButton, TabContainer, TabLine, TabList, TabSpan } from "./styles";

const Tab = () => {
  const { changeCursorState, onTabClick, tabState } =
    useContext(CurrentContext);

  const { scrollY } = useScroll();
  // console.log(scrollY);
  return (
    <TabContainer scrl={scrollY}>
      {TabArr.map((item, index) => {
        return (
          <TabList
            key={`tab${index}`}
            onMouseOver={() => changeCursorState("bigger")}
            onMouseOut={() => changeCursorState("")}
            onClick={() => tabState.id !== index + 1 && onTabClick(item)}
          >
            <TabButton current={tabState.id === index + 1}>
              0{index + 1}
            </TabButton>
            <TabSpan>
              {item.text}
              <TabLine current={tabState.id === index + 1} />
            </TabSpan>
          </TabList>
        );
      })}
    </TabContainer>
  );
};

export default Tab;
