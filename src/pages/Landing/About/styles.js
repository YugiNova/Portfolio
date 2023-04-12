import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.primaryBackground};
    display: grid;
    grid-template-columns: 23rem 1fr;
    gap: 2rem;
    width: 100%;
    padding: 5rem 20rem;

    @media screen and (max-width: 600px) {
        padding: 2rem;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        text-align: center;
    }
`

export const Image = styled(motion.img)`
    background-image: url(${props => props.img});
    background-position: 60% 50%;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    
`

export const Content = styled(motion.div)`

    h3{
        margin: 0;
        font-size: 1.25rem;
        color: ${props => props.theme.primaryFont};
    }
    h2{
        margin: 0;
        font-size: 1.8rem;
        color: ${props => props.theme.secondaryFont};
        margin: 1rem 0;

        img{
            width: 1.8rem;
        }
    }
    p{
        margin: 0;
        font-size: 1.2rem;
        color: ${props => props.theme.thirdFont};
        line-height: 1.5;
    }
`