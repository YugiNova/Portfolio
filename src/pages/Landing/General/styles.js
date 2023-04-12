import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 3fr 1fr;
    justify-items: start;
    gap: 2rem;

    margin-top: 4.6rem;
    background: ${props => props.theme.secondaryBackground};
    padding: 5rem 20rem;

    @media screen and (max-width: 600px) {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const Introduce = styled.div`
    grid-column: 1/2;
    grid-row: 1/2;

    h2{
        font-size: 1.8rem;
        margin: 1rem 0;
        color: ${props => props.theme.secondaryFont};

        span{
            font-size: 1.8rem;
            color: ${props => props.theme.primaryFont};
        }
    }

    h1{
        font-size: 3rem;
        margin: 1rem 0;
        color: ${props => props.theme.secondaryFont};

        img{
            width: 3rem;
        }
    }

    p{
        font-size: 1.25rem;
        margin: 0;
        color: ${props => props.theme.thirdFont};

        img{
            width: 1.5rem;
        }
    }

    @media screen and (max-width: 600px) {
        text-align: center;

        h2{

            span{
                display: block;
            }
    }
    }
`

const AnimateAvatar = keyframes`
    0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
`

export const Avatar = styled.img`
    grid-column: 2/3;
    grid-row: 1/2;

    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 20rem;
    height: 20rem;
    border: 3px solid ${props => props.theme.secondaryFont};
    animation: ${AnimateAvatar} 3s ease infinite;
`

export const Skill = styled.div`
    grid-column: 1/3;
    grid-row:2/3;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    h3{
        color: ${props => props.theme.secondaryFont};
        padding-right: 1rem;
        border-right: 3px solid ${props => props.theme.secondaryFont};
        margin-right: 3rem;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;

        h3{
            margin:0;
            padding: 0;
            padding-bottom: 0.5rem;
            border: 0;
            border-bottom: 3px solid ${props => props.theme.secondaryFont};
            text-align: center;
        }
    }
`

export const TechList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const TechIcon = styled.div`
    background-color: ${props => props.theme.primaryBackground};
    box-shadow: ${props => props.theme.boxShadow};
    margin: 0 1rem;
    padding: 0.5rem;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px){
        margin: 1.5rem 2.5rem;
    }
`

export const Icon = styled.img`
    width: 2.5rem;
`
