import styled from 'styled-components';

export const Cabecalho = styled.div`
    background: #FFFFFF;
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

    @media (min-width: 1440px){
        width: 630px;
        height: 435px;
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

export const FormaBody = styled.img`
    position: absolute;
    width: 84px;
    height: 415px;
    top: 368px;
    left: 0px;
    right: auto;
    transform: scalex(-1);

    @media (min-width: 768px){
        transform: scalex(1);
        width: 120px;
        height: 664px;
        top: 210px;
        right: 0px;
        left: auto;
    }
`;

export const ImgPatas = styled.img`
    position: absolute;
    left: auto;
    right: 0;

    @media (min-width: 768px){
        width: 200px;
        height: 280px;
    }

    @media (min-width: 1440px){
        width: 270px;
        height: 380px;
        /*transform: rotate(-15deg);
        top: -35px;
        right: -35px;*/
    }
`;

export const ImgLogoAzul = styled.img`
    position: absolute;
    margin-top: 160px;

    @media(min-width: 768px){
        margin-top: 250px;
        width: 252px;
        height: 62px;
    }

    @media (min-width: 1440px){
        margin-top: 140px;
    }
`;

export const TitleCad = styled.h3`
    line-height: 21px;
    color: #3772FF;

    position: absolute;
    margin: 215px 30px 0 30px;
    text-align: center;

    @media (min-width: 768px){
        margin: 360px 80px 16px 80px;
        line-height: 30px;
    }

    @media (min-width: 1440px){
        margin: 280px 33% 16px 33%;
    }
`;

export const AllInput = styled.div`
    @media (min-width: 768px){
        margin-top: 430px;
        margin-bottom: 30px;
    }

    @media (min-width: 1440px){
        margin-top: 390px;
    }
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
    gap: 4px;
`;

export const LabelInput = styled.label`
    line-height: 24px;
    text-align: center;
    color: #737380;
`;

export const Input = styled.input`
    width: 80%;
    height: 40px;
    text-align: center;
    color: #BCBCBC;
    border: none;
    background: #F7F7F7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: #737380;
    z-index: 1;    

    ::placeholder {
        font-size: 12px;
        color: #BCBCBC;
    }
    &:focus {
        outline: none;
    }

    @media (min-width: 768px){
        width: 50%;
        height: 54px;
        ::placeholder{
            font-size: 16px;
        }
    }

    @media (min-width: 1440px){
        width: 35%;
    }
`;

export const IconOlho = styled.i`
    position: relative;
    z-index: 2;
    left: 35%;
    bottom: 32px;

    @media (min-width: 768px){
        left: 22%;
        bottom: 34px;
    }

    @media (min-width: 1440px){
        left: 10%;
        bottom: 42px;
    }
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;

    @media (min-width: 768px){
        margin-top: 5px;
    }
`;

export const Botao = styled.a`
    width: 148px;
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

    @media (min-width: 1440px){
        width: 174px;
    }
`;

export const BotaoSenha = styled.a`
    width: 100%;
    font-size: 12px;
    margin-top: -20px;

    display: flex;
    justify-content: center;
    color: #FC7071;

    @media (min-width: 768px){
        font-size: 16px;
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
    margin: 0;
    text-align: center;
    padding: 40px 0 40px 0;
    margin-top: 225px;

    @media (min-width: 768px){
        margin-top: 280px;
    }

    @media (min-width: 1440px){
        margin-top: 213px;
    }
`;