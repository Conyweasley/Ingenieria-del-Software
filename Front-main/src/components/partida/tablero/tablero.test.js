import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import Tablero from './tablero'


const desabilitarR= jest.fn()


describe("Tablero",() =>{ 

  test('test estructural tablero ', () => {
    render(<Tablero sentido={1} habilitadoR={true} desabilitarR={desabilitarR}/>);
    const icon = screen.queryAllByTestId("CachedIcon");
    expect(icon).toHaveLength(1);
    const mazo = screen.queryAllByTestId("Mazo");
    expect(mazo).toHaveLength(1);
    });
})