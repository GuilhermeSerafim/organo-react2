
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/guilherme-da-silva-serafim/" target="react/jsx-no-target-blank">
                        <img src="/imagens/linkedin.png" alt="Linkedin" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GuilhermeSerafim" target="react/jsx-no-target-blank">
                        <img src="/imagens/github.png" alt="Github" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/iamguiler/" target="react/jsx-no-target-blank">
                        <img src="/imagens/ig.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Guilherme
            </p>
        </section>
    </footer>)
}

export default Rodape