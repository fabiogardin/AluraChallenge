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
        width: 530px;
        height: 435px;
    }

    @media screen and (min-width: 1440px){
        width: 630px;
        height: 435px;
    }
`;


export const LogoBranco = styled.img`
    width: 140px;
    height: 35px;
    visibility: hidden;

    @media screen and (min-width: 768px){
        visibility: visible;
        width: 140px;
        height: 35px;
    }
`;

export const ImgLogoBranco = styled.img`
    position: absolute;
    margin-top: 160px;
    width: 187px;
    height: 46px;

    @media screen and (min-width: 768px){
        margin-top: 250px;
        width: 252px;
        height: 62px;
    }

    @media screen and (min-width: 1440px){
        margin-top: 140px;
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

    @media screen and (min-width: 768px){
        margin-top: 340px;
        font-size: 28px;        
    }

    @media screen and (min-width: 1440px){
        margin-top: 240px;
    }
`;

export const Paragrafo = styled.p`
    line-height: 24px;
    color: #FFFFFF;
    margin: 16px 86px;
    text-align: center;

    @media screen and (min-width: 768px){
        span{
            display: none;
        }
        :after{
        content: "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!"
        }
        width: 100%;
        margin: 16px 33% 16px 33%;
    }
    
    @media screen and (min-width: 1440px){
        width: 100%;
        margin: -80px 33% 16px 33%;
    }
`;

export const Body = styled.div`
    display: flex;
    width: 100%;

    @media screen and (min-width: 768px){
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

    @media screen and (min-width: 768px){
        width: 120px;
        height: 664px;
        top: 210px;
    }
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px){
        margin-top: 30px;
    }

    @media screen and (min-width: 1440px){
        margin-top: 0px;
    }
`;

export const Botao = styled.button`
    width: 180px;
    height: 45px;
    left: 90px;
    margin-top: 5px;
    margin-bottom: 8px;

    background: #FC7071;
    border-radius: 6px;
    color: #FFFFFF;
    text-align: center;
    border: none;

    :hover{
        background-color: #FF9D9E;
    }

    @media screen and (min-width: 768px){
        width: 344px;
        height: 48px;
    }

    @media screen and (min-width: 1440px){
        width: 362px;
    }
`;

export const ImagemPet = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Pets = styled.img`
    @media screen and (min-width: 768px){
        width: 278px;
        height: 365px;
        margin-top: 30px;
    }

    @media screen and (min-width: 1440px){
        width: 284px;
        height: 380px;
    }
`;

export const Rodape = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom:-20px;
   
    background: #36D6AD;
`;

export const RodapeTxt = styled.p`
    line-height: 24px;
    color: #FFFFFF;

    margin: 16px 70px;
    text-align: center;
    padding: 40px 0 40px 0;
    margin-top: -20px;

    @media screen and (min-width: 768px){
        margin-bottom: 0px;
    }

    @media screen and (min-width: 1440px){
        margin-top: -22px;
    }
`;