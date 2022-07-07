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
`;

export const ImgLogoBranco = styled.img`
    position: absolute;
    margin-top: 160px;
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
`;

export const Paragrafo = styled.p`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;

    margin: 16px 86px;
    text-align: center;
`;

export const Body = styled.div`
    display: flex;
    width: 100%;
`;

export const FormaBody = styled.img`
    position: absolute;
    width: 84px;
    height: 415px;
    top: 190px;
    left: auto;
    right: 0px;
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

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
`;

export const ImagemPet = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin-top: 10px;
`;

export const Pets = styled.img`
    
`;

export const Rodape = styled.footer`
    position: relative;
    width: 100%;
    height: auto;
   
    background: #36D6AD;
`;

export const RodapeTxt = styled(Paragrafo)`
    margin: 0;
    text-align: center;
    padding: 40px 0 40px 0;
    margin-top: -20px;
`;