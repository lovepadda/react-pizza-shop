import React, { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './Styles';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      
      <HeroContent>
        
        <HeroItems>
          <HeroH1>Yummy and beautiful desserts</HeroH1>
          <HeroP>
          A local favorite for 83+ years. Featuring our famous DeAngelis donuts ice
		  cream and our cakes. Full menu offered all day and late night. Full bar with
		  entertainment on weekends.
         </HeroP>
          <HeroBtn>ORDER NOW</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;