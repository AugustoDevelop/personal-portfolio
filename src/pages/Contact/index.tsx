import { Component } from 'react'
import Linkedin from "../../assets/icons/linkedin.svg";

export default class Contact extends Component {
    render() {
        return (
            <>
                <div id="contact">Deu certo Contact?</div>
                <article className="article-sobre">
                    <p>
                    Meu nome é Augusto Daniel, sou um entusiasta da programação.<br />
                    Sou uma pessoa obstinada que está sempre em busca de mais e mais desafios, buscando a excelência e agregando mais valor ao que faço. Quero ajudar a desenvolver aplicações que fazem sentido e melhorem a vida das pessoas.
                    Tenho conhecimento intermediário em JavaScript, React, HTML, CSS, testes unitários, Git/GitHub, Redux, Context API, Hooks, Docker, SQL, Node.js.
                    Estou aberto para aprender outras linguagens e frameworks.
                    <img src={Linkedin} alt="Linkedin Augusto" />
                    </p>
                </article>
            </>
        )
    }
}