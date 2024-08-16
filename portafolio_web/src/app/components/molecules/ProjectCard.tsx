import React from "react";
import Image from "next/image";
import { IProjectCardProps } from "@/app/models/IProjectCardProps";
import Project_Modal from "./Project_Modal";

interface ProjectCardProps {
	cardProps: IProjectCardProps;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ cardProps }) => {
	if (!cardProps) {
		return <div>Error: cardProps is undefined</div>;
	}

	return (
		<article className="p-3 md:p-5 border-4 border-portGray rounded-xl w-64 md:w-80 flex flex-col gap-4 hover:bg-portGray transition-all duration-150 Project-Card ">
			<header className=" w-64">
				<h2 className="text-2xl md:text-4xl ">{cardProps.title}</h2>
				<p className="text-sm md:text-base">{cardProps.description}</p>
			</header>
			<figure className="w-full flex flex-col justify-center text-center gap-3">
				<Image
					className="m-auto hidden md:block"
					src={cardProps.image}
					alt={cardProps.alt}
					height={195}
					width={246}
				/>
				<Image
					className="m-auto  md:hidden"
					src={cardProps.image}
					alt={cardProps.alt}
					height={170}
					width={200}
				/>
				<figcaption className="text-base truncate md:text-lg">
					{cardProps.techs}
				</figcaption>
			</figure>
			<Project_Modal modalProps={cardProps}></Project_Modal>
		</article>
	);
};

export default ProjectCard;
