import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
    column-span: page;
    width: 100%;
    height: 150px;
    /* border-style: dotted; */
    padding: 10px;
    background-color: lavenderblush;
    border-radius: 25px;
    


`   

const Footer = (props) => (
    <StyledFooter>
        {props.children}
    </StyledFooter>
)

export default Footer