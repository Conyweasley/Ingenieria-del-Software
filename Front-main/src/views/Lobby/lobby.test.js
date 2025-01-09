//test
import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import Lobby from './lobby'


//mock useNavigate
jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
  }));
  
//mock de useState
const setState = jest.fn();
const useStateMock = (initialState) => [initialState, setState];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);


describe("Lobby",() =>{ 

  test('test estructural', () => {
    render(<Lobby />);
    expect(screen.getByText("Lobby")).toBeInTheDocument(); 
    });

})