import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent,screen,render} from '@testing-library/react'
import Carta from './carta'


const data = {id:1}
const onClick = jest.fn()
const seleccionada =  true

describe("Carta",() =>{ 

  test('test estructura del componente carta', () => {
    render(<Carta data={data} onClick={onClick} seleccionada={seleccionada} />);

    const imagen = screen.getByAltText("Carta");
    expect(imagen).toBeInTheDocument();
    });

  test('click en Carta', () => {
    render(<Carta data={data} onClick={onClick} seleccionada={seleccionada} />);
    const imagen = screen.getByAltText("Carta");
    fireEvent.click(imagen);
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(data.id);
    });
})