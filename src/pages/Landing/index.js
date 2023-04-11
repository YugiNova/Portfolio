import { useSelector } from "react-redux";
import Header from "./Header";
import { Theme } from "../../redux/selector";
import LandingLayout from "../../layouts/LandingLayout";
import General from "./General";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useRef } from "react";
import { Section } from "./styles";
import Footer from "./Footer";



const Landing = () => {
    const theme = useSelector(Theme)
    const home = useRef(null)
    const about = useRef(null)
    const projects = useRef(null)
    const contact = useRef(null)

    return(
        <LandingLayout>
            <Header home={home} about={about} projects={projects} contact={contact} theme={theme}/>
            <Section ref={home}><General theme={theme}/></Section>
            <Section ref={about}><About theme={theme}/></Section>
            <Section ref={projects}><Projects theme={theme}/></Section>
            <Section ref={contact}><Contact theme={theme}/></Section>
            <Footer theme={theme}/>
        </LandingLayout>
    )
}

export default Landing;