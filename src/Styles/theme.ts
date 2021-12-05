import { createGlobalStyle, DefaultTheme, keyframes } from "styled-components";
import reset from "styled-reset";

// Media query
const deviceSizes = {
  mobile: 639,
  tablet: 767,
  laptop: 1023,
  nomalPC: 1500,
  wide: 1920,
};

const deviceMax = {
  mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
  tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
  laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
  nomalPC: `screen and (max-width: ${deviceSizes.nomalPC}px)`,
};

const deviceMin = {
  mobile: `screen and (min-width: ${deviceSizes.mobile + 1}px)`,
  tablet: `screen and (min-width: ${deviceSizes.tablet + 1}px)`,
  laptop: `screen and (min-width: ${deviceSizes.laptop + 1}px)`,
  wide: `screen and (min-width: ${deviceSizes.wide + 1}px)`,
};

export const navyTheme: DefaultTheme = {
  bgColor1: "#4d5e65",
  bgColor2: "#706260",
  bgColor3: "#9a7951",
  accentColor: "#e4cbac",
  accentFont: '"Cormorant Garamond", "Nanum Myeongjo", serif',
  defaultFont: '"Nanum Myeongjo", serif',
  paragraphFont: '"Nanum Gothic", serif',
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  fullHeight: window.innerWidth > 639 ? "100vh" : `${window.innerHeight}px`,
  deviceScreenMax: deviceMax,
  deviceScreenMin: deviceMin,
};

export const skyblueTheme: DefaultTheme = {
  bgColor1: "#8ACAEB",
  bgColor2: "#4d5e65",
  bgColor3: "#706260",
  accentColor: "#fff",
  accentFont: '"Cormorant Garamond", "Nanum Myeongjo", serif',
  defaultFont: '"Nanum Myeongjo", serif',
  paragraphFont: '"Nanum Gothic", serif',
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  fullHeight: window.innerWidth > 639 ? "100vh" : `${window.innerHeight}px`,
  deviceScreenMax: deviceMax,
  deviceScreenMin: deviceMin,
};

//global
export const GlobalStyles = createGlobalStyle`
  ${reset}

	body, html{
		height:100%;
	}
  body{
    font-family: 'Nanum Myeongjo', 'Noto Sans KR', sans-serif;  
    color:${({ theme: { accentColor } }) => accentColor};
		background-color:${(props) => props.theme.bgColor1};
		transition: background-color 0.5s;
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

  // 접근성 고려한 IR 
	.blind {
    overflow: hidden;
    display: inline-block;
    position: absolute;
    z-index: -1;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
	}

`;
