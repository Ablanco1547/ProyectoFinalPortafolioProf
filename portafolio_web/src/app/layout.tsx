import type { Metadata } from "next";
import "./globals.css";

import NavbarHeader from "./components/organisms/NavbarHeader";

import { abel } from "./fonts";
import type { Viewport } from "next";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	userScalable: false,
};

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
			<body id="overflow" className="overflow-x-hidden text-portOffWhite  ">
				<NavbarHeader></NavbarHeader>
				{children}
			</body>
		</html>
	);
}
