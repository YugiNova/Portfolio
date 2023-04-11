import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 1rem 20rem;
    background-color: ${props => props.theme.secondaryBackground};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px){
        padding: 2rem;
        flex-direction: column;
    }
`

export const Title = styled.h2`
    color: ${props => props.theme.secondaryFont};
    font-size: 1.25rem;
`

export const Social = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    svg{
        color: ${props => props.theme.secondaryFont};
        font-size: 2rem;
        transition: 0.5s ease;

        :hover{
        color: ${props => props.theme.primaryFont};
    }
    }
`
