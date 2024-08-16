import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ContactForm from "../molecules/ContactForm";

const Contact = () => {
	return (
		<section
			id="contact-section"
			className=" noise-bg  p-20 flex flex-col gap-14"
		>
			<SectionTitle
				titleProps={{
					TitleInnerText: "CONTACTO",
					pInnerText: "",
					dotColor: "",
					dotSize: "10",
				}}
			></SectionTitle>
			<ContactForm></ContactForm>
		</section>
	);
};

export default Contact;
