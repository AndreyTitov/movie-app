/**
 * @file
 * Contains Carousel element styles.
 */
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const MultiCarousel = styled(Carousel)`
  .react-multi-carousel-item {
    margin-right: 20px;
  }

  .react-multiple-carousel__arrow {
    background: ${(props) => props.theme.colors.mainBrandColor}BB;
  }

  .react-multiple-carousel__arrow--right {
    right: calc(0% + 1px);
  }

  .react-multiple-carousel__arrow--right::before {
    color: ${(props) => props.theme.colors.darkPurple};
  }

  .react-multiple-carousel__arrow--left {
    left: calc(0% + 1px);
  }

  .react-multiple-carousel__arrow--left::before {
    color: ${(props) => props.theme.colors.darkPurple};
  }
`;
