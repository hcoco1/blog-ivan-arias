import React from 'react';
import { StyledButton } from './CustomButtonStyles';


function CustomButton({ color, size, hoverColor, onClick, disabled, children }) {
    return (
        <StyledButton
            color={color}
            size={size}
            hoverColor={hoverColor}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
}

export default CustomButton;
