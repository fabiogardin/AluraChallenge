import styled from "styled-components";

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

export const IconUser = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    left: auto;
    right: 40px;
    top: 43px;
`;

export const TitleCad = styled.h3`
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #3772FF;
    position: absolute;
    margin: 145px 50px 0 50px;
    text-align: center;
`;

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
    gap: 4px;
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
`;

export const AllInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: -40px 24px 24px 24px;
    background-color: #F6F6F6;
    border-radius: 10px;

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
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 32px;
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
    text-align: center;
    padding: 40px 0 40px 0;
`;