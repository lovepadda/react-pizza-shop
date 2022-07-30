import styled from 'styled-components';
import ImgBg from '../images/sweets.jpg';


export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  position: relative;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  @media screen and (max-width: 480px) {
    display: flex;
    
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  width: clamp(100%,650,100%);
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	margin-left: 50px;
	margin-top: 100px;
	align-items: flex-start;
	padding: 1rem 3rem;
	width: 700px;
	color:white;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 80%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    }
`;

export const HeroH1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  letter-transform: uppercase;
	margin-bottom: 2rem;
	letter-spacing: 3px;
	line-height: 1;
  @media screen and (max-width: 480px) {
     display: flex;
  }
    
`;

export const HeroP = styled.p`
  /* font-size: clamp(2rem, 2.5vw, 3rem); */
	font-size: clamp(1rem, 1.2rem, 1.4rem);
	/* font-size: clamp(0.5rem, 1.2rem, 2rem); */
	/* font-size: 1rem; */
	margin-bottom: 2rem;
	line-height: 1.3;
  font-family: 'Open Sans', sans-serif;
  @media screen and (max-width: 480px) {
    display: flex;
     justify-content: center;
     align-items: center;
      
    `;

export const HeroBtn = styled.button`
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