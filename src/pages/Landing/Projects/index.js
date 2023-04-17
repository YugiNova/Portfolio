import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";
import { Container, Title } from "./styles";
import { getProjects } from "../../../redux/selector";


const Projects = ({theme}) => {
    const projects = useSelector(getProjects);

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
            {
                projects.map((item,index) => {
                    if(index%2 === 0){
                       return <ProjectItem project={item} layout={order.even} order={"even"}/>
                    }
                    else{
                        return <ProjectItem project={item} layout={order.odd} order={"odd"}/>
                    }
                })
            }
        </Container>
    )
}

export default Projects;