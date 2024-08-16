import Hero_Banner from "./components/organisms/Hero_Banner";
import Prof_Profile from "./components/organisms/Prof_Profile";
import Contact from "./components/pages/Contact";
import IndexPage from "./components/pages/IndexPage";
import Projects from "./components/pages/Projects";
import SobreMi from "./components/pages/SobreMi";

export default function Home() {
	return (
		<>
			<IndexPage></IndexPage>

			<Projects></Projects>
			<Contact></Contact>

			<SobreMi></SobreMi>
		</>
	);
}
