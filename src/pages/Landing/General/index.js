import { useState } from "react";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";
import react from "../../../assets/reactjs.svg";
import redux from "../../../assets/redux.png";
import antd from "../../../assets/antd.svg";
import avatarImg from "../../../assets/avatar.jpg";
import hand from "../../../assets/wave.png"
import location from "../../../assets/location.png"
import { Avatar, Container, Icon, Introduce, Skill, TechIcon, TechList } from "./styles";


const General = ({theme}) => {
    const [avatar, setAvatar] = useState(avatarImg)

    return(
        <Container theme={theme}>
            <Avatar theme={theme} img={avatar} src=""/>
            <Introduce theme={theme}>
                <h2>Hello, my name is <span>Nguyen Quoc Thang</span></h2>
                <h1>Front-End React Developer <img src={hand}/></h1>
                <p>I'm a passionate Front-end React Developer living in Ho Chi Minh city <img src={location}/></p>
            </Introduce>
            
            <Skill theme={theme}>
                <h3>Tech Stack</h3>
                <TechList>
                    <TechIcon theme={theme}><Icon src={html}/></TechIcon>
                    <TechIcon theme={theme}><Icon src={css}/></TechIcon>
                    <TechIcon theme={theme}><Icon src={js}/></TechIcon>
                    <TechIcon theme={theme}><Icon src={react}/></TechIcon>
                    <TechIcon theme={theme}><Icon src={redux}/></TechIcon>
                    <TechIcon theme={theme}><Icon src={antd}/></TechIcon>
                </TechList>
            </Skill>
        </Container>
    )
}

export default General;