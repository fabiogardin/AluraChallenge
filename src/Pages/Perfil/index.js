import formaCabecalho from '../../assets/formaCabecalho.png';
import User from '../../assets/user-foto.png';
import Header from '../../Components/header-link';
import formaBody from '../../assets/formaBody.png';
import {
    Cabecalho,
    Container,
    IconUser,
    ImgCabecalho,
    FormaBody,
    TitleCad,
    AllInput,
    InputDiv,
    Input,
    LabelInput,
    Perfil,
    TitlePerfil,
    FotoNome,
    FotoUser,
    EditarFoto,
    TextArea,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
} from './styles';

export default function Mensagem(){
    return(
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <Header />
                <IconUser src={User} alt='Foto do usuário logado' />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <TitleCad>Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem:</TitleCad>
            </Container>
            <AllInput>
                <Perfil>
                    <TitlePerfil>Perfil</TitlePerfil>
                    <FotoNome>Foto</FotoNome>
                    <FotoUser src={User} alt='Foto do usuário logado' />
                    <EditarFoto href='#'>Clique na foto para editar</EditarFoto>
                </Perfil>
                <InputDiv>
                    <LabelInput htmlFor="nome" >Nome</LabelInput>
                    <Input type="text" id="nome" placeholder='Insira seu nome completo' required />

                    <LabelInput htmlFor="telefone" >Telefone</LabelInput>
                    <Input type="tel" id="telefone" placeholder='Insira seu telefone e/ou whatsapp' required />

                    <LabelInput htmlFor="cidade" >Cidade</LabelInput>
                    <Input type="text" id="cidade" placeholder='Por qual animal você se interessou?' required />

                    <LabelInput htmlFor="sobre" >Sobre</LabelInput>
                    <TextArea type="text" id="sobre" rows="7" placeholder='Escreva sua mensagem' required />
                </InputDiv>
                <Botoes>
                    <form action='/perfil'><Botao type='submit'>Salvar</Botao></form>
                </Botoes>
            </AllInput>
            <Rodape>
                <RodapeTxt>
                    2022 - Desenvolvido por Alura.
                </RodapeTxt>
            </Rodape>
        </Cabecalho>        
    );
};