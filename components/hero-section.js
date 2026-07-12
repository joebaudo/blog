const template = document.createElement("template");

template.innerHTML = `
<style>

:host{
    display:block;
}

.hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;

    background:
        radial-gradient(circle at top right,#2563eb,transparent 45%),
        radial-gradient(circle at bottom left,#7c3aed,transparent 40%),
        #0f172a;

    color:white;

    padding:4rem;
}

h1{
    font-size:4rem;
    margin:0;
}

.highlight{
    color:#60a5fa;
}

p{
    margin:2rem auto;
    max-width:700px;
    font-size:1.2rem;
    line-height:1.8;
}

button{
    background:#2563eb;
    border:none;
    color:white;
    padding:1rem 2rem;
    border-radius:10px;
    cursor:pointer;
    font-size:1rem;
}

button:hover{
    background:#1d4ed8;
}

</style>

<section class="hero">

<div>

<h1>
Aspiring
<span class="highlight">PhD Research Assistant</span>
</h1>

<p>
Machine Learning • Logic & Language • Mathematics
</p>

<button>
View Research
</button>

</div>

</section>
`;

class HeroSection extends HTMLElement {

    constructor(){

        super();

        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

}

customElements.define("hero-section", HeroSection);
