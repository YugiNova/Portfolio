import { FacebookOutlined,GithubOutlined,LinkedinOutlined } from "@ant-design/icons";
import { Container, Social, Title } from "./styles";
import { Link } from "react-router-dom";


const Footer = ({theme}) => {

    return(
        <Container theme={theme}>
            <Title theme={theme}>Copyright © 2023. All rights are reserved</Title>
            <Social theme={theme}>
                <Link to={"https://www.facebook.com/YugiNova1312/"}><FacebookOutlined /></Link>
                <Link to={"https://github.com/YugiNova"}><GithubOutlined /></Link>
                <Link to={"https://www.linkedin.com/in/nova-yugi-4044891b1/"}><LinkedinOutlined /></Link>
            </Social>
        </Container>
    )
}

export default Footer;