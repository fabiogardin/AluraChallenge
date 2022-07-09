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

    @media (min-width: 768px){
        position: absolute;
        left: 0;
        width: 70%;
        height: 435px;
        z-index: 0;
    }
`;

export const Body = styled.div`
    display: flex;
    position: relative;
    top: -50px;
    bottom: -20px;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    @media (min-width: 768px){
        margin: 400px 30px -20px 30px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 16px;

    }
`;

export const TitleCad = styled.h3`
    line-height: 21px;
    color: #3772FF;

    position: absolute;
    margin: 150px 30px 0 30px;
    text-align: center;

    @media (min-width: 768px){
        margin: 250px 120px 16px 120px;
        line-height: 30px;
    }
`;

export const Cartao = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #F7F7F7;
    align-items: center;
    padding: 24px;

    @media (min-width: 768px){
        width: 48%;
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
       
    background: #36D6AD;
`;
    
export const RodapeTxt = styled.p`
    line-height: 24px;
    color: #FFFFFF;
    text-align: center;
    padding: 40px 0 40px 0;
`;