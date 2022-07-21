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
    z-index: 1;

    @media screen and (min-width: 768px){
        position: absolute;
        left: 0;
        width: 70%;
        height: 435px;
        z-index: 0;
    }

    @media screen and (min-width: 1440px){
        width: 630px;
        height: 435px;
    }
`;

export const FormaBody = styled.img`
    position: absolute;
    visibility: hidden;

    @media screen and (min-width: 1440px){
        visibility: visible;
        width: 120px;
        height: 664px;
        top: 210px;
        right: 0px;
        left: auto;
    }
`;

export const Body = styled.ul`
    display: flex;
    position: relative;
    top: -50px;
    bottom: -20px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    list-style-type: none;

    @media (min-width: 768px){
        margin: 400px 30px -20px 30px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 16px;
    }

    @media screen and (min-width: 1440px){
        margin: 310px 160px 8px 160px;
    }
`;

export const TitleCad = styled.h3`
    line-height: 21px;
    color: #3772FF;

    position: absolute;
    margin: 150px 15% 0 15%;
    text-align: center;

    @media screen and (min-width: 768px){
        margin: 250px 120px 16px 120px;
        line-height: 30px;
    }

    @media screen and (min-width: 1440px){
        margin: 200px 33% 16px 33%;
    }
`;

export const Item = styled.li`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #F7F7F7;
    align-items: center;
    padding: 24px;

    @media screen and (min-width: 768px){
        width: 48%;
    }

    @media screen and (min-width: 1440px){
        width: 32%;
        padding: 16px 24px;
    }
`;  

export const Cartao = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #F7F7F7;
    align-items: center;
    padding: 24px;

    @media screen and (min-width: 768px){
        width: 100%;
    }

    @media screen and (min-width: 1440px){
        width: 100%;
        padding: 16px 24px;
    }
`;

export const ImgCartao = styled.img`
    width: 148px;
    height: 148px;

`;

export const Lista = styled.ul`
    height: 130px;
`;

export const DadosCartao = styled.div`
    width: 50%;
    max-width: 180px;

`;

export const TitleCartao = styled.h4`    
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 8px;

    color: #3772FF;
`;

export const DadosList = styled.li`
    font-size: 14px;
    line-height: 20px;
    list-style-type: none;

    color: #737380;
`;

export const DadosLocal = styled.li`
    font-size: 12px;
    line-height: 16px;
    list-style-type: none;

    color: #737380;
`;

export const DadosContato = styled.li`
    font-size: 10px;
    line-height: 16px;
    list-style-type: none;
    margin-left: 30px;
    margin-top: 10px;

    color: #737380;
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