import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import CrearPartida from './crearPartida'


//mock useNavigate
jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
  }));
  
//mock de useState
const setState = jest.fn();
const useStateMock = (initialState) => [initialState, setState];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);


describe("Crear Partida",() =>{ 

  test('test estructural', () => {
    render(<CrearPartida />);
    expect(screen.getByText("CREAR PARTIDA")).toBeInTheDocument(); 
    const imagen = screen.getByAltText("La Cosa logo");
    expect(imagen).toBeInTheDocument();
    });

})