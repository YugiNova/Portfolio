import { Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../../redux/selector";
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"
import { Icon, ThemeButton } from "./styles";
import {ToggleTheme} from "../../redux/action";


const ToggleButton = () => {
    const [icon,setIcon] = useState(moon);
    const dispatch = useDispatch();
    const theme = useSelector(Theme);

    const lightTheme = {
        primaryBackground:"#fff",
        secondaryBackground:"#f9f9f9",
        itemBackground:"#fff",
        primaryFont: "#27E1C1",
        secondaryFont: "#2d2e32",
        thirdFont: "#767676",
        boxShadow: "0 0 10px rgba(0,0,0,.09)",
    }

    const darkTheme = {
        primaryBackground:"black",
        secondaryBackground:`linear-gradient(to right, #ff00cc, #333399)`,
        itemBackground:`linear-gradient(to right, #ff00cc, #333399)`,
        primaryFont: "#27E1C1",
        secondaryFont: "white",
        thirdFont: "#f9f9f9",
        boxShadow: "0 0 10px rgba(0,0,0,.09)",
    }

    const ToggleColor = () => {
        if(theme.primaryBackground === "black"){
            dispatch(ToggleTheme(lightTheme))
            setIcon(moon);

        }
        else{
            dispatch(ToggleTheme(darkTheme))
            setIcon(sun);
        }
        
    }


    return(
        <ThemeButton theme={theme} onClick={ToggleColor}>
            <Icon src={icon}/>
        </ThemeButton>
    )
}

export default ToggleButton;