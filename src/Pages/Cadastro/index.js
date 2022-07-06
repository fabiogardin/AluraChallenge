import styled from 'styled-components';
import formaCabecalho from '../../assets/formaCabecalho.png';
import LogoAzul from '../../assets/Logoazul.png';
import Patas from '../../assets/Patas.png';
import formaBody2 from '../../assets/formaBody2.png'
import { BiEnvelope, BiHomeAlt, BiHide, BiShow } from 'react-icons/bi';
import {
    Container,
    IconCasa,
    IconEmail,
    ImgCabecalho,
    ImgLogoBranco,
    Title,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
} from '../../styles';

export default function Cadastro(){
    return(
        <Cabecalho>
            <FormaBody2 src={formaBody2} />
            <Container>
                <IconCasa><BiHomeAlt style={{fontSize: '30px', color:'#FFFFFF'}} /></IconCasa>
                <IconEmail><BiEnvelope style={{fontSize: '30px', color:'#FFFFFF'}} /></IconEmail>

                <ImgPatas src={Patas} alt='Patas de pets' />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <ImgLogoAzul src={LogoAzul} alt='Logo da empresa AdoPet' />
                <TitleCad>Ainda não tem cadastro? <br/>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</TitleCad>
            </Container>
            <AllInput>
                <InputDiv>
                    <LabelInput for="email" >Email</LabelInput>
                    <Input type="email" id="email" placeholder='Escolha seu melhor email' required />
                </InputDiv>
                <InputDiv>
                    <LabelInput for="nome" >Nome</LabelInput>
                    <Input type="text" id="nome" placeholder='Digite seu nome completo' required />
                </InputDiv>
                <InputDiv>
                    <LabelInput for="senha" >Senha</LabelInput>
                    <Input type="password" id="senha" placeholder='Crie uma senha' required />
                    <IconOlho><BiHide style={{ fontSize: '25px', color:'#999999' }} /></IconOlho>
                </InputDiv>
                <InputDiv>
                    <LabelInput for="senha" >Confirme sua senha</LabelInput>
                    <Input type="password" id="senha" placeholder='Repita a senha criada acima' required />
                    <IconOlho><BiHide style={{ fontSize: '25px', color:'#999999' }} /></IconOlho>
                </InputDiv>
            </AllInput>
            <Botoes2>
                <Botao2 href="#">
                    Cadastrar
                </Botao2>
            </Botoes2>
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

const FormaBody2 = styled.img`
    position: absolute;
    width: 84px;
    height: 415px;
    top: 368px;
    left: 0px;
    right: auto;
`;

const ImgPatas = styled.img`
    position: absolute;
    left: auto;
    right: 0;
`;

const ImgLogoAzul = styled(ImgLogoBranco)`

`;

const TitleCad = styled(Title)`
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

const AllInput = styled.div`
    
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
    gap: 4px;
`;

const LabelInput = styled.label`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    text-align: center;

    color: #737380;
`;

const Input = styled.input`
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

const IconOlho = styled.i`
    position: relative;
    z-index: 2;
    left: 35%;
    bottom: 32px;
`;

const Botoes2 = styled(Botoes)`
    margin-top: 24px;
`;

const Botao2 = styled(Botao)`
    width: 148px;
`;

const RodapeTxt2 = styled(RodapeTxt)`
    margin-top: 80px;
`;