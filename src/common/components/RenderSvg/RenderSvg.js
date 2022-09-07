/**
 * @file
 * Contains render svg render
 */
import React from 'react'
import { render } from 'react-dom'
import { ReactSVG } from 'react-svg'

const RenderSVG = () => {
  return (
    render(<ReactSVG src="https://fpf-assets.armenotech.com/wiretransfer-icon.svg" />, document.getElementById('root'))
  )
};

export default RenderSVG;
