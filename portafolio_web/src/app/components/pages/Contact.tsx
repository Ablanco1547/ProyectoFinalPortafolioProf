import React from "react";
import SectionTitle from "../atoms/SectionTitle";

const Contact = () => {
	return (
		<section className=" noise-bg p-14">
			<SectionTitle
				titleProps={{
					TitleInnerText: "CONTACTO",
					pInnerText: "",
					dotColor: "",
					dotSize: "10",
				}}
			></SectionTitle>
		</section>
	);
};

export default Contact;
