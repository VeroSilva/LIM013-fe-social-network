// Este es el punto de entrada de tu aplicacion

import { changeView } from './view-controler/router.js'

const init = () => {
    changeView(window.location.hash)
    window.addEventListener('hashchange', () => changeView(window.location.hash))

}

console.log("Estoy probando mi nueva rama")

window.addEventListener('load', init)
    /* myFunction(); */