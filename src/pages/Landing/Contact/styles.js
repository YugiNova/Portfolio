import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 5rem 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.primaryBackground};

    @media screen and (max-width:600px){
        padding: 2rem;
    }
`

export const Title = styled.div`
    width: 100%;

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
    }

    @media screen and (max-width:600px){
        text-align: center;
    }
`

export const Contacts = styled.div`
    display: grid;
    grid-template-columns: 1.25fr 1.25fr 1fr;
    gap: 2rem;
    margin: 2rem 0;
    width: 100%;

    @media screen and (max-width:600px){
        grid-template-columns: 1fr;
        justify-items: start;
        padding: 0 4rem;
    }
`

export const ContactItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
`

export const ImageWrapper = styled.div`
    background-color: ${props => props.theme.secondaryBackground};
    grid-column: 1/2;
    grid-row: 1/3;
    box-shadow: ${props => props.theme.boxShadow};
    width: 4rem;
    height: 4rem;
    /* border: 1px black solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

export const Image = styled.img`
    width: 2rem;
    height: 2rem;
    transition: 0.5s ease;

    :hover{
        width: 3rem;
        height: 3rem;
    }
`

export const ContactTitle = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    color: ${props => props.theme.secondaryFont};
    font-size: 1.2rem;
    font-weight: bold;
`

export const ContactDetail = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    color: ${props => props.theme.thirdFont};
    font-size: 1.2rem;
`