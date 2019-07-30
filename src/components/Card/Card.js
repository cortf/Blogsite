import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
    width: 551px;
    height: 150px;
    padding: 10px;
    background-color: lavenderblush;
    border-radius: 25px;
    &:hover {
    background-color: white; // <Thing> when hovered
    padding:10px;
    border-style: outset;


      }
`   

const Card = (props) => (
    <StyledCard>
        {props.children}
    </StyledCard>
)

export default Card