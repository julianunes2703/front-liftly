import React, { useEffect, useState } from "react";
import "./HomeAcademia.css";
import Menu from "../../../components/Menu/menu";
import { Link, useNavigate } from 'react-router-dom';

function HomeAcademia() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');

  const linksAcademia = [
    { href: '/homePersonal', label: 'Home' },
    { href: '/aulasAcademia', label: 'Aulas' },
    { href: '/alunosAcademia', label: 'Alunos' },
    { href: '/perfilAcademia', label: 'Perfil' },
    { href: '/', label: 'Sair' },
  ];

  useEffect(() => {
    const userSalvo = localStorage.getItem('user');
    if (userSalvo) {
      const user = JSON.parse(userSalvo);
      setNome(user.name); 
    }
  }, []);

  return (
    <div className="homeAluno">
      <div className="header">
        <Menu links={linksAcademia} />
      </div>

      <div className="img-container">
        <div className="homeAluno-body">
          <h1 className="slogan-homePage">Bem vindo, {nome}!</h1>
          <div className="botoes">
            <button>Agendar Aulas</button>
            <button>Lista de Alunos</button>
          </div>
        </div>
        <div className="img">
          <img src={require('./academia.png')} alt="academia" />
        </div>
      </div>
    </div>
  );
}

export default HomeAcademia;
