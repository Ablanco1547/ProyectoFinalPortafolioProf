import React from "react";
import SectionTitle from "../atoms/SectionTitle";

const SobreMi = () => {
	return (
		<section className=" noise-bg p-14">
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
