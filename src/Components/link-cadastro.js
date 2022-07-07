import { Link } from 'react-router-dom';

export default function BotaoCadastro(){
    return(

        <Link to='/cadastro' style={{
            width: '180px',
            height: '45px',
            left: '90px',
            marginTop: '5px',
            marginBottom: '8px',        
            background: '#FC7071',
            borderRadius: '6px',
            color: '#FFFFFF',
            textAlign: 'center',
            paddingTop: '10px',        
            textDecoration: 'none',
            }} >
            Quero me cadastrar
        </Link>
    )
};