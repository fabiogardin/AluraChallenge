import { BiEnvelope } from 'react-icons/bi';
import styled from 'styled-components';

export default function IconEmailInicio(){
    return(
        <Link href='/mensagem' >
            <BiEnvelope style={BiEnv} />
        </Link>
    )
};

const Link = styled.a`
    position: absolute;
    left: 65px;

    @media (min-width: 768px){
        left: 290px;
    }

    @media (min-width: 1440px){
        left: 255px;
    }
`;

const BiEnv = {
    fontSize: '30px',
    color: '#FFFFFF',
};



