import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(motion.div)`
    display: grid;
    grid-template-columns: ${props => props.layout.templateColumn};
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
    gap: 3rem;

    background-color: ${props => props.theme.primaryBackground};
    margin: 1.5rem 0;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 1rem;
    padding: 2rem;

    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
        grid-template-rows: 25rem 1fr;
        gap: 1rem;
    }
`

export const Info = styled.div`
    text-align: center;
    grid-column:${props => props.layout.columnSpanInfo};
    grid-row: 1/2;

    @media screen and (max-width: 600px){
        grid-column: 1/2;
        grid-row: 2/3;
    }
`

export const Name = styled(motion.h2)`
    font-size: 1.7rem;
    color: ${props => props.theme.primaryFont};
    margin: 0;
`

export const Detail = styled(motion.p)`
    font-size: 1.25rem;
    color: ${props => props.theme.thirdFont};
    margin: 1rem 0;
`

export const TechUse = styled.div`
    color: ${props => props.theme.secondaryFont};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    

    margin: 1rem 0;

    h2{
        margin: 0 0.5rem;
        padding:0.5rem 1rem;
        font-size: 1rem;
        box-shadow: ${props => props.theme.boxShadow};
        background: ${props => props.theme.itemBackground};
        border-radius: 1rem;
    }

`

export const WebLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
` 

export const Link = styled(motion.NavLink)`
    color: ${props => props.theme.secondaryFont};
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0 1rem;
    transition: 0.5s ease;

    :hover{
        color: ${props => props.theme.primaryFont};
    }
`

export const WebImage = styled.a`
    grid-column:${props => props.layout.columnSpanImage};
    grid-row: 1/2;

    width: 100%;
    height: 18rem;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: ${props => props.theme.boxShadow};

    @media screen and (max-width: 600px){
        grid-column: 1/2;
        grid-row: 1/2;
        height: 100%;
    }
`

export const Image = styled.img`
    width: 100%;
    transform: translateY(0%);
    transition: transform 5s ease-in-out;

    :hover{
        transform: translateY(-70%);
    }

    @media screen and (max-width: 600px){

        :hover{
        transform: translateY(-52%);
    }
    }
    
`