import { ILinkNav } from "@/app/models/ILinkNav";
import React from "react";

interface NavbarLinkProps {
	link: ILinkNav;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ link }) => {
	return (
		<li>
			<a href={link.href} className="">
				{link.innerText}
			</a>
		</li>
	);
};

export default NavbarLink;
