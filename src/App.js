import Rotas from './Pages/Routes/route';
import GlobalStyle from './globalStyle';
import { AuthProvider } from './Contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <Rotas />
      <GlobalStyle />
    </AuthProvider>
    
  );
}
