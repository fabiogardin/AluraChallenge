import formaCabecalho from '../../assets/formaCabecalho.png';
import IconAccount from '../../Components/link-user';
import Header from '../../Components/header-link';
import formaBody from '../../assets/formaBody.png'
import {
    Cabecalho,
    Container,
    ImgCabecalho,
    FormaBody,
    TitleCad,
    AllInput,
    InputDiv,
    Input,
    LabelInput,
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
                <IconAccount />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <TitleCad>Envie uma mensagem para a pessoa ou instituição que está cuidado do animal:</TitleCad>
            </Container>
            <AllInput>
                <InputDiv>
                    <LabelInput htmlFor="nome" >Nome</LabelInput>
                    <Input type="text" id="nome" placeholder='Insira seu nome completo' required />

                    <LabelInput htmlFor="telefone" >Telefone</LabelInput>
                    <Input type="tel" id="telefone" placeholder='Insira seu telefone e/ou whatsapp' required />

                    <LabelInput htmlFor="nome-animal" >Nome do animal</LabelInput>
                    <Input type="text" id="nome-animal" placeholder='Por qual animal você se interessou?' required />

                    <LabelInput htmlFor="mensagem" >Mensagem</LabelInput>
                    <TextArea type="text" id="mensagem" rows="7" placeholder='Escreva sua mensagem' required />
                </InputDiv>
                <Botoes>
                    <form action='/home'><Botao type='submit'>Enviar</Botao></form>
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