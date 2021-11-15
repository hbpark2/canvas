import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div<{ currentPosition?: string }>`
	pointer-events: none;
	position: fixed;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	opacity: 1;
	width: 80px;
	height: 80px;
	border: 1px solid #bababa;
	transform: translate(-50%, -50%);
	transition: transform 0.5s ease-in-out;
	z-index: 100;

	@media screen and (max-width: 767px) {
		display: none;
	}
`;

const CursorDot = styled.i`
	pointer-events: none;
	position: fixed;
	top: 50%;
	left: 50%;
	border-radius: 50%;
	opacity: 1;
	transform: translate(-50%, -50%);
	transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out,
		-webkit-transform 0.3s ease-in-out;
	width: 8px;
	height: 8px;
	background-color: #5fc0d6;
	z-index: 100;
`;

type PostionTypes = {
	x: number;
	y: number;
};
type TailPostionTypes = {
	x: string;
	y: string;
};

interface CursorProps {
	currentPosition: string;
}
const Cursor: React.FC<CursorProps> = ({ currentPosition }) => {
	const [position, setPosition] = useState<PostionTypes>({ x: -80, y: -80 });
	const [tailPosition, setTailPosition] = useState<TailPostionTypes>({
		x: "",
		y: "",
	});

	const addEventListeners = (): void => {
		document
			.getElementById("content")
			?.addEventListener("mousemove", onMouseMove);
	};

	const removeEventListeners = (): void => {
		document
			.getElementById("content")
			?.removeEventListener("mousemove", onMouseMove);
	};

	const onMouseMove = (e: MouseEvent): void => {
		setPosition({ x: e.clientX, y: e.clientY });
	};

	const tail = () => {
		const cursorTail = document.querySelector(".cursor-tail")! as HTMLElement;

		const tail_x = parseInt(cursorTail.style?.left.replace("px", "")) || 0;
		const tail_y = parseInt(cursorTail.style?.top.replace("px", "")) || 0;
		// cursorTail.style.top = `${Math.round(
		// 	tail_y + (position.y - tail_y) / 10
		// )}px`;
		// cursorTail.style.left = `${Math.round(
		// 	tail_x + (position.x - tail_x) / 10
		// )}px`;
		setTailPosition({
			x: `${Math.round(tail_x + (position.x - tail_x) / 10)}px`,
			y: `${Math.round(tail_y + (position.y - tail_y) / 10)}px`,
		});
	};

	useEffect(() => {
		addEventListeners();

		return () => removeEventListeners();
	}, []);

	useEffect(() => {
		tail();
	}, [position]);

	return (
		<>
			<Container
				className="cursor-tail"
				role="cursor"
				// currentPosition={currentPosition}
				style={{
					// transform: `translate(${tailPosition.x}, ${tailPosition.y})`,
					left: `${tailPosition.x}`,
					top: `${tailPosition.y}`,
				}}
			/>
			<CursorDot
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
			/>
		</>
	);
};

export default Cursor;
