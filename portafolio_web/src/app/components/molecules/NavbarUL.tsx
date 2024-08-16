import React from "react";
import NavbarLink from "../atoms/NavbarLink";
import { it } from "node:test";
import { abel, redHat } from "@/app/fonts";

const NavbarUL = () => {
	const NavItems = [
		{ href: "#index_section", innerText: "Inicio" },
		{ href: "#projects_section", innerText: "Proyectos" },

		{ href: "#contact-section", innerText: "Contacto" },
		{ href: "#about_section", innerText: "Sobre mi" },
	];

	return (
		<nav className={redHat.className}>
			<ul className="flex gap-4 md:gap-8 ">
				{NavItems.map((item, index) => (
					<NavbarLink
						key={index}
						link={{ href: item.href, innerText: item.innerText }}
					/>
				))}
			</ul>
		</nav>
	);
};

export default NavbarUL;
