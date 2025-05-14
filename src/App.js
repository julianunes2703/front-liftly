import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./pages/PaginaInicial/paginaInicial";
import Login from './pages/Login/login';
import Cadastro from './pages/Cadastro/cadastro';
import EsqueceuSenha from './pages/EsqueceuSenha/esqueceuSenha';
import HomeAluno from './pages/PagesAluno/HomeAluno/HomeAluno';
import AulasAlunos from './pages/PagesAluno/AulasAluno/AulasAluno';
import PerfilAluno from './pages/PagesAluno/PerfilAluno/PerfilAluno';
import TreinoAluno from './pages/PagesAluno/TreinoAluno/TreinoAluno';
import DietaAluno from './pages/PagesAluno/DietaAluno/DietaAluno';
import HomePersonal from './pages/PagesPersonal/HomePersonal/HomePersonal';
import HomeAcademia from './pages/PagesAcademia/HomeAcademia/HomeAcademia';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/esqueceuSenha" element={<EsqueceuSenha/>} />
        <Route path="/homeAluno" element={<HomeAluno/>} />
        <Route path='/aulasAluno' element={<AulasAlunos/>} />
        <Route path='/perfilAluno' element={<PerfilAluno/>} />
        <Route path='/treinoAluno' element={<TreinoAluno/>} />
        <Route path='/dietaAluno' element={<DietaAluno/>} />  
        <Route path='/homePersonal' element={<HomePersonal/>} />
        <Route path='/homeAcademia' element={<HomeAcademia/>} />

        
      </Routes>
    </Router>
  );
}

export default App;
