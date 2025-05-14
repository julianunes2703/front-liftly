import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeightScale } from "react-icons/fa6";
import Select from 'react-select';
import axios from 'axios';
import Liftly from '../../components/Liftly/liftly';

import './index.css';

const Cadastro = ({ tipoUsuario }) => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [role, setRole] = useState(null);

    const navigate = useNavigate();

    const options = [
        { value: 'student', label: 'Aluno' },
        { value: 'teacher', label: 'Personal Trainer' },
        { value: 'owner', label: 'Academia' },
        { value: 'nutritionist', label: 'Nutricionista' }
    ];

    const handleCadastro = async (e) => {
        e.preventDefault();

        if (!usuario || !senha || !nome || !telefone || !altura || !peso || !role) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const res = await axios.post('http://localhost:3001/users', {
                name: nome,
                email: usuario,
                password: senha,
                telefone,
                altura,
                peso,
                role: role.value
            });

            alert("Cadastro realizado com sucesso!");
            localStorage.setItem("token", res.data.token);
            navigate("/login");

        } catch (err) {
            setErro(err.response?.data?.error || 'Erro ao cadastrar');
        }
    };

    return (
        <div>
            <Liftly />
            <div className="login-container">
                <form onSubmit={handleCadastro}>
                    <h1>Cadastro {tipoUsuario}</h1>

                    <div className="input-field">
                        <FaUser className="icon" />
                        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <MdEmail className='icon' />
                        <input type="text" placeholder="Email" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <FaPhoneAlt className='icon' />
                        <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <GiBodyHeight className="icon" />
                        <input type="text" placeholder="Altura" value={altura} onChange={(e) => setAltura(e.target.value)} />
                    </div>

                    <div className="input-field">
                       <FaWeightScale className='icon'/>
                        <input type="text" placeholder="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <Select
                            options={options}
                            value={role}
                            onChange={setRole}
                            placeholder="Selecione o tipo de usuário"
                            className="react-select-container"
                            classNamePrefix="react-select"
                        />
                    </div>

                    {erro && <p className="error-message">{erro}</p>}
                    <button type="submit">Cadastre-se</button>
                </form>
            </div>
        </div>
    );
};

export default Cadastro;
