import { Button } from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ThemeButton = styled(motion.Button)`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${props => props.theme.primaryBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${props => props.theme.boxShadow};
`

export const Icon = styled.img`
    width: 1.25rem;
`