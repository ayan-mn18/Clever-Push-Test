import React from 'react'
import styled from 'styled-components'

const RenderButton = ({text , icon , handleOnClick }) => {
    const Button = styled.a`
        &:hover{
            color: white;
            opacity: 0.8;
        }
        border-radius: 15px;
        background-color : #0da80d;
        color: white;
        font-size: 16px;
        padding: 10px 15px;
        transition: 0.5s ease;
    `
    return (
        <Button onClick={()=>{handleOnClick()} }>
            {icon && <img src={icon} />}
            {text}
        </Button>
    )
}

export default RenderButton