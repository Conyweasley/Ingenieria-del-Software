import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import Partida from './partida'


//mock useNavigate
jest.mock('react-router', () => ({
    useNavigate: () => jest.fn(),
  }));
  
//mock de useState
const setState = jest.fn();
const useStateMock = (initialState) => [initialState, setState];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);


describe("Partida",() =>{ 

  test('test estructural', () => {
    render(<Partida />);
    const tablero = screen.queryAllByTestId("Tablero");
  	expect(tablero).toHaveLength(1);
    });

})