import _, { defaults } from 'underscore';
// export const a = 'holamundo'; //+exportación individual
/**
 * esta funcion crea un nuevo deck
 * @param   {Array  <String>} tiposEspeciales ejemplo ['A','J','Q','K'];
 * @param   {Array  <String>} tiposDeCarta ejemplo  ['C','D','H','S'];
 * @returns {Array  <String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if(! tiposDeCarta || tiposDeCarta.length === 0 ) throw Error('Tipos de carta  es obligatorio como un arreglo de estring')
    if(! tiposEspeciales || tiposEspeciales.length === 0 ) throw Error('Tipos de carta  es obligatorio como un arreglo de estring')
    
    let deck =[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}
// export default crearDeck;//+ exportación por defecto