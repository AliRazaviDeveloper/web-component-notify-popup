const template = document.createElement("template");

template.innerHTML = `
<link rel="stylesheet" href="notify.css" />

<div class='notify-container'>

<span class='alert'>
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
</svg>
</span>


<span class='info'>
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
</svg>
</span>

<div class='notify-content'>
    I am notify Content
</div>
</div>

`;

class PopupNotify extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  notify(state) {
    const alert = this.shadowRoot.querySelector(".alert");
    const info = this.shadowRoot.querySelector(".info");
    const notify = this.shadowRoot.querySelector(".notify-content");

    if (state) {
      notify.style.transform = "scale(1)";
      alert.style.display = "none";
      info.style.display = "block";
      state = false;
    } else {
      notify.style.transform = "scale(0)";
      info.style.display = "none";
      alert.style.display = "block";
    }
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".alert")
      .addEventListener("click", () => this.notify(true));

    this.shadowRoot
      .querySelector(".info")
      .addEventListener("click", () => this.notify(false));
  }
}

export default PopupNotify;
