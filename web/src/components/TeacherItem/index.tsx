import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/10304188?s=460&u=580767d2e56832dfbb20ac48e6ac846a6d98e0f8&v=4"
          alt="Ivan Vieira"
        />
        <div>
          <strong>Ivan Vieira</strong>
          <span>Desenvolvimento de Sistemas</span>
        </div>
      </header>
      <p>
        Entusiasta de Novas Tecnologias e Desenvolvimento de Aplicações.
        <br />
        <br />
        Apaixonado pela Disseminação do Conhecimento, transformando a Humanidade
        através da Educação Tecnológica.
      </p>

      <footer>
        <p>
          Preço / Hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em Contato" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
