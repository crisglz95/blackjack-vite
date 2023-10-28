/**
 * Esta funcion me permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de string Ejemplo: ['1H', '2D', '3C', '4S']
 * @returns {String} retorna el valor de la siguiente carta
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) 
        throw 'No hay cartas en el deck';

    const carta = deck.pop();
    return carta;
}