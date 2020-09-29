export default () => {
    const viewSesion =`
    <h2 class="text-center">¡Página no encontrada!</h2>
    <p>No se encuentra la url</p>`
    

    const divElem = document.createElement('div')
    divElem.innerHTML = viewSesion;

    return divElem;
}