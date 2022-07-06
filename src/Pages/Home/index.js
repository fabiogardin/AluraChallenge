import styled from 'styled-components';
import formaCabecalho from '../../assets/formaCabecalho.png';
import Dunga from '../../assets/petDunga.png';
import { BiEnvelope, BiHomeAlt, BiUserCircle, BiMessageDetail } from 'react-icons/bi';
import {
    Container,
    IconCasa,
    IconEmail,
    ImgCabecalho,
    Title,
    Rodape,
    RodapeTxt,
} from '../../styles';

export default function Home(){
    return(
        <Cabecalho>
            <Container>
                <IconCasa><BiHomeAlt style={{fontSize: '30px', color:'#FFFFFF'}} /></IconCasa>
                <IconEmail><BiEnvelope style={{fontSize: '30px', color:'#FFFFFF'}} /></IconEmail>
                <IconAccount><BiUserCircle style={{fontSize: '45px', color: '#2FBD99' }} /></IconAccount>

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <TitleCad>Olá! Veja os amigos<br/>disponíveis para adoção!</TitleCad>
            </Container>
            <Cartao>
                <ImgCartao src={Dunga} alt='Imagem do cachorro Dunga.' />
                <DadosCartao>
                    <TitleCartao>Dunga</TitleCartao>
                    <Lista>
                        <DadosList>2 anos</DadosList>
                        <DadosList>Porte pequeno</DadosList>
                        <DadosList>Calmo e educado</DadosList>
                        <br/>
                        <DadosLocal>Rio de Janeiro (RJ)</DadosLocal>
                        <DadosContato>falar com responsável</DadosContato>
                        <IconContato><BiMessageDetail style={{fontSize: '25px', color: '#2FBD99'}} /></IconContato>
                    </Lista>
                </DadosCartao>
            </Cartao>            
            <Rodape>
                <RodapeTxt2>
                    2022 - Desenvolvido por Alura.
                </RodapeTxt2>
            </Rodape>

        </Cabecalho>        
    );
};

const Cabecalho = styled.div`
    background: #FFFFFF;
`;

const IconAccount = styled.a`
    position: absolute;
    left: auto;
    right: 40px;
    top: 43px;
`;

const TitleCad = styled(Title)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #3772FF;

    position: absolute;
    margin: 145px 30px 0 30px;
    text-align: center;
`;

const Cartao = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: -60px;
    
    background: #F7F7F7;
    align-items: center;
    padding: 24px;
    
`;

const ImgCartao = styled.img`
    width: 148px;
    height: 148px;

`;

const Lista = styled.ul`
    height: 140px;
`;

const DadosCartao = styled.div`
    width: 50%;

`;

const TitleCartao = styled.h4`    
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 8px;

    color: #3772FF;
`;

const DadosList = styled.li`
    font-size: 14px;
    line-height: 20px;
    list-style-type: none;

    color: #737380;
`;

const DadosLocal = styled.li`
    font-size: 12px;
    line-height: 16px;
    list-style-type: none;

    color: #737380;
`;

const DadosContato = styled.li`
    font-size: 10px;
    line-height: 16px;
    list-style-type: none;
    margin-left: 30px;
    margin-top: 10px;

    color: #737380;
`;

const IconContato = styled.i`
    position: relative;
    top: -20px;
`;

const RodapeTxt2 = styled(RodapeTxt)`
    margin-top: 20px;
`;