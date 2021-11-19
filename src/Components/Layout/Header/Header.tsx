import { useContext, useEffect } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import { TabArr } from "../../../Home/components/Tab/tabdata";
import Noise from "../../Common/Noise";
import { Container, Logo, MenuBtn, Nav, LinkButton, NavList, LinkSpan, NavUl } from "./styles";

const Header = () => {
	const { menuOpen, setMenuOpen, changeCursorState, onTabClick, tabState } =
		useContext(CurrentContext);
	const onOpenMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Container>
			<Logo>Gallery</Logo>
			<MenuBtn
				onClick={onOpenMenu}
				onMouseOver={() => changeCursorState("biggerInvert")}
				onMouseOut={() => changeCursorState("")}
			>
				MENU
			</MenuBtn>
			<Nav menuOpen={menuOpen}>
				<NavUl>
					{TabArr.map((item, index) => {
						return (
							<NavList
								key={`tab${index}`}
								onMouseOver={() => changeCursorState("bigger")}
								onMouseOut={() => changeCursorState("")}
								index={index === 1 ? 2.5 : index === 3 ? 3.5 : index === 0 ? 1 : index}
								menuOpen={menuOpen}
							>
								<LinkButton onClick={() => onTabClick(item)} current={tabState.id === index + 1}>
									0{index + 1}
								</LinkButton>
								<LinkSpan>{item.text}</LinkSpan>
							</NavList>
						);
					})}
				</NavUl>
				<Noise />
			</Nav>
		</Container>
	);
};

export default Header;
