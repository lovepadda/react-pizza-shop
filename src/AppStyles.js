import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  height: 90%;
  
`;

export const OverLay = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 500;
`;

export const ProductList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 50px;
  height: 75px;
  line-height: 75px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;
