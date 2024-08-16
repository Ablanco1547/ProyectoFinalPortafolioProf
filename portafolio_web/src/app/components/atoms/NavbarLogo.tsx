import React from "react";
import Image from "next/image";

const NavbarLogo = () => {
	return (
		<a href="#index_section">
			<Image
				src="/ABLogo.webp"
				width={99}
				height={72}
				alt="Letras AB representando el logo de Adrián Blanco"
				priority={true}
			/>
		</a>
	);
};

export default NavbarLogo;
