import location from "../../../assets/location.png"
import mail from "../../../assets/mail.png"
import phone from "../../../assets/phone.png"
import { Container, Title, Contacts, ContactItem, ImageWrapper, Image, ContactTitle, ContactDetail } from "./styles"

const Contact = ({theme}) => {

    return(
        <Container theme={theme}>
            <Title theme={theme}>
                <h3>Contact</h3>
                <h2>Don't be shy! Hit me up! 👇</h2>
            </Title>
            <Contacts theme={theme}>
                <ContactItem theme={theme}>
                    <ImageWrapper theme={theme}><Image src={location}/></ImageWrapper>
                    <ContactTitle theme={theme}>Location</ContactTitle>
                    <ContactDetail theme={theme}>Ho Chi Minh, Viet Nam</ContactDetail>
                </ContactItem>
                <ContactItem theme={theme}>
                    <ImageWrapper theme={theme}><Image src={mail}/></ImageWrapper>
                    <ContactTitle theme={theme}>Email</ContactTitle>
                    <ContactDetail theme={theme}>yuginovaniac@gmail.com</ContactDetail>
                </ContactItem>
                <ContactItem theme={theme}>
                    <ImageWrapper theme={theme}><Image src={phone}/></ImageWrapper>
                    <ContactTitle theme={theme}>Phone</ContactTitle>
                    <ContactDetail theme={theme}>0902647540</ContactDetail>
                </ContactItem>
            </Contacts>
        </Container>
    )
}

export default Contact;