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
				className={`${redHat.className} font-bold text-5xl md:text-7xl lg:text-8xl font-bold text-red titleShadowSm md:titleShadowMd `}
			>
				{titleProps.TitleInnerText}
			</h3>
		</div>
	);
};

export default SectionTitle;
