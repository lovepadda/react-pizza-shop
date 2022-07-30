import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Room,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  const Container = styled.div`
    position: relative;
    width: 100%;
    height: 10%;
    display: flex;
    margin-top: 1200px;
    background-color: black;
    @media screen and (max-width: 480px) {
    margin-top: 400vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    }
   

  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: white;
    
  `;
  
  const Logo = styled.h1`
   
   }
  `;
  
  const Desc = styled.p`
    margin: 20px 0px;
    @media screen and (max-width: 480px) {
     display: none;
   }
  `;
  
  const SocialContainer = styled.div`
    display: flex;
    @media screen and (max-width: 480px) {
     display: none;
   }

  `;
  
  const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
    
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    color: white;
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>tathastu</Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Opening Hours</Title>
          <List>
            <ListItem>Monday: 9am to 9pm</ListItem>
            <ListItem>Tuesday: 9am to 9pm</ListItem>
            <ListItem>Wednesday: 9am to 9pm</ListItem>
            <ListItem>Thursday: 9am to 9pm</ListItem>
            <ListItem>Friday: 9am to 9pm</ListItem>
            <ListItem>Saturday: 9am to 9pm</ListItem>
            <ListItem>Sunday: 9am to 9pm</ListItem>
            
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> 53 Bryant Street, NewCastle
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> contact@love.padda
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;