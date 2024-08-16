"use client";

import emailjs from "@emailjs/browser";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, message, Modal, Space } from "antd";
import MainHoverBtn from "../atoms/MainHoverBtn";
import FilledBtn from "../atoms/FilledBtn";
interface FormData {
	name: string;
	email: string;
	message: string;
}

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		const serviceId = "service_c0dihyv";
		const templateId = "template_rsv487u";
		const apiKey = "Vt5X20fHWIPPkQVSs";

		emailjs
			.sendForm(serviceId, templateId, "#Contact-Form", apiKey)
			.then((result) => {
				setIsSubmitted(true);
			})
			.catch((error) =>
				displayMsg(`Error al enviar mensaje, intente de nuevo`, "error")
			);

		displayMsg(`Enviando mensaje`, "loading");
		console.log("Form submitted:", formData);
	};
	useEffect(() => {
		if (isSubmitted) {
			displayMsg("El mensaje ha sido enviado correctamente", "success");

			setIsSubmitted(false);
		}
	}, [isSubmitted]);

	const success = () => {
		Modal.success({
			content: "some messages...some messages...",
		});
	};

	const displayMsg = (insideContent: string, msgType: string) => {
		switch (msgType) {
			case "success":
				Modal.success({
					content: insideContent,
					className: "messageModal",
				});
				break;
			case "loading":
				message.loading({
					content: insideContent,
					duration: 1,
					className: "messageBox",
				});
				break;
			case "error":
				message.error({
					content: insideContent,
					duration: 5,
					className: "messageBox",
				});
				break;
			default:
				// Handle other cases here
				break;
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			id="Contact-Form"
			className=" text-portOffWhite p-4 mb-36 w-11/12 md:w-10/12 lg:w-8/12 md:gap-2 md:gap-4 h-auto md:p-10 flex flex-col mx-auto text-left"
		>
			<div className="flex flex-col gap-3">
				<label htmlFor="name" className="font-light text-xl ">
					Nombre
				</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					className="text-2xl p-2 border-b-2 border-portTransparentWhite  bg-portDrkBlack"
					required
				/>
			</div>

			<div className="flex flex-col gap-3">
				<label htmlFor="email" className="font-light text-xl ">
					Correo
				</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					className="text-2xl p-2 border-b-2 border-portTransparentWhite  bg-portDrkBlack"
					required
				/>
			</div>

			<div className="flex flex-col gap-3">
				<label htmlFor="message" className="font-light text-xl">
					Mensaje
				</label>
				<textarea
					id="message"
					name="message"
					rows={4}
					value={formData.message}
					onChange={handleChange}
					className="text-2xl p-2 border-b-2 border-portTransparentWhite overflow-hidden  bg-portDrkBlack"
					required
				></textarea>
			</div>

			<FilledBtn
				btnProps={{ href: "submit", innerText: "Enviar", color: "green" }}
			></FilledBtn>
		</form>
	);
};

export default ContactForm;
