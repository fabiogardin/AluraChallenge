import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/index';
import Inicial from '../Inicial/index';
import Cadastro from '../Cadastro/index';
import Login from '../Login/index';
import Mensagem from '../Mensagem/index';
import Perfil from '../Perfil/index';

export default function Rotas(){
    return(
    <Router>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>

    )
};
