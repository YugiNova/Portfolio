import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 5rem 20rem;
    background: ${props => props.theme.secondaryBackground};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px){
        padding: 2rem;
        text-align: center;
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

        img{
            width: 1.8rem;
        }
    }
`

