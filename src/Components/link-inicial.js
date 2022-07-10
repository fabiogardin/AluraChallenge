import { BiHomeAlt } from 'react-icons/bi';
import styled from 'styled-components';

export default function IconInicial(){
    return(
        
        <Link href='./' >
            <BiHomeAlt style={ BiHome } />
        </Link>
    )
};

const Link = styled.a`
    position: absolute;

    @media (min-width: 768px){
        left: 205px;
    }

    @media (min-width: 1440px){
        left: 190px;
    }
`;

const BiHome = {
    fontSize: '30px',
    color:'#FFFFFF',
}