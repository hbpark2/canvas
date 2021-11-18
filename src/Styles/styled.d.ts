import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		bgColor1: string;
		bgColor2: string;
		bgColor3: string;
		accentFont: string;
		accentColor: string;
		deviceScreenMax: { [T in "mobile" | "tablet" | "laptop"]: string };
		deviceScreenMin: { [T in "mobile" | "tablet" | "laptop" | "wide"]: string };
	}
}
