import { ILinkNav } from "@/app/models/ILinkNav";
import React from "react";

interface NavbarLinkProps {
	link: ILinkNav;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ link }) => {
	return (
		<li className="transition-transform duration-300 hover:scale-105  ">
			<a href={link.href} className="text-xs md:text-xl truncate">
				{link.innerText}
			</a>
		</li>
	);
};

export default NavbarLink;
