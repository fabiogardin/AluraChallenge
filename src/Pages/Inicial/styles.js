import styled from "styled-components";

export const Cabecalho = styled.div`
    background-color: #3772FF;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgCabecalho = styled.img`
    width: 100%;
    height: 273.52px;

    @media (min-width: 768px){
        position: absolute;
        left: 0;
        width: 70%;
        height: 435px;
    }
`;

export const DivLink = styled.div`
    display: flex;
    position: absolute;
    left: 50px;
    top: 35px;
    z-index: 1;

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

export const ImgLogoBranco = styled.img`
    position: absolute;
    margin-top: 160px;

    @media(min-width: 768px){
        margin-top: 250px;
        width: 252px;
        height: 62px;
    }
`;

export const Title = styled.h3`
    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 48px;
    color: #FFFFFF;

    position: absolute;
    margin-top: 230px;

    @media (min-width: 768px){
        margin-top: 340px;
        font-size: 28px;
        
    }
`;

export const Paragrafo = styled.p`
    line-height: 24px;
    color: #FFFFFF;
    margin: 16px 86px;
    text-align: center;

    @media (min-width: 768px){
        span{
            display: none;
        }
        :after{
        content: "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
        }
        margin: 16px 210px;
    }
`;

export const Body = styled.div`
    display: flex;
    width: 100%;

    @media (min-width: 768px){
        margin-top: 400px;
    }
`;

export const FormaBody = styled.img`
    position: absolute;
    width: 84px;
    height: 415px;
    top: 190px;
    left: auto;
    right: 0px;

    @media (min-width: 768px){
        width: 120px;
        height: 664px;
        top: 210px;
    }
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px){
        margin-top: 30px;
    }
`;

export const Botao = styled.a`
    width: 180px;
    height: 45px;
    left: 90px;
    margin-top: 5px;
    margin-bottom: 8px;

    background: #FC7071;
    border-radius: 6px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 10px;

    text-decoration: none;

    @media (min-width: 768px){
        width: 344px;
        height: 48px;
    }
`;

export const ImagemPet = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Pets = styled.img`
    @media (min-width: 768px){
        width: 278px;
        height: 307px;
        margin-top: 30px;
    }
`;

export const Rodape = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
   
    background: #36D6AD;
`;

export const RodapeTxt = styled.p`
    line-height: 24px;
    color: #FFFFFF;

    margin: 16px 86px;
    text-align: center;
    padding: 40px 0 40px 0;
    margin-top: -20px;

    @media (min-width: 768px){
        margin-bottom: 0px;
    }
`;