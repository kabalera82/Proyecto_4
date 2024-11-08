import './style.css';
import { AddNavBar } from './components/NavBar/NavBar.js';
import { AddFooter } from './components/Footer/Foot.js';
import { AddCuerpo } from './components/Main/cuerpo.js';
import { AddHome } from './pages/home/home.js';
import { AddProjects } from './pages/proyects/trabajos.js';


AddNavBar();
AddCuerpo();
AddFooter();
AddHome();
AddProjects();

/*
Función getRandomColor
    Definir una cadena de caracteres 'letters' que contiene '0123456789ABCDEF'
    Inicializar una variable 'color' con el valor '#'
    
    Para i desde 0 hasta 5 hacer
        Seleccionar un carácter aleatorio de 'letters' para formar el numero hexadecimal
        Añadir el carácter seleccionado a 'color'
    Fin Para
    
    Retornar 'color'
Fin Función
*/

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]; 
    }
    return color;
}

function generateRandomStyles() {
    return {
        '--primero-dinamic': getRandomColor(),
        '--segundo-dinamic': getRandomColor(),
        '--tercero-dinamic': getRandomColor(),
        '--cuarto-dinamic': getRandomColor(),
        '--quinto-dinamic': getRandomColor(),
        '--color': getRandomColor()
    };
}

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
    
    applyStyles(styleLight);

    document.getElementById('botonStilo').addEventListener('click', function() {
        const botonStilo = document.getElementById('botonStilo');
        
        // Alternar el texto del botón y aplicar los estilos correspondientes
        if (botonStilo.innerText === "☀️") {
            botonStilo.innerText = "🌒";
            applyStyles(styleLight);
        } else if (botonStilo.innerText === "🌒") {
            botonStilo.innerText = "🎲";
            applyStyles(styleDark);
        } else {(botonStilo.innerText === "🎲")
            botonStilo.innerText = "☀️";
            applyStyles(generateRandomStyles());
        }
    });
});

function applyStyles(styles) {
    for (const property in styles) { 
        document.documentElement.style.setProperty(property, styles[property]);        
    }
}
