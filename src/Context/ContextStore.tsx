import { createContext, useState } from "react";
import Bubble1 from "../Assets/bubble1.jpg";

type StoreProviderProp = {
	children: React.ReactNode;
};

type CursorState = "biggerInvert" | "bigger" | "";

type ValueType = {
	menuOpen: boolean;
	setMenuOpen: (T: boolean) => void;
	invert: boolean;
	setInvert: (T: boolean) => void;
	currentPosition: CursorState;
	bgImage: string;
	setBgImage: (T: string) => void;
	setCurrentPosition: (T: CursorState) => void;
	changeCursorState: (T: CursorState) => void;
};

export const CurrentContext = createContext<ValueType>({
	menuOpen: false,
	setMenuOpen: () => {},
	invert: false,
	setInvert: () => {},
	currentPosition: "",
	bgImage: "",
	setBgImage: () => {},
	setCurrentPosition: () => {},
	changeCursorState: () => {},
});

export const StoreProvider: React.FC<StoreProviderProp> = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const [currentPosition, setCurrentPosition] = useState<CursorState>("");
	const [invert, setInvert] = useState<boolean>(false);
	const [bgImage, setBgImage] = useState<string>(Bubble1);

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

	const value: ValueType = {
		menuOpen,
		setMenuOpen,
		invert,
		setInvert,
		currentPosition,
		bgImage,
		setBgImage,
		setCurrentPosition,
		changeCursorState,
	};

	return <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>;
};
