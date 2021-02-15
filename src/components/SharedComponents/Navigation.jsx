import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import * as palette from '../../variables/Variables'

const Navigation = () => {
  return(
    
    <NavBar>
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
  height: 90px;
  width: 95%;
  position: absolute;
  top: 0;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2px 20px;
  font-size: .7rem;
  z-index: 10000;
`

const LogoBox = styled.section`
  font-size: 1.1rem;
  text-transform: uppercase;
`
const Links = styled.section`
 
`
export const StyledLink = styled(Link)`
   margin: 0 1rem;
   cursor: pointer;
`

export default Navigation;