import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import Mano from './mano'


const	deseleccionarJugadorTest = jest.fn()

const cartasTest = [
	{id:1},
	{id:2},
	{id:3},
	{id:4},
]


describe("Mano",() =>{ 

  test('test se renderizan 4 cartas', () => {
    render(<Mano cartas={cartasTest} deseleccionarJugador={deseleccionarJugadorTest} />);

    const elementosLista = screen.queryAllByTestId("elemento-cartas");
  	expect(elementosLista).toHaveLength(4);
    });

		test('test no se renderizan cartas', () => {
			render(<Mano cartas={[]} deseleccionarJugador={deseleccionarJugadorTest} />);
			const elementosLista = screen.queryAllByTestId("elemento-cartas");
			expect(elementosLista).toHaveLength(0);
		});
		
})