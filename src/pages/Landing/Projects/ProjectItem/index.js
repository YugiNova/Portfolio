import { Container, Info,Name, Detail, TechUse, WebLink, Link, WebImage, Image } from "./styles";
import webtest from "../../../../assets/webtest1.png"
import { useSelector } from "react-redux";
import { Theme } from "../../../../redux/selector"
import { GithubOutlined,DesktopOutlined } from "@ant-design/icons"


const ProjectItem = ({layout}) => {
    const theme = useSelector(Theme);

    return(
        <Container layout={layout} theme={theme}>
            <Info layout={layout} theme={theme}>
                <Name theme={theme}>COINDOM</Name>
                <Detail theme={theme}>Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.</Detail>
                <TechUse theme={theme}>
                    <h2>React</h2>
                    <h2>SCSS</h2>
                </TechUse>
                <WebLink theme={theme}>
                    <Link theme={theme}>Code <GithubOutlined/></Link>
                    <Link theme={theme}>Live Demo <DesktopOutlined /></Link>
                </WebLink>
            </Info>
            <WebImage layout={layout} theme={theme}>
                <Image src={webtest}/>
            </WebImage>
        </Container>
    )
}

export default ProjectItem;