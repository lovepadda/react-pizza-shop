import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  
`;

export const CardImage = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
`;

export const CardBody = styled.div`
  padding: 5px;
  margin-top: 5px;
`;

export const CardTitle = styled.span`
  font-size: bold;
  font-weight: 700;
  margin: 5px;
`;

export const CardPrice = styled.span`
  font-size: bold;
  font-weight: 600;
  margin: 5px;
  padding: 3px 9px;
`;

export const OverlayWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  transition: all ease-in-out 0.3s;
  z-index: 200;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 65px;
  color: #ffffff;
`;
