import type { Metadata } from "next";
import "./globals.css";

import NavbarHeader from "./components/organisms/NavbarHeader";

import { abel } from "./fonts";

export const metadata: Metadata = {
	title: "Adrian Blanco | Portafolio",
	description: "Portafolio web del desarrollador full stack Adrian Blanco",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" className={`${abel.className} antialiased`}>
			<body className="overflow-x-hidden text-portOffWhite">
				<NavbarHeader></NavbarHeader>
				{children}
			</body>
		</html>
	);
}
