import React from "react";
import Image from "next/image";
import { IProjectCardProps } from "@/app/models/IProjectCardProps";

interface ProjectCardProps {
	cardProps: IProjectCardProps;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ cardProps }) => {
	if (!cardProps) {
		return <div>Error: cardProps is undefined</div>;
	}

	return (
		<article className="p-5 border-4 border-portGray rounded-xl w-80 flex flex-col gap-4 hover:bg-portGray transition-all duration-150  ">
			<header className=" w-48">
				<h2 className="text-4xl ">{cardProps.title}</h2>
				<p className="text-base">{cardProps.description}</p>
			</header>
			<figure className="w-full flex flex-col justify-center text-center gap-3">
				<Image
					className="m-auto"
					src={cardProps.image}
					alt={cardProps.alt}
					height={195}
					width={246}
				/>
				<figcaption className="text-lg">{cardProps.techs}</figcaption>
			</figure>
		</article>
	);
};

export default ProjectCard;
