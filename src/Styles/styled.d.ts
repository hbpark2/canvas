import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor1: string;
    bgColor2: string;
    bgColor3: string;
    accentFont: string;
    defaultFont: string;
    paragraphFont: string;
    accentColor: string;
    fullHeight: string;
    textShadow: string;
    deviceScreenMax: {
      [T in "mobile" | "tablet" | "laptop" | "nomalPC"]: string;
    };
    deviceScreenMin: { [T in "mobile" | "tablet" | "laptop" | "wide"]: string };
  }
}
