/**
 * @file
 * Contains Youtube iframe component.
 */
import React from 'react';
import { YoutubeIframeWrapper } from './YoutubeIframe.style';


const YoutubeIframe = (props) => {
  const { width, height, src } = props;

  return (
    <YoutubeIframeWrapper>
      <iframe width={width} height={height} src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen/>
    </YoutubeIframeWrapper>
  )
};

export default YoutubeIframe;
