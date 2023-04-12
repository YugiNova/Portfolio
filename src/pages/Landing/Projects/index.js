import ProjectItem from "./ProjectItem";
import { Container, Title } from "./styles";


const Projects = ({theme}) => {
    const order = {
        even: {
            templateColumn: "1fr 1.5fr",
            columnSpanInfo: "1/2",
            columnSpanImage: "2/3"
        },
        odd: {
            templateColumn: "1.5fr 1fr",
            columnSpanInfo: "2/3",
            columnSpanImage: "1/2"
        }
    }

    return(
        <Container theme={theme}>
            <Title theme={theme}>
                <h3>Projects</h3>
                <h2>Some things i did...</h2>
            </Title>
            <ProjectItem layout={order.odd} order={"odd"}/>
            <ProjectItem layout={order.even}  order={"even"}/>
            <ProjectItem layout={order.odd} order={"odd"}/>
        </Container>
    )
}

export default Projects;