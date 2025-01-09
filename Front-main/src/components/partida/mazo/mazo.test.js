import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import Mazo from './mazo'


const desabilitarR= jest.fn()

describe("Mazo",() =>{ 

  test('test se muestra el dorso de la carta ', () => {
    render(<Mazo habilitadoR={false} desabilitarR={desabilitarR} />);
    const imagen = screen.getByAltText("Carta");
    expect(imagen).toBeInTheDocument();
    });

  test('test boton robar carta habilitado', () => {
    render(<Mazo habilitadoR={true} desabilitarR={desabilitarR}  />);
    expect(screen.getByText("Robar Carta")).toBeInTheDocument(); ;
    });

  test('test boton robar carta desabilitado', () => {
    render(<Mazo habilitadoR={false} desabilitarR={desabilitarR}  />);
    const robarCarta = screen.queryByText("Robar Carta");
    expect(robarCarta).toBeNull();
    });
})