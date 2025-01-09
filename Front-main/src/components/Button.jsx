import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

// Estilizamos el botón usando styled-components
const StyledButton = styled.button`
background-color: #919191;
color: #fff;
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
margin: 5px; /* Agregamos un espacio de 5px entre los botones */

&:hover {
  background-color: #0056b3;
}
`;

// Componente de botón reutilizable
function Button({ label,onClick}) {
  //const nav = useNavigate();
  return (
    <StyledButton onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default Button;