import { IBtnProps } from "@/app/models/IBtnProps";
import React from "react";

interface MainHoverBtnProps {
	btnProps: IBtnProps;
}

const MainHoverBtn: React.FC<MainHoverBtnProps> = ({ btnProps }) => {
	const borderColor =
		btnProps.color === "red" ? "border-portRed" : "border-portGreen";
	const hoverBgColor =
		btnProps.color === "red" ? "hover:bg-portRed" : "hover:bg-portGreen";

	return (
		<a
			href={btnProps.href}
			className={`md:text-3xl ${borderColor} w-max py-3 px-5 border-2 rounded-xl m-auto ${hoverBgColor} hover:text-portDrkBlack transition-all duration-150`}
		>
			{btnProps.innerText}
		</a>
	);
};

export default MainHoverBtn;
