import { useState, useEffect } from "react";
import { throttle } from "lodash";

export function useScroll() {
	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		let mounted = true;

		document.addEventListener(
			"scroll",
			throttle(() => {
				if (mounted) {
					setScrollY(window.pageYOffset);
				}
			}, 300)
		);

		return () => {
			mounted = false;
		};
	}, []);

	return {
		scrollY,
	};
}
