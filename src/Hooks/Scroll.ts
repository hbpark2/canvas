import { useState, useEffect } from "react";

export function useScroll() {
	const [scrollY, setScrollY] = useState<number>(0);

	//FIXME: npm i lodash
	useEffect(() => {
		let mounted = true;

		document.addEventListener("scroll", () => {
			if (mounted) {
				setScrollY(window.pageYOffset);
			}
		});

		return () => {
			mounted = false;
		};
	}, []);

	return {
		scrollY,
	};
}
