import React from 'react';
import { fireEvent, render, screen ,spyOn} from '@testing-library/react';
import '@testing-library/jest-dom'
import Barra from './Barra';

import fetchMock from 'jest-fetch-mock';

const partida = {
  partida:{name_partida: 'partidaTest',
  cantidad_jugadores: 1,
  cantidad_jugadores_maximos: 4,
  contrasena: false,
  iniciada : false,}
};

// Configura el módulo fetch mock antes de las pruebas
beforeEach(() => {
  fetchMock.enableMocks();
});

// Deshabilita el fetch mock después de las pruebas
afterEach(() => {
  fetchMock.disableMocks();
});

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'), 
  useNavigate: jest.fn(),
}));


// Crear un mock de useState
const setState = jest.fn();
const useStateMock = (initialState) => [initialState, setState];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);


describe("Barra", () => {
  test('test del componente Barra', () => {
    render(
        <Barra {...partida} />
    );
    expect(screen.getByText("partidaTest")).toBeInTheDocument();
    expect(screen.getByText("1/4")).toBeInTheDocument();
  });

  test('click en Unirse', async () => {
    const mockHandleClick = jest.fn()
    render(
      <Barra {...partida} />
    );
    
    const button = screen.getByText('Unirse');
    button.onclick = mockHandleClick;
    fireEvent.click(button);
    
    expect(mockHandleClick).toHaveBeenCalled();
  });
});
