import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from '../Home/index';
import Inicial from '../Inicial/index';
import Cadastro from '../Cadastro/index';
import Login from '../Login/index';
import Mensagem from '../Mensagem/index';
import Perfil from '../Perfil/index';

import { AuthProvider, AuthContext } from '../../Contexts/auth';

export default function Rotas(){

  const Private = ({children}) => {
    const { authenticated, loading } = useContext(AuthContext);

    if(loading) {
        return <div className='loading'>Carregando...</div>
    }

    if(!authenticated) {
        return <Navigate to="/login" />
    }

    return children;
    }

    return(
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/home" element={
            <Private>
              <Home />
            </Private>}
            />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mensagem" element={<Mensagem />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </AuthProvider>
    </Router>

    )
};
