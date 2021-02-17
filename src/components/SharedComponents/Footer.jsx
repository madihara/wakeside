import React from 'react'
import styled from 'styled-components'
import image from '../../assets/photos/pexels-abi-greer-5589886.jpg'
import dealerIcon from '../../assets/photos/certifieddealership.png'

import * as palette from '../../variables/Variables'

import {Title, SubTitle, SubHeading, Text} from '../../variables/Variables'
import {Link} from 'gatsby'

import {FaFacebook} from 'react-icons/fa'
import {AiOutlineInstagram, AiTwotonePhone, AiOutlineMail} from 'react-icons/ai'


const Footer = () => {
  return(
    <Box>
      <PictureBox>
        <Image src={image} alt=""/>
      </PictureBox>
      <InfoBox>
        <PaddingSection>
          <List>
          <Title>Visit Us</Title>
          <Text>51305 ST ROAD 19 NORTH <br></br>ELKHART, IN 46514</Text>
          <SubTitle style={{margin: "0px", padding: "0px"}}>Hours</SubTitle>
          <Text>Tuesday-Friday 10-5 <br></br> Saturday 9-1</Text>
          </List>
          <List>
            <Title>Connect</Title>
            <Icons>
              <FaFacebook/>
              <AiOutlineInstagram/>
              <AiOutlineMail />
              <AiTwotonePhone />
            </Icons>
          </List>

        </PaddingSection>
        <PaddingSection style={{borderBottom: "none", padding: "0"}}>
          <List>
            <SubHeadingBold>Boats</SubHeadingBold>
            <StyledLink>Nautique</StyledLink>
            <StyledLink>Barletta</StyledLink>
            <StyledLink>South Bay</StyledLink>
            <StyledLink>Inventory</StyledLink>
          </List>
          <List>
            <SubHeadingBold>Services</SubHeadingBold>
            <StyledLink>Service Department</StyledLink>
            <StyledLink>Parts Request</StyledLink>
            <StyledLink>Restoration</StyledLink>
            <StyledLink>Seasonal Services</StyledLink>
          </List>
          <List>
            <SubHeadingBold>Products</SubHeadingBold>
            <StyledLink>ProShop</StyledLink>
          </List>
        </PaddingSection>
        <PaddingSection style={{ padding: "20px, 0"}}>
        <List>
            <SubHeadingBold>Resources</SubHeadingBold>
            <StyledLink>Events</StyledLink>
            <StyledLink>Awards</StyledLink>
            <StyledLink>Our Team</StyledLink>
            <StyledLink>Careers</StyledLink>
            <StyledLink>Our Commitment</StyledLink>
          </List>
          <DealerIcon src={dealerIcon} />

        </PaddingSection>
        <Copyright>
        <Text>&#169; {(new Date().getFullYear())} WakeSide Marine</Text>
        </Copyright>
        <List></List>
      </InfoBox>
    </Box>
  )
}

const Box = styled.div`
  height: 700px;
  background: ${palette.MAIN_COLOR}; 
  display: flex;
`
const PictureBox = styled.section`
  width: 50%; 
  background: red;
  position: relative;
  height: 100%;
`
const InfoBox= styled.section`
  width: 50%;
  
`
const PaddingSection = styled.section`
  margin: 30px 30px;
  padding: 30px 0;
  position: relative;
  border-bottom: 2px solid #C4DAE9;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
` 
const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`
const List = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`
const SubHeadingBold = styled(SubHeading)`
  color: ${palette.SECONDARY_COLOR};
  font-weight: 500;
  padding-bottom: 10px;
`

const Icons = styled.section`
  display:flex;
  flex-flow: row wrap;
  font-size: 1.3rem;
  justify-content: space-around;
  cursor: pointer;
  padding: 5px 0;
  
`

const StyledLink = styled(Link)`
  font-weight: 400;
  color: ${palette.DARK_GREY};
  font-size: 0.8rem;
  cursor: pointer;
  padding: 1px 0;

  :hover{
    color: white;
  }
`

const Copyright = styled.section`
  display: flex;
  justify-content: center;
  letter-spacing: .1px;
  
`
const DealerIcon = styled.img`
  height: 100px;
  margin-right: 150px;
`
export default Footer;