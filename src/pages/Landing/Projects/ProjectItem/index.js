import {
  Container,
  Info,
  Name,
  Detail,
  TechUse,
  WebLink,
  WebImage,
  Image,
  CodeLink,
} from "./styles";
import webtest from "../../../../assets/webtest1.png";
import { useSelector } from "react-redux";
import { Theme } from "../../../../redux/selector";
import { GithubOutlined, DesktopOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import coinbase from "../../../../assets/coinbase.png";
import dashboard from "../../../../assets/dashboard.png";
import gearvn from "../../../../assets/gearvn.png";
import { useEffect, useState } from "react";

const ProjectItem = ({ layout, order, project }) => {
  const theme = useSelector(Theme);
    const [imageSize, setImageSize] = useState();

  const image = [
    {
      name: "coinbase",
      url: coinbase,
    },
    {
      name: "dashboard",
      url: dashboard,
    },
    {
      name: "gearvn",
      url: gearvn,
    },
  ];

  const getProjectImage = (imageName) => {
    const result = image.filter((item) => {
      return item.name === imageName;
    });
    return result[0].url;
  };

  const containerOddVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "ease",
        delay: 0.25,
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const containerEvenVariants = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "ease",
        delay: 0.25,
        duration: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const childrenVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(()=>{
    console.log(imageSize);
  },[imageSize])

  return (
    <Container
      variants={order === "odd" ? containerOddVariants : containerEvenVariants}
      initial="hidden"
      whileInView="visible"
      layout={layout}
      theme={theme}
    >
      <Info layout={layout} theme={theme}>
        <Name variants={childrenVariants} theme={theme}>
          {project.name}
        </Name>
        <Detail variants={childrenVariants} theme={theme}>
          {project.desc}
        </Detail>
        <TechUse theme={theme}>
          {project.tech.map((item) => {
            return <motion.h2 variants={childrenVariants}>{item}</motion.h2>;
          })}
        </TechUse>
        <WebLink theme={theme}>
          <CodeLink
            href={project.code}
            variants={childrenVariants}
            theme={theme}
          >
            Code <GithubOutlined />
          </CodeLink>
          <CodeLink
            href={project.demo}
            variants={childrenVariants}
            theme={theme}
          >
            Live Demo <DesktopOutlined />
          </CodeLink>
        </WebLink>
      </Info>
      <WebImage layout={layout} theme={theme}>
        <Image src={getProjectImage(project.image)} />
      </WebImage>
    </Container>
  );
};

export default ProjectItem;
