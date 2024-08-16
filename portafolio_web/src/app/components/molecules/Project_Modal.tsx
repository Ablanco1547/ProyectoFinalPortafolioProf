"use client";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { abel } from "@/app/fonts";

const Project_Modal: React.FC = () => {
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
				className="modalProyect"
				title="Nombre del proyecto"
				centered
				open={modal1Open}
				onOk={() => setModal1Open(false)}
				onCancel={() => setModal1Open(false)}
				wrapClassName={!modal1Open ? "hidden-overlay" : ""}
			>
				<p>Aqui va toda la info del proyecto</p>
			</Modal>
		</>
	);
};

export default Project_Modal;
