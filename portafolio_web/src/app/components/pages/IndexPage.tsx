import React from "react";
import Hero_Banner from "../organisms/Hero_Banner";
import MainHoverBtn from "../atoms/MainHoverBtn";

const IndexPage = () => {
	return (
		<section
			id="index_section"
			className="bg-portDrkBlack flex flex-col justify-center noise-bg"
			style={{ height: "calc(100vh - 4.5rem)" }}
		>
			<div className="flex flex-col gap-20 text-center">
				<div className="flex flex-col  md:gap-12">
					<Hero_Banner></Hero_Banner>
					<p className="text-1xl text-base md:text-2xl  lg:text-4xl dimmed-text-07">
						HTML - CSS - JAVASCRIPT - TYPESCRIPT - REACT JS - NEXT JS - TAILWIND
					</p>
				</div>

				<MainHoverBtn
					btnProps={{
						href: "#projects_section",
						innerText: "Proyectos",
						color: "green",
					}}
				></MainHoverBtn>
			</div>
		</section>
	);
};

export default IndexPage;
