import React from 'react'
import styled from 'styled-components'
import Navigation from '../SharedComponents/Navigation'
import image from '../../variables/wakesideimage.jpg'

import * as palette from '../../variables/Variables'

const Hero = (props) => {
  return(
    <HeroBox>
      <Image src={image} />
      <Navigation />
    </HeroBox>
  )
}


const HeroBox = styled.div`
  height: 350px;
  background: ${palette.MAIN_COLOR};
  display: flex;
  justify-content: space-around;
  margin-bottom: 8rem;
  width: 100%;
  position: relative;
`
const Image = styled.img`
  height: 480px;
  max-width: 74vw;
  object-fit: cover;
 
`

export default Hero;