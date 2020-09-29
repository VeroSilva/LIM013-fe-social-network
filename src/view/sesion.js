export default () => {
    const viewSesion =`
    <h2 class="text-center">¡Bienvenido a nuestra pagina!</h2>
    <figure class="text-center">
     <img class=image" src="http//olegif.com/bin/gifs/00/39/56.gif" alt="Inicio de sesion">
    </figure>`

    const divElem = document.createElement('div')
    divElem.innerHTML = viewSesion;

    return divElem;
}