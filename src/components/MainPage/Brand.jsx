import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import {StyledLink} from '../SharedComponents/Navigation'

import {Title, SubTitle, SubHeading, Text} from '../../variables/Variables'

import * as palette from '../../variables/Variables'

import paragon23 from '../../assets/photos/paragon-23profile.png'
import paragon25 from '../../assets/photos/paragong25.png'
import SANg21 from '../../assets/photos/g21superAirNautique.png'
import SANg23 from '../../assets/photos/g23superairnautique.png'
import SANg25 from '../../assets/photos/superairg25.png'
import SAN210 from '../../assets/photos/superairnautique210.png'
import SAN230 from '../../assets/photos/superairnautique230.png'

const Brand = (props) => {
  return(
    <Section>
       <InfoBox>
        <TextBox>
        <Letter>{props.letter}</Letter>
          <SubHeading>{props.title}</SubHeading>
          <SubTitle>Sporting Just Got Better</SubTitle>
          <Text>{props.text}</Text>
          <ShopLink >Shop Now</ShopLink>
          
          </TextBox>
          
        <Image src={props.image1} />
        
      </InfoBox>
    <Box>
      <SubTitle>{props.subtitle1}</SubTitle>
      <SubHeading>Models</SubHeading>
{/*      
      <SubTitle>{props.subtitle1}</SubTitle> */}
        <List>
          <Item>
            <Model src={paragon23} />
            <SubHeading>G23 Paragon</SubHeading>
          </Item>
          <Item>
            <Model src={paragon25}/>
            <SubHeading>G25 Paragon</SubHeading>
           </Item>
           <Item>
            <Model src={SANg21} />
            <SubHeading>G21</SubHeading>
          </Item>
          <Item>
            <Model src={SANg23} />
            <SubHeading>G23</SubHeading>
          </Item>
          <Item>
            <Model src={SANg25} />
            <SubHeading>G25</SubHeading>
          </Item>
          <Item>
            <Model src={SAN210} />
            <SubHeading>210</SubHeading>
          </Item>
          <Item>
            <Model src={SAN230} />
            <SubHeading>230</SubHeading>
          </Item>
        </List>
    
    
        {/* <List>
          <SubTitle>{props.subtitle2}</SubTitle>
          <SubHeading>Paragon G23</SubHeading>
            <SubHeading>Paragon G23</SubHeading>
            <SubHeading>Paragon G23</SubHeading>
            <SubHeading>Paragon G23</SubHeading>
        </List>
        <SubTitle>{props.subtitle3}</SubTitle>
        {props.subtitle4 ? <SubTitle>{props.subtitle4}</SubTitle> : null} 
        {props.subtitle5 ?<SubTitle>{props.subtitle5}</SubTitle> : null}
      
      <InfoBox>
        
      </InfoBox> */}
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
  flex-flow: row wrap;
  align-items: space-between;
  justify-content: space-around;
`

const Image = styled.img`
  margin-right: -200px;
  height: 400px;
  position: relative;
  z-index: 3;
`
const ShopLink = styled(StyledLink)`
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
const Item = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition-duration: .5s;

  :hover{
    transform: scale(1.1);
  }
`
const Model = styled.img`
  height: 100px;
`




export default Brand;