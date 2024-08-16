import React from "react";
import SectionTitle from "../atoms/SectionTitle";

const SobreMi = () => {
	return (
		<section id="about_section" className=" noise-bg p-20 flex flex-col gap-14">
			<SectionTitle
				titleProps={{
					TitleInnerText: "SOBRE MI",
					pInnerText: "",
					dotColor: "",
					dotSize: "10",
				}}
			></SectionTitle>
		</section>
	);
};

export default SobreMi;
