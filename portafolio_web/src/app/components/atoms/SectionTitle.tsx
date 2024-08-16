import { redHat } from "@/app/fonts";
import { ISectionTitleProps } from "@/app/models/ISectionTitleProps";
import React from "react";

interface SectionTitleProps {
	titleProps: ISectionTitleProps;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ titleProps }) => {
	return (
		<div className="w-full text-center">
			<h3
				className={`${redHat.className} font-bold text-8xl font-bold text-red titleShadowSm md:titleShadowMd lg:titleShadowLg lg:text-custom-6vw 2xl:titleShadowXL`}
			>
				{titleProps.TitleInnerText}
			</h3>
		</div>
	);
};

export default SectionTitle;
