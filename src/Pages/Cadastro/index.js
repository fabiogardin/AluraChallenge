import formaCabecalho from '../../assets/formaCabecalho.png';
import LogoAzul from '../../assets/Logoazul.png';
import Patas from '../../assets/Patas.png';
import formaBody from '../../assets/formaBody.png'
import Header from '../../Components/header';
import { BiHide, BiShow } from 'react-icons/bi';
import {
    Cabecalho,
    FormaBody,
    Container,
    ImgPatas,
    ImgCabecalho,
    ImgLogoAzul,
    TitleCad,
    AllInput,
    InputDiv,
    LabelInput,
    Input,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
    IconOlho,
} from './styles';

export default function Cadastro(){
    return(
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <Header />

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
                    <Input style={{width: '23%'}} type="password" id="senha" placeholder='Crie uma senha' required />
                    <IconOlho><BiHide style={{ fontSize: '25px', color:'#999999' }} /></IconOlho>
                </InputDiv>
                <InputDiv>
                    <LabelInput for="senha" >Confirme sua senha</LabelInput>
                    <Input style={{width: '23%'}} type="password" id="senha" placeholder='Repita a senha criada acima' required />
                    <IconOlho><BiHide style={{ fontSize: '25px', color:'#999999' }} /></IconOlho>
                </InputDiv>
            </AllInput>
            <Botoes>
                <Botao href='/login'>
                    Cadastrar
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