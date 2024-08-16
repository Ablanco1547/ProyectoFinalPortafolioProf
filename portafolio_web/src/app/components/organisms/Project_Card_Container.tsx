import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const Project_Card_Container = () => {
	const Projects = [
		{
			title: "Project Title",
			description: "Project Description",
			image: "/projects/ToolsROss.webp",
			alt: "Project Image",
			techs: "Tech 1, Tech 2, Tech 3",
		},
		{
			title: "Project Title",
			description: "Project Description",
			image: "/ToolsROss.webp",
			alt: "Project Image",
			techs: "Tech 1, Tech 2, Tech 3",
		},
		{
			title: "Project Title",
			description: "Project Description",
			image: "/ToolsROss.webp",
			alt: "Project Image",
			techs: "Tech 1, Tech 2, Tech 3",
		},
	];

	return (
		<div className="lg:w-3/4 m-auto flex justify-evenly flex-wrap gap-8">
			{Projects.map((project, index) => (
				<ProjectCard
					key={index}
					cardProps={{
						title: project.title || "Project Title",
						description: project.description || "Project Description",
						image: project.image || "/ToolsROss.webp",
						alt: project.alt || "Project Image",
						techs: project.techs || "Tech 1, Tech 2, Tech 3",
					}}
				/>
			))}
		</div>
	);
};

export default Project_Card_Container;
