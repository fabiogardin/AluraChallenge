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

export const FormaBody = styled.img`
    position: absolute;
    width: 84px;
    height: 415px;
    top: 368px;
    left: 0px;
    right: auto;
    transform: scalex(-1);

    @media screen and (min-width: 768px){
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

    @media screen and (min-width: 768px){
        width: 200px;
        height: 280px;
    }

    @media screen and (min-width: 1440px){
        width: 270px;
        height: 380px;
        /*transform: rotate(-15deg);
        top: -35px;
        right: -35px;*/
    }
`;

export const ImgLogoAzul = styled.img`
    width: 187px;
    height: 46px;
    position: absolute;
    margin-top: 140px;

    @media screen and (min-width: 768px){
        margin-top: 250px;
        width: 252px;
        height: 62px;
    }

    @media screen and (min-width: 1440px){
        margin-top: 140px;
    }
`;

export const TitleCad = styled.h3`
    color: #3772FF;
    line-height: 21px;

    position: absolute;
    margin: 200px 20px 0 25px;
    text-align: center;

    @media screen and (min-width: 768px){
        margin: 360px 100px 16px 100px;
        line-height: 30px;
    }

    @media screen and (min-width: 1440px){
        margin: 234px 33% 16px 33%;
    }
`;

export const AllInput = styled.form`
    @media screen and (min-width: 768px){
        margin-top: 500px;
    }

    @media screen and (min-width: 1440px){
        margin-top: 375px;
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

    @media screen and (min-width: 768px){
        width: 50%;
        height: 54px;
        ::placeholder{
            font-size: 16px;
        }
    }

    @media screen and (min-width: 1440px){
        width: ${props => props.primary ? '23%' : '35%'} ;
    }
`;

export const IconOlho = styled.i`
    position: relative;
    z-index: 2;
    left: 35%;
    bottom: 32px;
    margin-bottom: -32px;

    :hover{
        cursor: pointer;
    }

    @media screen and (min-width: 768px){
        left: 22%;
        bottom: 42px;
    }

    @media screen and (min-width: 1440px){
        left: 10%;
        bottom: 42px;
    }
`;

export const Error = styled.p`
    line-height: 24px;
    text-align: center;
    color: #FC7071;
    margin-bottom: 30px;
`;

export const Botoes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
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

    @media screen and (min-width: 1440px){
        width: 174px;
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
    text-align: center;
    padding: 40px 0 40px 0;
    margin-top: 66px;
    margin-bottom: 0;

    @media screen and (min-width: 768px){
        margin-top: 35px;
    }

    @media screen and (min-width: 1440px){
        margin-top: 54px;
    }
`;
