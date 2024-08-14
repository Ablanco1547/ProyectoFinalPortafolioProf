import React from "react";
import NavbarLink from "../atoms/NavbarLink";
import { it } from "node:test";
import { abel, redHat } from "@/app/fonts";

const NavbarUL = () => {
	const NavItems = [
		{ href: "#hero-section", innerText: "Inicio" },
		{ href: "#projects-section", innerText: "Proyectos" },

		{ href: "#contact-section", innerText: "contacto" },
		{ href: "#about-section", innerText: "Sobre mi" },
	];

	return (
		<nav className={redHat.className}>
			<ul>
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
