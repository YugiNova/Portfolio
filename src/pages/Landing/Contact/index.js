import location from "../../../assets/location.png"
import mail from "../../../assets/mail.png"
import phone from "../../../assets/phone.png"
import facebook from "../../../assets/facebook.svg"
import { Container, Title, Contacts, ContactItem, ImageWrapper, Image, ContactTitle, ContactDetail } from "./styles"
import { motion } from "framer-motion";
const Contact = ({theme}) => {

    const contactVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25
            }
        }
    }

    const contactItemVariants = {
        hidden: {
            opacity: 1,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    }

    const handVariants = {
        point: {
            y: [-10, 10, -10],

            transition: {
                repeat: Infinity,
                duration: 1
            }
        }
    }

    return(
        <Container theme={theme}>
            <Title theme={theme}>
                <h3>Contact</h3>
                <h2>Don't be shy! Hit me up!<motion.div variants={handVariants} animate="point">👇</motion.div></h2>
            </Title>
            <Contacts variants={contactVariants} initial="hidden" whileInView="visible" theme={theme}>
                <ContactItem variants={contactItemVariants} theme={theme}>
                    <ImageWrapper theme={theme}><Image src={location}/></ImageWrapper>
                    <ContactTitle theme={theme}>Location</ContactTitle>
                    <ContactDetail theme={theme}>Ho Chi Minh, Viet Nam</ContactDetail>
                </ContactItem>
                <ContactItem variants={contactItemVariants} theme={theme}>
                    <ImageWrapper theme={theme}><Image src={mail}/></ImageWrapper>
                    <ContactTitle theme={theme}>Email</ContactTitle>
                    <ContactDetail theme={theme}>yuginovaniac@gmail.com</ContactDetail>
                </ContactItem>
                <ContactItem variants={contactItemVariants} theme={theme}>
                    <ImageWrapper theme={theme}><Image src={phone}/></ImageWrapper>
                    <ContactTitle theme={theme}>Phone</ContactTitle>
                    <ContactDetail theme={theme}>0902647540</ContactDetail>
                </ContactItem>
                <ContactItem variants={contactItemVariants} theme={theme}>
                    <ImageWrapper theme={theme}><Image src={facebook}/></ImageWrapper>
                    <ContactTitle theme={theme}>Facebook</ContactTitle>
                    <ContactDetail theme={theme}>Yugi Nova</ContactDetail>
                </ContactItem>
            </Contacts>
        </Container>
    )
}

export default Contact;