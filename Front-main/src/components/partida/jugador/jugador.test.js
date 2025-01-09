import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import Jugador from './jugador'


const jugador = {id:1}
const nombreJ = "jugadorTest"
const data = {id:1}
const onClick = jest.fn()
const seleccionado =  true

describe("Jugador",() =>{ 

  test('test nombre del jugador ', () => {
    render(<Jugador jugador={jugador} nombreJ={nombreJ} data={data} onClick={onClick} seleccionado={seleccionado} />);
    expect(screen.getByText("jugadorTest")).toBeInTheDocument(); 
    });

  test('click en jugador', () => {
    render(<Jugador jugador={jugador} nombreJ={nombreJ} data={data} onClick={onClick} seleccionado={seleccionado} />);
    fireEvent.click(screen.getByText("jugadorTest"))
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(data.id);
    });

})