import type { Metadata } from "next";
import { Inter } from "next/font/google";

import NavbarHeader from "./components/organisms/NavbarHeader";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="es">
			<body className={`abel.className antialiased`}>
				<NavbarHeader></NavbarHeader>
				{children}
			</body>
		</html>
	);
}
