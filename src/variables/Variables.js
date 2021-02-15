import styled from 'styled-components'


export const MAIN_COLOR = '#d2e9f7'
export const SECONDARY_COLOR = '#3E5769'
export const DARK_GREY = '#6D6D6D'

export const Title = styled.h1`
  padding: 2px 0;
  margin: 0;
  font-size: 2rem;
`

export const SubTitle = styled.h2`
  position: relative;
  z-index: 3;
  padding: 0;
  display: block;
  margin-top: 1rem;
  
`

export const SubHeading = styled.h3`
margin: 0px;
font-size: .9rem;
color: ${DARK_GREY};
font-weight: 400;
/* outline: 2px solid red; */
position: relative;
z-index: 3;
display: flex;
justify-content: flex-start;
align-items: flex-start;
`
export const Text = styled.p`
  color: ${DARK_GREY};
  font-weight: 400;
  font-size: 0.8rem;
  position: relative;
  z-index: 3;
`
