class ResearchSection extends HTMLElement {

    connectedCallback(){

        this.attachShadow({mode:"open"});

        this.shadowRoot.innerHTML = `
        <style>

        section{
            padding:80px;
            background:#111827;
            color:white;
        }

        h2{
            text-align:center;
            margin-bottom:40px;
        }

        .grid{

            display:grid;
            grid-template-columns:
                repeat(auto-fit,minmax(250px,1fr));

            gap:25px;
        }

        .card{

            padding:25px;

            border-radius:16px;

            background:#1f2937;

            transition:.3s;

        }

        .card:hover{

            transform:translateY(-5px);

            background:#2563eb;

        }

        </style>

        <section>

            <h2>Research Interests</h2>

            <div class="grid">

                <div class="card">
                    <h3>Machine Learning</h3>
                    <p>Representation learning, optimization, probabilistic models.</p>
                </div>

                <div class="card">
                    <h3>Logic & Language</h3>
                    <p>Formal semantics, theorem proving, NLP, symbolic reasoning.</p>
                </div>

                <div class="card">
                    <h3>Mathematics</h3>
                    <p>Linear algebra, graph theory, optimization and probability.</p>
                </div>

            </div>

        </section>
        `;
    }

}

customElements.define("research-section", ResearchSection);
