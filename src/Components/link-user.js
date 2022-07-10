import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';

export default function IconAccount(){
    return(

        <Link href='/perfil' >
            <BiUserCircle style={BiUser} />
        </Link>
    )
};

const Link = styled.a`
    position: absolute;
    left: auto;
    right: 40px;
    top: 30px;
    z-index: 2;

    @media (min-width: 768px){
        top: 64px;
    }

    @media (min-width: 1440px){
        right: 172px;
    }
`;

const BiUser = {
    fontSize: '45px',
    color: '#2FBD99',
}