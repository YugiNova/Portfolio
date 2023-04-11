import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.primaryBackground};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    box-shadow: 0 0 10px rgba(0,0,0,.09);

    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;

    @media screen and (max-width: 600px) {
        padding: 1rem 2rem;
    }
`

export const Logo = styled.a`
    color: ${props => props.theme.primaryFont};
    font-size: 2rem;
    font-weight: bold;
`

export const NavList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;

    @media screen and (max-width: 600px) {
        transition: 0.5s ease;
        height: ${props => props.display};
        width: 100%;
        position:absolute;
        flex-direction: column;
        top:100%;
        left:0;
        background-color: ${props => props.theme.primaryBackground};
        overflow: hidden;
    }
`

export const NavItem = styled(NavLink)`
    text-decoration: none;
    margin:0.5rem 0 0.5rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.theme.secondaryFont};
    padding-bottom: 0.2rem;
    border-bottom: 0.2rem solid transparent;
    transition: 0.5s ease;

    :hover{
        color: ${props => props.theme.primaryFont};
        border-bottom: 0.2rem solid ${props => props.theme.primaryFont};
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 1.5rem;
        border:0;
        border-top: 0.1rem solid ${props => props.theme.primaryFont};
    }
`

export const MenuButton = styled.button`
    font-size: 1rem;
    background-color: transparent;
    border: none;

    display: flex;
    justify-content:center;
    align-items: center;
    display: none;

    svg{
        color: ${props => props.theme.secondaryFont};
        font-size: 1.5rem;


        :active{
            color: ${props => props.theme.primaryFont};
        }

        :focus{
            color: ${props => props.theme.primaryFont};
        }
    }

    @media screen and (max-width: 600px) {
        display: flex;
    }
`

export const ThemeButton = styled.div`
    position: absolute;
    right: 1.5rem;
    top: 150%;
`