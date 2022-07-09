import styled from "styled-components";
import Logobranco from '../assets/Logobranco.png';
import IconInicial from "./link-inicial";
import IconEmailInicio from './link-email0';


export default function Header(){
    return(
        <DivLink>
            <LogoBranco src={Logobranco} alt='Logo da empresa AdoPet' />
            <IconInicial />
            <IconEmailInicio />
        </DivLink>
    )
};

export const DivLink = styled.div`
    display: flex;
    position: absolute;
    left: 50px;
    top: 35px;
    z-index: 2;

    @media (min-width: 768px){
        left: 50px;
        top: 64px;
        z-index: 1;
    }
`;

export const LogoBranco = styled.img`
    visibility: hidden;

    @media (min-width: 768px){
        visibility: visible;
        width: 140px;
        height: 35px;
    }
`;