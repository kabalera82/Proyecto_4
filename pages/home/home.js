import "./home.css"

export const AddHome = () => {
    const main = document.querySelector("main");
    const article = document.createElement("article");
    article.innerHTML = `
    <section id="principal">
        <h1>Construcciones y Reformas Gontaru</h1>      
        <p id="saludo">Bienvenido a Construcciones y Reformas Gontaru, tu socio confiable para todas tus necesidades de construcción y reformas en Tudela y alrededores.</p>
        <button id="contacto">Contacto</button>
    </section>
    `;
    main.appendChild(article);
};