import { TabStateType } from "../../../Context/ContextStore";
import Bubble1 from "../../../Assets/bubble1.jpg";
import Bubble2 from "../../../Assets/bubble2.jpg";
import Bubble3 from "../../../Assets/bubble3.jpg";
import Bubble4 from "../../../Assets/bubble4.jpg";
import TheGN1 from "../../../Assets/thegn1.png";
import TheGN2 from "../../../Assets/thegn2.png";
import TheGN3 from "../../../Assets/thegn3.png";

export const TabArr: TabStateType[] = [
  { id: 1, bgImage: TheGN2, theme: "01", text: "가나다라마바사" },
  { id: 2, bgImage: TheGN1, theme: "02", text: "가나다라마바사" },
  { id: 3, bgImage: TheGN3, theme: "01", text: "가나다라마바사" },
  { id: 4, bgImage: Bubble4, theme: "02", text: "가나다라마바사" },
  // { id: 5, bgImage: Bubble1, theme: "01", text: "가나다라마바사" },
];
