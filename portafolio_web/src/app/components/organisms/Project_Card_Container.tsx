import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const Project_Card_Container = () => {
	const Projects = [
		{
			title: "Tools R Oss",
			description: "Extensión de google chrome",
			image: "/ToolsROss.webp",
			alt: "Project Image",
			techs: "Firebase, Javascript, Html, Css, Rest API",
		},
		{
			title: "Nutricense",
			description: "Sitio web de nutrición",
			image: "/Nutricense.webp",
			alt: "Project Image",
			techs: "Html, Css, Javascript, C#,  Sql, .net ",
		},
		{
			title: "T R Oss Reporting",
			description: "Extensión de google chrome",
			image: "/ToolsReporting.webp",
			alt: "Project Image",
			techs: "Firebase, Javascript, Html, Css, Rest API",
		},

		{
			title: "CenfoDungeons",
			description: "Video Juego",
			image: "/CenfoDungeons.webp",
			alt: "Project Image",
			techs: "C#, Unity",
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
