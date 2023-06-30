import { crearCartaHTML } from "./crear-carta-Hrml";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
// turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck = [] ) => {

    let puntosComputadora = 0;
    if (!puntosMinimos) throw new Error('Puntos minimos son nesesarios');
    if (!puntosHTML) throw new Error('Aegumento PuntosHTML son nesesarios');
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta =crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}