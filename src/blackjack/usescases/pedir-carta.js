//import { crearDeck} from './crear-deck';   //+importación individuales con variables <import {variable ,funcionimportada} from <path de la funcion >>
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}