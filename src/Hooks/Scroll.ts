import { useState, useEffect } from "react";

export function useScroll() {
	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		let mounted = true;

		if (window.innerWidth > 767) {
			window.addEventListener("scroll", () => {
				if (mounted) {
					setScrollY(window.pageYOffset);
				}
			});
		} else {
			window.addEventListener("touchstart", () => {
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
