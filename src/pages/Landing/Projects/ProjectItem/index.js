import { Container, Info,Name, Detail, TechUse, WebLink, Link, WebImage, Image } from "./styles";
import webtest from "../../../../assets/webtest1.png"
import { useSelector } from "react-redux";
import { Theme } from "../../../../redux/selector"
import { GithubOutlined,DesktopOutlined } from "@ant-design/icons"
import { motion } from "framer-motion";


const ProjectItem = ({layout, order}) => {
    const theme = useSelector(Theme);

    const containerOddVariants = {
        hidden: {
            x: 200,
            opacity:0
        },
        visible:{
            x: 0,
            opacity: 1,
            transition:{
                type:"ease",
                delay:0.25,
                duration:0.5,
                delayChildren: 0.5,
                staggerChildren: 0.25
            }
        }
    }

    const containerEvenVariants = {
        hidden: {
            x: -200,
            opacity:0
        },
        visible:{
            x: 0,
            opacity: 1,
            transition:{
                type:"ease",
                delay:0.25,
                duration:0.5,
                delayChildren: 0.5,
                staggerChildren: 0.25
            }
        }
    }

    const childrenVariants ={
        hidden: {
            opacity:0,
            y:200
        },
        visible:{
            opacity:1,
            y:0
        }
    }

    return(
        <Container variants={order==="odd"?containerOddVariants:containerEvenVariants} initial="hidden" whileInView="visible" layout={layout} theme={theme}>
            <Info layout={layout} theme={theme}>
                <Name variants={childrenVariants} theme={theme}>COINDOM</Name>
                <Detail variants={childrenVariants} theme={theme}>Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.</Detail>
                <TechUse theme={theme}>
                    <motion.h2 variants={childrenVariants}>React</motion.h2>
                    <motion.h2 variants={childrenVariants}>SCSS</motion.h2>
                </TechUse>
                <WebLink theme={theme}>
                    <Link variants={childrenVariants} theme={theme}>Code <GithubOutlined/></Link>
                    <Link variants={childrenVariants} theme={theme}>Live Demo <DesktopOutlined /></Link>
                </WebLink>
            </Info>
            <WebImage layout={layout} theme={theme}>
                <Image src={webtest}/>
            </WebImage>
        </Container>
    )
}

export default ProjectItem;