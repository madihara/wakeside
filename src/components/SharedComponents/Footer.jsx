import React from 'react'
import styled from 'styled-components'
import image from '../../variables/paragong23.jpg'

import * as palette from '../../variables/Variables'

import {Title} from '../../variables/Variables'

const Footer = () => {
  return(
    <Box>
      <PictureBox>
        <img src={image} alt=""/>
      </PictureBox>
      <InfoBox>
        <Title>Contact us</Title>
      </InfoBox>
    </Box>
  )
}

const Box = styled.div`
  height: 600px;
  background: ${palette.MAIN_COLOR}; 
  display: flex;
`
const PictureBox = styled.section`
  width: 50%; 
  background: red;
`
const InfoBox= styled.section`
  width: 50%;
`

export default Footer;