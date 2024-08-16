import React from "react";
import ProjectCard from "../molecules/ProjectCard";

const Project_Card_Container = () => {
	const Projects = [
		{
			title: "Tools R Oss",
			description: "Extensión de google chrome",
			extendedDescription:
				"Desarrollé una extensión para Google Chrome que automatiza la obtención de datos y listas deportivas detalladas junto con sus respectivas estadísticas. Esta herramienta reduce significativamente el margen de error humano y optimiza un proceso manual de 40 minutos, simplificándolo a solo dos clicks.",
			image: "/ToolsROss.webp",
			alt: "Project Image",
			techs: "Firebase, Javascript, Html, Css, Rest API",
			src: `https://www.youtube-nocookie.com/embed/RkiIPrmXLRE?si=cQ3eP0nlAKbuxAoG&amp;controls=0 `,
		},
		{
			title: "Nutricense",
			description: "Sitio web de nutrición",
			extendedDescription:
				"Nutricense es un proyecto de desarrollo web que ofrece a los usuarios información sobre nutrición y dietas personalizadas. La plataforma cuenta con un sistema de registro y login, así como un panel de administración para los nutricionistas, donde pueden gestionar sus clientes y sus dietas.",
			image: "/Nutricense.webp",
			alt: "Project Image",
			techs: "Html, Css, Javascript, C#,  Sql, .net ",
			src: `https://www.youtube-nocookie.com/embed/xrYmOqF7G3E?si=J1fWSDiFm8kYQ1aV&amp;controls=0`,
		},
		{
			title: "T R Oss Reporting",
			description: "Extensión de google chrome",
			extendedDescription:
				"Desarrollé una extensión para Google Chrome que ofrece a los usuarios un análisis exhaustivo de las jugadas de un jugador, presentando porcentajes e información detallada de su rendimiento. La herramienta también incluye una función de comparación de direcciones IP, permitiendo identificar si un mismo usuario está utilizando múltiples cuentas.",
			image: "/ToolsReporting.webp",
			alt: "Project Image",
			techs: "Firebase, Javascript, Html, Css, Rest API",

			src: `https://www.youtube-nocookie.com/embed/6Zfk-2yJZqo?si=k8WXBxg8T_ANuSfB&amp;controls=0`,
		},

		{
			title: "CenfoDungeons",
			description: "Video Juego",
			extendedDescription:
				"CenfoDungeons es un videojuego de aventuras en 2D desarrollado en Unity. El juego cuenta con un sistema de niveles, enemigos y jefes, así como un sistema de inventario y tienda. Los jugadores pueden elegir entre tres personajes con habilidades únicas y enfrentarse a desafiantes enemigos en un mundo lleno de misterios y secretos.",
			image: "/CenfoDungeons.webp",
			alt: "Project Image",
			techs: "C#, Unity",
			src: `https://www.youtube-nocookie.com/embed/xch8eIViXa0?si=xMieE4wolPnHMjlz&amp;controls=0 `,
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
						extendedDescription:
							project.extendedDescription || "Extended Description",
						src: project.src,
					}}
				/>
			))}
		</div>
	);
};

export default Project_Card_Container;
