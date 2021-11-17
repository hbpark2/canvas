import { createGlobalStyle, DefaultTheme, keyframes } from "styled-components";
import reset from "styled-reset";

// Media query
const deviceSizes = {
	mobile: "639px",
	tablet: "767px",
	laptop: "1023px",
};

const device = {
	mobile: `screen and (max-width: ${deviceSizes.mobile})`,
	tablet: `screen and (max-width: ${deviceSizes.tablet})`,
	laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

export const commonTheme: DefaultTheme = {
	bgColor1: "#4d5e65",
	bgColor2: "#706260",
	bgColor3: "#9a7951",
	accentColor: "#e4cbac",
	accentFont: '"Cormorant Garamond", serif',
	deviceScreen: device,
};

//global
export const GlobalStyles = createGlobalStyle`
  ${reset}

	body, html{
		height:100%;
	}
  body{
    font-family: 'Noto Sans KR', sans-serif;  
		background-color:${(props) => props.theme.bgColor1};
	}

  main{
    width: auto;
    transition: all .5s;
  }

  a {
    text-decoration: none;
  }

	body::-webkit-scrollbar {
	width: 5px;
	height:5px;
	/* display: none; */
	}

	body::-webkit-scrollbar-thumb {
		background-color: rgba(255,255,255,0.7);
		height: 20px;
		border-radius: 10px;
	}

	body::-webkit-scrollbar-track {
		background-color: rgba(0,0,0,0.1);
	}

	.overflow-hidden{
		overflow:hidden;
	}
	.overflow-unset{
		overflow:unset;
	}

.blind {
	position: absolute;
	width: 1px;
	height: 1px;
	clip: rect(0 0 0 0);
	overflow: hidden;
}

`;
