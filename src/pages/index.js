import React from "react"
import styled from 'styled-components'

import Brand from '../components/MainPage/Brand'
import Footer from '../components/SharedComponents/Footer'
import Hero from '../components/MainPage/Hero'
import Navigation from '../components/SharedComponents/Navigation'


import '../styles/global.css'


import image1 from '../variables/nautiqueimage.jpg'

export default function Home() {
  return (
    <>
      <Hero/>
      <Brand
        title='Nautique'
        subtitle1='Wake &amp; Surf'
        subtitle2='Multi-Sport'
        subtitle3='Ski'
        image1={image1}
        text="Nautique's designers are fanatics about providing you with the best possible on-water experience. When you step aboard a Nautique, decisions have been made at every turn so that the ergonomics, aesthetics and functionality of each component are working in your favor. All this, so that fun-filled days on the water for your friends and family are easily within reach. Nontheless, Nautique customers demand a “best in class” boat and that means power from an engine from PCM that utilizes the latest technology and delivers outstanding performance and incomparable reliability."
        letter='N'
      />
      {/* <Brand
        title='Barletta'
        subtitle1='L-Class'
        subtitle2='Corsa'
        subtitle3='C-Class'
        subtitle4='Slide-Toon'
        letter='B'
      />
      <Brand
        title='South Bay'
        subtitle1='CB'
        subtitle2='LE'
        subtitle3='200'
        subtitle4='500'
        subtitle5='Sport'
        letter='S'
      /> */}
      
      <Footer />
    </>
  )
}
