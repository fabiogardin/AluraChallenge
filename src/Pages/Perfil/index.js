import formaCabecalho from '../../assets/formaCabecalho.png';
import User from '../../assets/user-foto.png';
import IconCasa from '../../Components/link-casa';
import IconEmail from '../../Components/link-email';
import {
    Cabecalho,
    Container,
    IconUser,
    ImgCabecalho,
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
            <Container>
                <IconCasa />
                <IconEmail />
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
                <Botoes>
                    <Botao href="#">
                        Salvar
                    </Botao>
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