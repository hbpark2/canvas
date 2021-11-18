import { createContext, useState } from "react";
import Bubble1 from "../Assets/bubble1.jpg";
import Drawing from "../Assets/drawing-10.jpg";

type StoreProviderProp = {
	children: React.ReactNode;
};

type CursorState = "biggerInvert" | "bigger" | "";

export type TabStateType = { theme: "01" | "02" | "03" | "04"; bgImage: string; text?: string };

type ValueType = {
	menuOpen: boolean;
	setMenuOpen: (T: boolean) => void;
	invert: boolean;
	setInvert: (T: boolean) => void;
	currentPosition: CursorState;
	tabState: TabStateType;
	setTabState: (T: TabStateType) => void;
	setCurrentPosition: (T: CursorState) => void;
	changeCursorState: (T: CursorState) => void;
	onTabClick: (T: TabStateType) => void;
};

export const CurrentContext = createContext<ValueType>({
	menuOpen: false,
	setMenuOpen: () => {},
	invert: false,
	setInvert: () => {},
	currentPosition: "",
	tabState: { theme: "01", bgImage: Bubble1 },
	setTabState: () => {},
	setCurrentPosition: () => {},
	changeCursorState: () => {},
	onTabClick: () => {},
});

export const StoreProvider: React.FC<StoreProviderProp> = ({ children }) => {
	const [tabState, setTabState] = useState<TabStateType>({
		theme: "01",
		bgImage: Bubble1,
		text: "THEME 01",
	});
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [currentPosition, setCurrentPosition] = useState<CursorState>("");
	const [invert, setInvert] = useState<boolean>(false);

	const changeCursorState = (state: string) => {
		if (state === "biggerInvert") {
			setCurrentPosition("bigger");
			setInvert(true);
		} else if (state === "bigger") {
			setCurrentPosition("bigger");
		} else {
			setCurrentPosition("");
			setInvert(false);
		}
	};

	const onTabClick = (theme: TabStateType) => {
		setTabState({ theme: theme.theme, bgImage: theme.bgImage });
	};

	const value: ValueType = {
		menuOpen,
		setMenuOpen,
		invert,
		setInvert,
		currentPosition,
		tabState,
		setTabState,
		setCurrentPosition,
		changeCursorState,
		onTabClick,
	};

	return <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>;
};
