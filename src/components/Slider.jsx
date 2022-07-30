import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { sliderItems } from "../data";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`;



const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${props=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`;
const ImgContainer = styled.div`
height: 90%;
flex: 1;
animation: ${move} 2.5s ease infinite;
@media only screen and (max-width: 480px) {
  display: none;
`;
const Image = styled.img`
height: 100%;

`;
const InfoContainer = styled.div`
flex: 1;
padding: 50px;


`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  border-radius: 20px;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
       if(direction==="left"){
           setSlideIndex(slideIndex > 0 ? slideIndex-1 : 1 );

       }else{
           setSlideIndex(slideIndex < 1 ? slideIndex +1 : 0);
       }
    };
    return (
        
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
               <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
               <Image src={item.img} />
               </ImgContainer>
               <InfoContainer>
                   <Title>{item.title}</Title>
                   <Desc>{item.desc}</Desc>
                   <Button>ORDER NOW</Button>
               </InfoContainer>
               </Slide>
               ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
               <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider;
