import "./cuerpo.css";

export const AddCuerpo = () => {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    main.innerHTML = `
    <div id="fondo">
      <img src="./ReformasGontaru.webp" alt="Gontaru & Cia" class="exterior" id="ext" />
    </div>
    <section id="principal">

    `;
    body.appendChild(main);
};