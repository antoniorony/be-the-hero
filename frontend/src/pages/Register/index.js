import React, { useState } from 'react';
import { Link,  useHistory } from 'react-router-dom';
import api from '../../service/api';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './style.css';
export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

 async function handleRegister(e){
        e.preventDefault();

        const data = {
            name, 
            email,
            whatsapp,
            city,
            uf,
        };
    try{
       const resposta = await api.post('ongs', data);
       alert(`seu id ${resposta.data.id}`);
       history.push('/');
    }catch(err){
        alert("erro");
    }
    }
    return(
       <div className="resgister-container">
           <div className="content">
               <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casoso da sua ONG.</p>

                    <Link to="/" className="back-link">
                    <FiArrowLeft size={16} color="#E02041"/>
                    Não Tenho Cadastro
                    </ Link>
               </section>
               <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" value={name} onChange={e=>setName(e.target.value)}/>
                    <input type="email" placeholder="e-mail" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input placeholder="whatsapp" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)}/>
                    <div className="input-group">
                        <input placeholder = "Cidade" value = {city} onChange={e=>setCity(e.target.value)}/>
                        <input placeholder = "UF" style={{width:80}} value = {uf} onChange={e=>setUf(e.target.value)}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
               </form>
           </div>
       </div>
    );
}