import styled from 'styled-components';

// Define a styled button with customizable properties

export const StyledButton = styled.button`
  background-color: ${props => props.color || 'blue'};
  font-size: ${props => props.size || '1rem'};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.hoverColor || 'darkblue'};
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;