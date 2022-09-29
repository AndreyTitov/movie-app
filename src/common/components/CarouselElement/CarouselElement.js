/**
 * @file
 * Contains carousel element.
 */

import React from 'react';
import { MultiCarousel } from './CarousleElement.style';

const CarouselElement = (props) => {
  const { children } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <MultiCarousel renderButtonGroupOutside={true} responsive={responsive}>
      {children}
    </MultiCarousel>
  )
};

export default CarouselElement;
