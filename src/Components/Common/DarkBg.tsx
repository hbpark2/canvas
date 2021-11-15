import React from "react";
import styled from "styled-components";

const Conatiner = styled.div`
	.dark_01_a {
		transition: 0.5s ease-out;
		background: #000 !important;
		z-index: -1;
	}

	.dark_01_b {
		-webkit-filter: invert(100%);
		filter: invert(100%);
		background: white;
	}
`;

const DarkBg = () => {
	return <div></div>;
};

export default DarkBg;
