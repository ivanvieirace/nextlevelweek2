import React, { useState, FormEvent } from "react";
import "./styles.css";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import Input from "../../components/Input";
import api from "../../services/api";

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os Proffys Disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              {
                value: "Análise de Sistemas",
                label: "Análise de Sistemas",
              },
              { value: "Docker", label: "Docker" },
              { value: "DotNet Core", label: "DotNet Core" },
              { value: "CSharp", label: "CSharp" },
              { value: "Java", label: "Java" },
              { value: "MongoDB", label: "MongoDB" },
              { value: "NodeJS", label: "NodeJS" },
              { value: "ReactJS", label: "ReactJS" },
              { value: "React Native", label: "React Native" },
              { value: "SQL Server", label: "SQL Server" },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da Semana"
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;
