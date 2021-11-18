import { useContext, useEffect } from "react";
import { CurrentContext } from "../../../Context/ContextStore";
import { TabArr } from "../../../Home/components/Tab/tabdata";
import Noise from "../../Common/Noise";
import { Container, Logo, MenuBtn, Nav, NavList } from "./styles";

const Header = () => {
	const { menuOpen, setMenuOpen, changeCursorState, onTabClick } = useContext(CurrentContext);
	const onOpenMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<Container>
			<Logo>Gallery</Logo>
			<MenuBtn onClick={onOpenMenu}>MENU</MenuBtn>
			<Nav menuOpen={menuOpen}>
				<ul>
					{TabArr.map((item, index) => {
						return (
							<NavList
								key={`tab${index}`}
								onMouseOver={() => changeCursorState("bigger")}
								onMouseOut={() => changeCursorState("")}
							>
								{/* <TabButton onClick={() => onTabClick(item)}>0{index + 1}</TabButton>
								<TabSpan>{item.text}</TabSpan> */}
							</NavList>
						);
					})}
				</ul>
				<Noise />
			</Nav>
		</Container>
	);
};

export default Header;
