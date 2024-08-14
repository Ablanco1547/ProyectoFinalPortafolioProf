import React from "react";
import NavbarLogo from "../atoms/NavbarLogo";
import NavbarUL from "../molecules/NavbarUL";
import NavbarIconGroup from "../molecules/NavbarIconGroup";

const NavbarHeader = () => {
	return (
		<header>
			<NavbarLogo></NavbarLogo>
			<NavbarUL></NavbarUL>
			<NavbarIconGroup
				display={{ smDisplay: "hidden", mdDisplay: "md:flex" }}
			></NavbarIconGroup>
		</header>
	);
};

export default NavbarHeader;
