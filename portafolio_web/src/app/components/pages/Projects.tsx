import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import ProjectCard from "../molecules/ProjectCard";
import Project_Card_Container from "../organisms/Project_Card_Container";

const Projects = () => {
	return (
		<section
			id="projects_section"
			className=" noise-bg p-20 flex flex-col gap-14"
		>
			<SectionTitle
				titleProps={{
					TitleInnerText: "PROYECTOS",
					pInnerText: "",
					dotColor: "",
					dotSize: "0",
				}}
			></SectionTitle>

			<Project_Card_Container></Project_Card_Container>
		</section>
	);
};

export default Projects;
