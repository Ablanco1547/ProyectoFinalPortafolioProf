import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ContactForm from "../molecules/ContactForm";

const Contact = () => {
	return (
		<section
			id="contact-section"
			className=" noise-bg py-20 flex flex-col gap-2 lg:gap-10 text-center"
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
			<p className=" text-3xl lg:text-7xl">ablancoc@protonmail.com</p>
		</section>
	);
};

export default Contact;
