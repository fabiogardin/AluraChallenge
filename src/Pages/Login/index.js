import formaCabecalho from '../../assets/formaCabecalho.png';
import LogoAzul from '../../assets/Logoazul.png';
import Patas from '../../assets/Patas.png';
import formaBody from '../../assets/formaBody.png'
import Header from '../../Components/header';
import { BiHide, BiShow } from 'react-icons/bi';
import {
    Cabecalho,
    FormaBody,
    ImgPatas,
    Container,
    ImgCabecalho,
    ImgLogoAzul,
    TitleCad,
    AllInput,
    InputDiv,
    LabelInput,
    Input,
    BotaoSenha,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
    IconOlho,
} from './styles';

export default function Login(){
    return(
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <Header />

                <ImgPatas src={Patas} alt='Patas de pets' />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <ImgLogoAzul src={LogoAzul} alt='Logo da empresa AdoPet' />
                <TitleCad>Já tem conta? Faça seu login:</TitleCad>
            </Container>
            <AllInput>
                <InputDiv>
                    <LabelInput for="email" >Email</LabelInput>
                    <Input type="email" id="email" placeholder='Escolha seu melhor email' required />
                </InputDiv>
                <InputDiv>
                    <LabelInput for="senha" >Senha</LabelInput>
                    <Input primary type="password" id="senha" placeholder='Digite sua senha' required />
                    <IconOlho><BiHide style={{ fontSize: '25px' }} color='#999999' /></IconOlho>
                </InputDiv>
                <BotaoSenha href='#'>Esqueci minha senha.</BotaoSenha>
            </AllInput>
            <Botoes>
                <Botao href='/home'>
                    Entrar
                </Botao>
            </Botoes>
            <Rodape>
                <RodapeTxt>
                    2022 - Desenvolvido por Alura.
                </RodapeTxt>
            </Rodape>
        </Cabecalho>        
    );
};