import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import  Login  from './login';


//mock del useNavigate
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));
// Crear un mock de useState
const setState = jest.fn();
const useStateMock = (initialState) => [initialState, setState];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);

describe('Test de inicio de sesion', () => {

  test('test estructural del inicio de sesion', ()  => {
    render(<Login />);
    expect(screen.getByText("La Cosa")).toBeInTheDocument(); 
  })
});
