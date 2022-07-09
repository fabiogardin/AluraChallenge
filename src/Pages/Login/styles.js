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
`;

export const FormaBody2 = styled.img`
    position: absolute;
    width: 84px;
    height: 415px;
    top: 368px;
    left: 0px;
    right: auto;
`;

export const ImgPatas = styled.img`
    position: absolute;
    left: auto;
    right: 0;
`;

export const ImgLogoAzul = styled.img`
    position: absolute;
    margin-top: 160px;
`;

export const TitleCad = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #3772FF;

    position: absolute;
    margin: 215px 30px 0 30px;
    text-align: center;
`;

export const AllInput = styled.div`
    
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
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
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
`;

export const IconOlho = styled.i`
    position: relative;
    z-index: 2;
    left: 35%;
    bottom: 32px;
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
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
`;

export const BotaoSenha = styled.a`
    width: 100%;
    font-size: 12px;
    margin-top: -20px;

    display: flex;
    justify-content: center;
    color: #FC7071;
`;

export const Rodape = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
   
    background: #36D6AD;
`;

export const RodapeTxt = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin: 0;
    text-align: center;
    padding: 40px 0 40px 0;
    margin-top: 225px;
`;