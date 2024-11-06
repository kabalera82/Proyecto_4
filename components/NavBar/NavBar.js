import "./NavBar.css";

export const AddNavBar = () => {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    header.innerHTML = `
    <nav>
        <button id="botonMenu" aria-expanded="false" aria-controls="menu">
            <img src="/GontaruLogo.png" alt="Menu Icon">
        </button>  
        <ul id="menu" hidden>
            <li class="desplegable"><a href="#">Inicio</a></li>
            <li class="desplegable"><a href="#">Quienes Somos</a></li>
            <li class="desplegable"><a href="#">Galería de Proyectos</a></li>
            <li class="desplegable"><a href="#">Contacto</a></li>
        </ul>
        <h2>Construcciones y Reformas Gontaru</h2>  
        <button id="botonStilo">🌒</button>
    </nav>`;
    body.appendChild(header);

    document.getElementById('botonMenu').addEventListener('click', function() {
        const botonMenu = document.getElementById('botonMenu');
        const menu = document.getElementById('menu');
        const nav = document.querySelector('nav'); // Selecciona el elemento nav
        const isExpanded = botonMenu.getAttribute('aria-expanded') === 'true'; // aria-expanded es un string que puede ser 'true' o 'false' (no un booleano)

        // Alternar el valor de aria-expanded
        botonMenu.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
        
        // Alternar la visibilidad del menú
        menu.hidden = isExpanded;

        // Alternar la clase no-border en el nav
        if (!isExpanded) {
            nav.classList.add('no-border');
        } else {
            nav.classList.remove('no-border');
        }
    });
};
