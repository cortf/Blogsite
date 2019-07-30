import React from "react"
import styled from "styled-components"

const StyledHeader = styled.div`
    column-span: page;
    width: 100%;
    height: 150px;
    padding: 10px;
    background-color: lavenderblush;
    border-radius: 25px;
  padding: 20px;


      
`   

const Header = (props) => (
    <StyledHeader>
        {props.children}
    </StyledHeader>
)

export default Header