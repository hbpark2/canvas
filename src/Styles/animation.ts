import { keyframes } from "styled-components";
export const FadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

export const NoiseAni = keyframes`
	0% {
		background-position: 0 0;
	}
	100% {
		background-position: 180px 456px;
	}
`;

export const CursorImage = keyframes`
	0% {
    filter: blur(10px) grayscale(100%);
	}
	100% {
		filter: blur(0px) grayscale(100%);
	}
`;

export const JakeImage = keyframes`
	0% {
    filter: blur(10px) ;
	}
	100% {
		filter: blur(0px) ;
	}
`;

export const RightToLeft = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(-300px);
            transform: translateX(-300px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
`;

export const Loop = keyframes`
  0% {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  to {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }
`;

export const Loop2 = keyframes` 
  0% {
    -webkit-transform: translateX(-200%);
    -ms-transform: translateX(-200%);
    transform: translateX(-200%);
  }
  to {
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
`;

export const SlideUp = keyframes` 
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, -15px, 0);
            transform: translate3d(0, -15px, 0);
  }
`;

export const SlideUpMoTop = keyframes` 
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, -50px, 0);
            transform: translate3d(0, -50px, 0);
  }
`;

export const SlideUpMo = keyframes` 
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
            transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0px, 0);
            transform: translate3d(0, 0px, 0);
  }
`;

export const CircleAni = keyframes`
 0% {
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      transform: rotate(0deg);
   }
   20% {
      border-radius: 70% 60% / 70% 60%;
   }
   40% {
      border-radius: 70% 60% / 70% 60%;
   }
   60% {
      border-radius: 60% 50% / 60% 50%;
   }
   100% {
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      transform: rotate(360deg);
   }
`;
