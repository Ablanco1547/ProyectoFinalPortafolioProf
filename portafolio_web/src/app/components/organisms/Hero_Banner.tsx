import React from "react";
import Image from "next/image";
import { redHat } from "@/app/fonts";
import RedDot from "../atoms/RedDot";

const Hero_Banner = () => {
	return (
		<div className="h-96 md:h-80 bg-portBlack flex  justify-between  ">
			<div className="text-center w-full md:w-8/12 my-auto flex flex-col gap-3 ">
				<h1
					className={`${redHat.className} text-6xl md:text-6xl lg:text-8xl font-semibold `}
				>
					Adrián Blanco<RedDot></RedDot>
				</h1>
				<h2 className="text-2xl md:text-4xl lg:text-5xl dimmed-text-08">
					Desarrollador front end<RedDot></RedDot>
				</h2>
			</div>
			<div className="  md:block absolute h-full md:h-80 w-full md:w-9/12  md:translate-x-1/3 lg:translate-x-2/4 ">
				<Image
					className="object-cover md:translate-x-36 lg:translate-x-32 opacity-5 md:opacity-90 "
					src="/Adrian.webp"
					fill={true}
					alt="Picture of the author"
				></Image>
			</div>
		</div>
	);
};

export default Hero_Banner;
