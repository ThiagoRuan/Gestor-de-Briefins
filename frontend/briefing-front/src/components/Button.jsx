import React from 'react'
import { StyledButton } from '../styles/ButtonStyle.jsx'

const Button = ({ children, onClick }) => {
    return <StyledButton onClick = { onClick }>{ children }</StyledButton>
}

export default Button