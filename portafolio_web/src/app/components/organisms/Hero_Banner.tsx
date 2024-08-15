import React from "react";
import Image from "next/image";
import { redHat } from "@/app/fonts";
import RedDot from "../atoms/RedDot";

const Hero_Banner = () => {
	return (
		<div className="h-80 bg-portBlack flex justify-between  ">
			<div className="text-center w-8/12 my-auto flex flex-col gap-3 ">
				<h1 className={`${redHat.className} text-8xl font-semibold `}>
					Adrián Blanco<RedDot></RedDot>
				</h1>
				<h3 className="text-5xl dimmed-text-08">
					Desarrollador front end<RedDot></RedDot>
				</h3>
			</div>
			<div className="absolute h-80 w-9/12  translate-x-2/4 ">
				<Image
					className="object-cover translate-x-32 opacity-90 "
					src="/Adrian.webp"
					fill={true}
					alt="Picture of the author"
				></Image>
			</div>
		</div>
	);
};

export default Hero_Banner;
