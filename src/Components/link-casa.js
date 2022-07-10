import styled from 'styled-components';
import { BiHomeAlt } from 'react-icons/bi';

export default function IconCasa(){
    return(

        <Link href='/home' >
            <BiHomeAlt style={BiHome} />
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

