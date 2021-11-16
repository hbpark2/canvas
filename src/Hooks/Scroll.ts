import { useState, useEffect } from "react";

export function useScroll() {
	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		let mounted = true;

		if (window.innerWidth > 767) {
			document.addEventListener("scroll", () => {
				if (mounted) {
					setScrollY(window.pageYOffset);
				}
			});
		} else {
			document.addEventListener("touchstart", () => {
				if (mounted) {
					setScrollY(window.pageYOffset);
				}
			});
		}

		return () => {
			mounted = false;
		};
	}, []);

	return {
		scrollY,
	};
}
