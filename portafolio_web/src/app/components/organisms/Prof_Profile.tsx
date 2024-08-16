import React from "react";
import MainHoverBtn from "../atoms/MainHoverBtn";

const Prof_Profile = () => {
	return (
		<section className="w-full  text-center flex flex-col gap-16 justify-center md:px-40 noise-bg">
			<div className="w-full lg:w-10/12  m-auto flex flex-col gap-16 justify-center ">
				<p className="text-4xl md:text-5xl text-portTransparentWhite">
					Transformando visiones en realidades digitales
				</p>
				<p className="text-xl md:text-2xl w-10/12 sm:w-full xl:w-8/12  m-auto ">
					Desarrollador full stack con experiencia en React, Next.js, HTML, CSS,
					Tailwind, JavaScript y TypeScript. Además poseo conocimientos en
					diversas tecnologías de backend y bases de datos. Comprometido con la
					creación de interfaces de usuario eficientes y atractivas, así como
					con la implementación de soluciones tecnológicas innovadoras.
				</p>
			</div>
		</section>
	);
};

export default Prof_Profile;
