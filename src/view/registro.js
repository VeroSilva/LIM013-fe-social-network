export default () => {
    const viewRegistro =`
    <h1> Hola mundo </h1>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewRegistro;

    return divElem;
}