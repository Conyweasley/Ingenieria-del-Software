import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import MenuPrincipal from './menuPrincipal'


//mock useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

//mock de useState
const setState = jest.fn();
const useStateMock = (initialState) => [initialState, setState];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);

const onClick = jest.fn();

describe('Test del menu principal', () => {
 
  test('test estructural del menu principal', () => {
    render(<MenuPrincipal />); 
    const foundElement = screen.getByText((content, element) => {
      // Comprueba si el contenido del elemento incluye "Partidas encontradas:"
      return content.includes('Partidas encontradas:');
    });
  
    // Verifica que el elemento se encuentre en el DOM
    expect(foundElement).toBeInTheDocument();
    expect(screen.getByText('Crear partida')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
  });
  
  test('test click crear partida', () => {
    const mockHandleClick = jest.fn();
    render(<MenuPrincipal />); 
    const button = screen.getByText('Crear partida');
    button.onclick = mockHandleClick;
    fireEvent.click(button);
    
    expect(mockHandleClick).toHaveBeenCalled();
  });
  
});