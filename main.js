import './style.css';
import { AddNavBar } from './components/NavBar/NavBar.js';
import { AddFooter } from './components/Footer/Foot.js';
import { AddCuerpo } from './components/Main/cuerpo.js';
import { AddHome } from './pages/home/home.js';
import { AddProjects } from './pages/proyects/trabajos.js';
import { projects } from './pages/proyects/trabajos.js';

AddNavBar();
AddCuerpo();
AddFooter();
AddHome();
AddProjects();



const styleLight = {
    '--primero-dinamic': '#65DEF1',
    '--segundo-dinamic': '#A8DCD1',
    '--tercero-dinamic': '#EBE971',
    '--cuarto-dinamic': '#F96900',
    '--quinto-dinamic': '#F17F29',
    '--color': 'White'
};

const styleDark = {
    '--primero-dinamic': '#F5007A',
    '--segundo-dinamic': '#C11C7A',
    '--tercero-dinamic': '#B6646E',
    '--cuarto-dinamic': '#5C3E4F',
    '--quinto-dinamic': '#3B0414',
    '--color': 'Grey'
};

document.addEventListener('DOMContentLoaded', function() {
    // Aplicar los estilos iniciales al cargar la página
    applyStyles(styleLight);

    document.getElementById('botonStilo').addEventListener('click', function() {
        const botonStilo = document.getElementById('botonStilo');
        
        // Alternar el texto del botón y aplicar los estilos correspondientes
        if (botonStilo.innerText === "☀️") {
            botonStilo.innerText = "🌒";
            applyStyles(styleLight);
        } else {
            botonStilo.innerText = "☀️";
            applyStyles(styleDark);
        }
    });
});

function applyStyles(styles) {
    for (const property in styles) { // Recorrer todas las propiedades del objeto styles y aplicarlas al documento HTML
        document.documentElement.style.setProperty(property, styles[property]); 
        /* document.documentElement es el documento HTML y setProperty es un método que permite cambiar el valor de una propiedad CSS*/
    }
}
