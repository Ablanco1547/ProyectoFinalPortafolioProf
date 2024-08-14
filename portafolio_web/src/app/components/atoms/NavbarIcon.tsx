import { ISvgIcon } from "@/app/models/ISvgIcon";
import React from "react";

interface NavbarIconProps {
	svg: ISvgIcon;
}
const NavbarIcon: React.FC<NavbarIconProps> = ({ svg }) => {
	return (
		<a href={svg.href} aria-label={svg.ariaLabel} target="blank">
			{" "}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="45"
				width="45"
				viewBox="0 0 448 512"
			>
				<path opacity="1" fill="#E34F3A" d={svg.d} />
			</svg>
		</a>
	);
};

export default NavbarIcon;
