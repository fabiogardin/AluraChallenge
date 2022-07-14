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
            <Route path="/mensagem" element={<Mensagem />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </Fragment>
      </AuthProvider>
    </Router>

    )
};
