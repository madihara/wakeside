import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import * as palette from '../../variables/Variables'

const Navigation = () => {

  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(({ prevPos, currPos, wait }) => {
    const isShow = currPos.y > prevPos.y
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll],
      false,
      false,
      300
  )
  return(
    
    <NavBar show={hideOnScroll}>
      <LogoBox>Wakeside</LogoBox>
      <Links>
        <StyledLink>
          Nautique
        </StyledLink>
        <StyledLink>
          Barletta
        </StyledLink>
        <StyledLink>
          South Bay
        </StyledLink>

      </Links>
      <Links>
        <StyledLink>Events</StyledLink>
        <StyledLink>Team</StyledLink>
        <StyledLink>Pro Shop</StyledLink>
        <StyledLink>Careers</StyledLink>
        <StyledLink>Contact</StyledLink>
      </Links>
    </NavBar>
  
  )
}


const NavBar = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${palette.MAIN_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
  font-size: .7rem;
  z-index: 100;

`

const LogoBox = styled.section`
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 20px;
`
const Links = styled.section`
 
`
export const StyledLink = styled(Link)`
   margin: 0 1rem;
   cursor: pointer;

   :hover{
     color: white;
   }
`

export default Navigation;