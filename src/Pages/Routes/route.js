import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../Home/index';
import Inicial from '../Inicial/index';
import Cadastro from '../Cadastro/index';
import Login from '../Login/index';
import Mensagem from '../Mensagem/index';
import Perfil from '../Perfil/index';

import { AuthProvider } from '../../Contexts/auth';
import useAuth from '../../Hooks/useAuth';

export default function Rotas(){

  const Private = ({ Item }) => {
      const { signed } = useAuth();

      return signed > 0 ? <Item /> : <Login />
    }

    return(
    <Router>
      <AuthProvider>
        <Fragment>
          <Routes>
            <Route path="/" element={<Inicial />} />
            <Route path="/home" element={<Private Item={Home} />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mensagem" element={<Private Item={Mensagem} />} />
            <Route path="/perfil" element={<Private Item={Perfil} />} />
          </Routes>
        </Fragment>
      </AuthProvider>
    </Router>

    )
};

//token: 977ca6670e56b318c1a6f2aad0897088391503df7a6273687639cb9f36717e96fbbe2a0170c67baef189be802e916c7afb751a7e120ccf4b33ad05a4f9b3c08a444c3e4101e33983a43a8e160f01fd90fef3e121f96754133b445d03d4b605c9592562cb96d6ef1e8cc5da28d79ec471e35f234e8ca7954c4630b93587f99e9f
