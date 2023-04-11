import { Container, Logo, MenuButton, NavItem, NavList, ThemeButton } from "./styles";
import ToggleButton from "../../../components/Toggle Button";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";


const Header = ({theme, home, about, projects, contact}) => {
    const [display, setDisplay] = useState("0px");

    const ScrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const ToggleNavBar = () => {
        if(display === "0px"){
            setDisplay("19rem")
        }
        else{
            setDisplay("0px")
        }
    }

    return(
        <Container theme={theme}>
            <Logo theme={theme}>Yugi Nova</Logo>
            <NavList display={display} theme={theme}>
                <NavItem onClick={() => {ScrollToSection(home)}} theme={theme}>Home</NavItem>
                <NavItem onClick={() => {ScrollToSection(about)}} theme={theme}>About</NavItem>
                <NavItem  onClick={() => {ScrollToSection(projects)}} theme={theme}>Projects</NavItem>
                <NavItem  onClick={() => {ScrollToSection(contact)}} theme={theme}>Contact</NavItem>
            </NavList>
            <MenuButton onClick={ToggleNavBar} theme={theme}><MenuOutlined /></MenuButton>
            <ThemeButton>
                <ToggleButton/>
            </ThemeButton> 
        </Container>
    )
}

export default Header