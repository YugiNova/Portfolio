import { useEffect, useRef, useState } from "react";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";
import react from "../../../assets/reactjs.svg";
import redux from "../../../assets/redux.png";
import antd from "../../../assets/antd.svg";
import avatarImg from "../../../assets/avatar.jpg";
import hand from "../../../assets/wave.png";
import location from "../../../assets/location.png";
import {
  Avatar,
  Container,
  Icon,
  Introduce,
  Skill,
  TechIcon,
  TechList,
} from "./styles";
import { motion } from "framer-motion";

const General = ({ theme }) => {
  const [avatar, setAvatar] = useState(avatarImg);

  const ListVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.1,
      },
    },
  };

  const ItemVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
    },
  };

  const handVariants = {
    waving: {
      rotate: [-30,30,-30],
      transition: {
        repeat: Infinity,
        duration: 1
      }
    }
  }

  return (
    <Container theme={theme}>
      <Avatar theme={theme} img={avatar} src="" />
      <Introduce theme={theme}>
        <h2>
          Hello, my name is <span>Nguyen Quoc Thang</span>
        </h2>
        <h1>
          Front-End React Developer <motion.img variants={handVariants} animate="waving" src={hand} />
        </h1>
        <p>
          I'm a passionate Front-end React Developer living in Ho Chi Minh city{" "}
          <img src={location} />
        </p>
      </Introduce>

      <Skill theme={theme}>
        <h3>Tech Stack</h3>
        <TechList
          variants={ListVariants}
          initial="hidden"
          whileInView="visible"
        >
          <TechIcon
            variants={ItemVariants}
            theme={theme}
          >
            <Icon src={html} />
          </TechIcon>
          <TechIcon
            variants={ItemVariants}
            theme={theme}
          >
            <Icon src={css} />
          </TechIcon>
          <TechIcon
            variants={ItemVariants}
            theme={theme}
          >
            <Icon src={js} />
          </TechIcon>
          <TechIcon
            variants={ItemVariants}
            theme={theme}
          >
            <Icon src={react} />
          </TechIcon>
          <TechIcon
            variants={ItemVariants}
            theme={theme}
          >
            <Icon src={redux} />
          </TechIcon>
          <TechIcon
            variants={ItemVariants}
            theme={theme}
          >
            <Icon src={antd} />
          </TechIcon>
        </TechList>
      </Skill>
    </Container>
  );
};

export default General;
