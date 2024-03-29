import styled from "styled-components";

export const Cabecalho = styled.div`
    background: #FFFFFF;
    min-height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImgCabecalho = styled.img`
    width: 100%;
    height: 273.52px;

    @media screen and (min-width: 768px){
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

export const FormaBody = styled.img`
    position: absolute;
    visibility: hidden;

    @media screen and (min-width: 768px){
        visibility: visible;
        width: 120px;
        height: 664px;
        top: 210px;
        right: 0px;
        left: auto;
    }
`;

export const IconUser = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    left: auto;
    right: 40px;
    top: 43px;

    @media screen and (min-width: 768px){
        top: 64px;
    }

    @media screen and (min-width: 1440px){
        right: 172px;
    }
`;

export const TitleCad = styled.h3`
    line-height: 21px;
    color: #3772FF;

    position: absolute;
    margin: 170px 50px 0 50px;
    text-align: center;

    @media screen and (min-width: 768px){
        margin: 250px 120px 16px 120px;
        line-height: 30px;
    }

    @media screen and (min-width: 1440px){
        margin: 190px 33% 16px 33%;
    }
`;

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
    gap: 4px;

    @media screen and (min-width: 768px){
        margin-top: 32px;
    }
`;

export const TitlePerfil = styled.h2`    
    width: 85%;
    font-weight: 600;
    font-size: 21px;
    line-height: 24px;
    color: #737380;
    text-align: center;
`;

export const FotoNome = styled.h4`
    width: 85%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #3772FF;
`;

export const FotoUser = styled.img`
    width: 80px;
    height: 80px;
`;

export const EditarFoto = styled.a`
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    color: #FC7071;

    :hover{
        color: #FF9D9E;
    }
`;

export const AllInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: -15px 24px 24px 24px;
    background-color: #F6F6F6;
    border-radius: 10px;

    @media screen and (min-width: 768px){
        margin: 340px 120px 32px 120px;
    }

    @media screen and (min-width: 1440px){
        margin: 290px 420px 32px 420px;
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
    width: 85%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
    color: #3772FF;

    @media screen and (min-width: 768px){
        width: 93%;
    }

    @media screen and (min-width: 1440px){
        width: 88%;
    }
`;

export const Input = styled.input`
    width: 85%;
    height: 48px;
    text-align: center;
    color: #BCBCBC;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: #737380; 
    margin-bottom : 16px;

    ::placeholder {
        font-size: 12px;
        color: #BCBCBC;

    }
    &:focus {
        outline: none;
    }

    @media screen and (min-width: 768px){
        width: 93%;
    }

    @media screen and (min-width: 1440px){
        width: 88%;
    }
`;

export const TextArea = styled.textarea`
    width: 85%;
    color: #BCBCBC;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    color: #737380; 
    margin-bottom : 16px;
    padding: 8px;

    ::placeholder {
        font-size: 12px;
        color: #BCBCBC;

    }
    &:focus {
        outline: none;
    }

    @media screen and (min-width: 768px){
        width: 93%;
    }

    @media screen and (min-width: 1440px){
        width: 88%;
    }
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 32px;
`;

export const Botao = styled.button`
    width: 148px;
    height: 45px;
    left: 90px;
    margin-top: 5px;
    margin-bottom: 8px;
    border: none;

    background: #FC7071;
    border-radius: 6px;
    color: #FFFFFF;
    text-align: center;

    :hover{
        background-color: #FF9D9E;
    }

    @media screen and (min-width: 768px){
        width: 164px;
        height: 48px;
    }

    @media screen and (min-width: 1440px){
        width: 174px;
    }
`;

export const Rodape = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 0;
   
    background: #36D6AD;
`;

export const RodapeTxt = styled.p`
    line-height: 24px;
    color: #FFFFFF;
    text-align: center;
    padding: 40px 0 40px 0;
`;