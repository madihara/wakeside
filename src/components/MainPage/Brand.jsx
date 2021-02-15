import React from 'react'
import styled from 'styled-components'
import nautique from '../../variables/paragong23.jpg'

import {StyledLink} from '../SharedComponents/Navigation'

import {Title, SubTitle, SubHeading, Text} from '../../variables/Variables'

import * as palette from '../../variables/Variables'

import paragon23 from '../../assets/photos/paragon-23profile.png'
import paragon25 from '../../assets/photos/paragong25.png'

const Brand = (props) => {
  return(
    <Section>
      <InfoBox>
        Wkaeside marine is your leading retailer for boats
      </InfoBox>
       <InfoBox>
        <TextBox>
        <Letter>{props.letter}</Letter>
          <SubHeading>{props.title}</SubHeading>
          <SubTitle>Sporting Just Got Better</SubTitle>
          <Text>{props.text}</Text>
          <Link >Shop Now</Link>
          
          </TextBox>
          
        <Image src={props.image1} />
        
      </InfoBox>
    <Box>
      <Title>{props.title}</Title>
      <SubHeading>Models</SubHeading>
      <InfoBox>
        <List>
          <SubTitle>{props.subtitle1}</SubTitle>
          <Model src={paragon23} />
          <SubHeading>G23 Paragon</SubHeading>
          <Model src={paragon25}/>
            <SubHeading>G25 Paragon</SubHeading>
            <SubHeading>Paragon G23</SubHeading>
            <SubHeading>Paragon G23</SubHeading>
        </List>
        <List>
          <SubTitle>{props.subtitle2}</SubTitle>
          <SubHeading>Paragon G23</SubHeading>
            <SubHeading>Paragon G23</SubHeading>
            <SubHeading>Paragon G23</SubHeading>
            <SubHeading>Paragon G23</SubHeading>
        </List>
        <SubTitle>{props.subtitle3}</SubTitle>
        {props.subtitle4 ? <SubTitle>{props.subtitle4}</SubTitle> : null} 
        {props.subtitle5 ?<SubTitle>{props.subtitle5}</SubTitle> : null}
      </InfoBox>
      <InfoBox>
        
      </InfoBox>
    </Box>
      {/* <InfoBox>
        <TextBox>
        <Letter>N</Letter>
          <SubTitle>Sporting Just Got Better</SubTitle>
          <Text>{props.text}</Text>
          <Link >Shop Now</Link>
          
          </TextBox>
          
        <Image src={props.image1} />
        
      </InfoBox> */}
      </Section>
  )
}

const Section = styled.div`
  padding: 3rem 0;
  margin:  3rem 10rem;
  border-bottom: 2px solid #D0D0D0;
  position: relative;
`

const Box = styled.div`
 /* margin: 5rem 0; */
`


const InfoBox = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 3rem 0;

`
const TextBox=styled.section`
  /* margin: 0 5rem 0 10rem; */
  position: relative;
  height: 100%;
  margin-right: 10px;
`
const Letter = styled.h1`
  font-size: 35rem;
  padding: 0;
  margin: 0;
  position: absolute;
  left: -15rem;
  top: -8rem;
  color: #fff;
  z-index: 1;
`

const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Image = styled.img`
  margin-right: -200px;
  height: 400px;
  position: relative;
  z-index: 3;
`
const Link = styled(StyledLink)`
  margin: 0;
  padding: 0;
  z-index:3;
  position: relative;

  ::before{
    display: inline-block;
    content: "";
    border-top: .3rem solid ${palette.MAIN_COLOR};
    width: 4rem;
    margin: 0 1rem 0 0;
    transform: translateY(-2px);
  }
`
const Model = styled.img`
  height: 100px;
`




export default Brand;