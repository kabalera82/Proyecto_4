import "./Foot.css";

export const AddFooter = () => {
    const body = document.querySelector("body");
    const footer = document.createElement("footer");
    footer.innerHTML = `
    <p>&copy; 2021</p>
    <ul id="footlist">
        <li class="foot_list><a href="#">Telegram</a></li>
        <li class="foot_list><a href="#">Instagram</a></li>
        <li class="foot_list><a href="#">Facebook</a></li>
    </ul>
    `;

    body.appendChild(footer);
};