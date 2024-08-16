"use client";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { abel } from "@/app/fonts";
import { IProjectCardProps } from "@/app/models/IProjectCardProps";

interface ProjectModalProps {
	modalProps: IProjectCardProps;
}

const Project_Modal: React.FC<ProjectModalProps> = ({ modalProps }) => {
	const [modal1Open, setModal1Open] = useState(false);

	useEffect(() => {
		const overflowElement = document.getElementById("overflow");
		if (overflowElement) {
			if (modal1Open) {
				overflowElement.style.overflowY = "hidden";
			} else {
				overflowElement.style.overflowY = "scroll";
			}
		}
	}, [modal1Open]);

	return (
		<>
			<Button
				className={`${abel.className} text-portBlack bg-portGreen hover:bg-portRed text-xl MainModalBTN`}
				type="primary"
				onClick={() => setModal1Open(true)}
			>
				Ver proyecto
			</Button>

			<Modal
				className={`${abel.className} modalProyect flex flex-col items-center gap-5`}
				title={modalProps.title}
				centered
				open={modal1Open}
				onOk={() => setModal1Open(false)}
				onCancel={() => setModal1Open(false)}
				wrapClassName={!modal1Open ? "hidden-overlay" : ""}
			>
				<iframe
					className=""
					width="100%"
					height="315"
					src={modalProps.src}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
				></iframe>
				<p>{modalProps.extendedDescription}</p>

				<br></br>
				<p className="text-portOffWhite">{modalProps.techs}</p>
			</Modal>
		</>
	);
};

export default Project_Modal;
