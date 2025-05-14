import React, { useEffect, useState } from "react";
import "./HomePersonal.css";
import Menu from "../../../components/Menu/menu";
import { Link, useNavigate } from 'react-router-dom';

function HomePersonal() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');

  const linksPersonal = [
    { href: '/homePersonal', label: 'Home' },
    { href: '/agendaPersonal', label: 'Agenda' },
    { href: '/treinoPersonal', label: 'Treino' },
    { href: '/perfilPersonal', label: 'Perfil' },
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
        <Menu links={linksPersonal} />
      </div>

      <div className="img-container">
        <div className="homeAluno-body">
          <h1 className="slogan-homePage">Bem vindo, {nome}!</h1>
          <div className="botoes">
            <button>Agenda</button>
            <button>Lista de Alunos</button>
            <button>Novo Treino</button>
          </div>
        </div>
        <div className="img">
          <img src={require('./imagemPersonal.png')} alt="imagemPersonal" />
        </div>
      </div>
    </div>
  );
}

export default HomePersonal;
