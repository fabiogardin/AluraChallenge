import styled from 'styled-components';
import formaCabecalho from '../../assets/formaCabecalho.png';
import User from '../../assets/user-foto.png';
import { BiEnvelope, BiHomeAlt, BiHide, BiShow, BiUserCircle } from 'react-icons/bi';
import {
    Container,
    IconCasa,
    IconEmail,
    ImgCabecalho,
    Title,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
} from '../../styles';

export default function Mensagem(){
    return(
        <Cabecalho>
            <Container>
                <IconCasa><BiHomeAlt style={{fontSize: '30px', color:'#FFFFFF'}} /></IconCasa>
                <IconEmail><BiEnvelope style={{fontSize: '30px', color:'#FFFFFF'}} /></IconEmail>
                <IconUser src={User} alt='Foto do usuário logado' />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <TitleCad>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.:</TitleCad>
            </Container>
            <AllInput>
                <Perfil>
                    <TitlePerfil>Perfil</TitlePerfil>
                    <FotoNome>Foto</FotoNome>
                    <FotoUser src={User} alt='Foto do usuário logado' />
                    <EditarFoto href='#'>Clique na foto para editar</EditarFoto>
                </Perfil>
                <InputDiv>
                    <LabelInput for="nome" >Nome</LabelInput>
                    <Input type="text" id="nome" placeholder='Insira seu nome completo' required />

                    <LabelInput for="telefone" >Telefone</LabelInput>
                    <Input type="tel" id="telefone" placeholder='Insira seu telefone e/ou whatsapp' required />

                    <LabelInput for="cidade" >Cidade</LabelInput>
                    <Input type="text" id="cidade" placeholder='Por qual animal você se interessou?' required />

                    <LabelInput for="sobre" >Sobre</LabelInput>
                    <TextArea type="text" id="sobre" rows="7" placeholder='Escreva sua mensagem' required />
                </InputDiv>

                <Botoes2>
                    <Botao2 href="#">
                        Salvar
                    </Botao2>
                </Botoes2>
            </AllInput>
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

const IconUser = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    left: auto;
    right: 40px;
    top: 43px;
`;

const TitleCad = styled(Title)`
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #3772FF;
    position: absolute;
    margin: 145px 50px 0 50px;
    text-align: center;
`;

const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 24px;
    gap: 4px;
`;

const TitlePerfil = styled.h2`    
    width: 85%;
    font-weight: 600;
    font-size: 21px;
    line-height: 24px;
    color: #737380;
    text-align: center;
`;

const FotoNome = styled.h4`
    width: 85%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #3772FF;
`;

const FotoUser = styled.img`
    width: 80px;
    height: 80px;
`;

const EditarFoto = styled.a`
    font-size: 12px;
    line-height: 24px;
    text-align: center;
    color: #FC7071;
`;

const AllInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: -40px 24px 24px 24px;
    background-color: #F6F6F6;
    border-radius: 10px;

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
    width: 85%;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 8px;
    color: #3772FF;
`;

const Input = styled.input`
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

const TextArea = styled.textarea`
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

const Botoes2 = styled(Botoes)`
    margin-top: 8px;
    margin-bottom: 32px;
`;

const Botao2 = styled(Botao)`
    width: 148px;
`;

const RodapeTxt2 = styled(RodapeTxt)`
    margin-top: 0px;
`;