import React from "react"
import styled from "styled-components"

const StyledButton = styled.div`
    width: 100%;
    height: 2rem;
    button{
        height:100%;
        width:100%;
        border-radius:25px;
    }
    border-radius: 2px;
    &:hover {
    /* background-color: black; // <Thing> when hovered */


      }
`   

const Button = (props) => (
    <StyledButton>
        <button {...props}>Show More</button>
    </StyledButton>
)

export default Button