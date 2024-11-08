import './trabajos.css';

export const projects = [
    {
        title: "Proyecto 1",
        image: "/1.webp",
        description: "Descripción del Proyecto 1",
        localización: "Ubicación del Proyecto 1",
        tareas: "Tareas del Proyecto 1"
    },
    {
        title: "Proyecto 2",
        image: "/2.webp",
        description: "Descripción del Proyecto 2",
        localización: "Ubicación del Proyecto 2",
        tareas: "Tareas del Proyecto 2"
    },
    {
        title: "Proyecto 3",
        image: "/3.webp",
        description: "Descripción del Proyecto 2",
        localización: "Ubicación del Proyecto 2",
        tareas: "Tareas del Proyecto 2"
    },
    {
        title: "proyecto 4",
        image: "/4.webp",
        description: "Descripción del Proyecto 2",
        localización: "Ubicación del Proyecto 2",
        tareas: "Tareas del Proyecto 2"
    },
    {
        title: "Proyecto 5",
        image: "/5.webp",
        description: "Descripción del Proyecto 2",
        localización: "Ubicación del Proyecto 2",
        tareas: "Tareas del Proyecto 2"
    },
    {
        title: "Proyecto 6",
        image: "/6.webp",
        description: "Descripción del Proyecto 1",
        localización: "Ubicación del Proyecto 1",
        tareas: "Tareas del Proyecto 1"
    },
    {
        title: "Proyecto 7",
        image: "/7.webp",
        description: "Descripción del Proyecto 2",
        localización: "Ubicación del Proyecto 2",
        tareas: "Tareas del Proyecto 2"
    },
    {
        title: "Proyecto 8",
        image: "/8.webp",
        description: "Descripción del Proyecto 2",
        localización: "Ubicación del Proyecto 2",
        tareas: "Tareas del Proyecto 2"
    },
    {
        title: "proyecto 9",
        image: "/9.webp",
        description: "Descripción del Proyecto 2",
        localización: "Ubicación del Proyecto 2",
        tareas: "Tareas del Proyecto 2"
    },
    {
        title: "Proyecto 10",
        image: "/10.webp",
        description: "Descripción del Proyecto 2",
        localización: "Ubicación del Proyecto 2",
        tareas: "Tareas del Proyecto 2"
    }
];
// Agrega más proyectos según sea necesario


export const AddProjects = () => {
    const header = document.querySelector("main");
    const main = document.createElement("article");
    main.id = "faenas"; 

    // Iterar sobre el array de proyectos y crear elementos HTML
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        projectElement.innerHTML = `
            <h2>${project.title}</h2>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
            <p><strong>Localización:</strong> ${project.localización}</p>
            <p><strong>Tareas:</strong> ${project.tareas}</p>
        `;

        main.appendChild(projectElement);
    });

    header.appendChild(main);
};