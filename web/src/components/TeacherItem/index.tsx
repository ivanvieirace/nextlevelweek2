import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name} </strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
        <br />
        <br />
        Apaixonado pela Disseminação do Conhecimento, transformando a Humanidade
        através da Educação Tecnológica.
      </p>

      <footer>
        <p>
          Preço / Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Entrar em Contato" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
