import { Container, Content, Image } from "./styles";
import location from "../../../assets/location.png"


const About = ({theme}) => {

    return(
        <Container theme={theme}>
            <Image img="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"/>
            <Content  theme={theme}>
                <h3>About Me</h3>
                <h2>A passionate Front-End Developer base in Ho Chi Minh City <img src={location}/></h2>
                <p>As a passionate and fresher Front-End React Developer, i have basic knowledge in HTML, CSS, JS, ReactJS Library and some tech to use with React like Ant Design, Styled-Components to make ReactApp more personalize, Redux, React-Router to control and maintain React App more easier.</p>
            </Content>
        </Container>
    )
}

export default About;