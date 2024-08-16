import { IBtnProps } from "@/app/models/IBtnProps";
import React from "react";

interface MainHoverBtnProps {
	btnProps: IBtnProps;
}

const MainHoverBtn: React.FC<MainHoverBtnProps> = ({ btnProps }) => {
	const borderColor =
		btnProps.color === "red" ? "border-portRed" : "border-portGreen";
	const hoverBgColor = btnProps.color === "red" ? "bg-portRed" : "bg-portGreen";

	return (
		<button
			type={btnProps.href as "submit" | "reset" | "button" | undefined}
			className={`text-3xl ${borderColor} my-8 w-max py-1 px-5 border-2 rounded-xl m-auto ${hoverBgColor} hover:scale-105 text-portDrkBlack transition-all duration-150`}
		>
			{btnProps.innerText}
		</button>
	);
};

export default MainHoverBtn;
