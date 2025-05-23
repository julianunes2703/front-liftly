import React, { useEffect, useState } from "react";
import "./HomeAluno.css";
import Menu from "../../../components/Menu/menu";
import { Link, useNavigate } from 'react-router-dom';

function HomeAluno() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');

  const linksAluno = [
    { href: '/homeAluno', label: 'Home' },
    { href: '/aulasAluno', label: 'Aulas' },
    { href: '/treinoAluno', label: 'Treino' },
    { href: '/dietaAluno', label: 'Dieta' },
    { href: '/perfilAluno', label: 'Perfil' },
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
        <Menu links={linksAluno} />
      </div>

      <div className="img-container">
        <div className="homeAluno-body">
          <h1 className="slogan-homePage">Bem vindo, {nome}!</h1>
          <div className="botoes">
            <button onClick={() => navigate("/treinoAluno")}>Inicial Treino</button>
            <button onClick={() => navigate("/dietaAluno")}>Visualizar Dieta</button>
            <button onClick={() => navigate("/aulasAluno")}>Agendar Aula</button>
          </div>
        </div>
        <div className="img">
          <img src={require('./fotoAluno.png')} alt="fotoAluno" />
        </div>
      </div>
    </div>
  );
}

export default HomeAluno;
