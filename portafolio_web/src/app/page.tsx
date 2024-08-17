import Project_Modal from "./components/molecules/Project_Modal";
import Hero_Banner from "./components/organisms/Hero_Banner";
import Page_Footer from "./components/organisms/Page_Footer";
import Prof_Profile from "./components/organisms/Prof_Profile";
import Contact from "./components/pages/Contact";
import IndexPage from "./components/pages/IndexPage";
import Projects from "./components/pages/Projects";
import SobreMi from "./components/pages/SobreMi";

export default function Home() {
	return (
		<>
			<IndexPage></IndexPage>
			<SobreMi></SobreMi>
			<Projects></Projects>
			<Contact></Contact>
			<Page_Footer></Page_Footer>
		</>
	);
}
