import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import Prof_Profile from "../organisms/Prof_Profile";

const SobreMi = () => {
	return (
		<section
			id="about_section"
			className=" noise-bg md:p-20 flex flex-col gap-14"
		>
			<SectionTitle
				titleProps={{
					TitleInnerText: "SOBRE MI",
					pInnerText: "",
					dotColor: "",
					dotSize: "10",
				}}
			></SectionTitle>

			<Prof_Profile></Prof_Profile>
		</section>
	);
};

export default SobreMi;
