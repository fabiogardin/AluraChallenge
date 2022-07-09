import Logobranco from '../../assets/Logobranco.png';
import formaCabecalho from '../../assets/formaCabecalho.png';
import pets from '../../assets/pets.png';
import formaBody from '../../assets/formaBody.png';
import IconInicial from '../../Components/link-inicial';
import IconEmailInicio from '../../Components/link-email0';
import {
    Cabecalho,
    FormaBody,
    Container,
    ImgCabecalho,
    ImgLogoBranco,
    LogoBranco,
    DivLink,
    Title,
    Body,
    Paragrafo,
    Botoes,
    Botao,
    ImagemPet,
    Pets,
    Rodape,
    RodapeTxt,
 } from './styles';

export default function Inicial(){
    return (
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <DivLink>
                    <LogoBranco src={Logobranco} alt='Logo da empresa AdoPet' />
                    <IconInicial />
                    <IconEmailInicio />
                </DivLink>
                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <ImgLogoBranco src={Logobranco} alt='Logo da empresa AdoPet' />
                <Title>Boas-vindas!</Title>
            </Container>
            <Body>
                <Paragrafo>
                <span>Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!</span>
                </Paragrafo>
            </Body>
            <Botoes>
                <Botao href='/login' >Já tenho conta</Botao>
                <Botao href='/cadastro' >Quero me cadastrar</Botao> 
            </Botoes>
            <ImagemPet>
                <Pets src={pets} alt='Imagem de dois pets' />
            </ImagemPet>
            <Rodape>
                <RodapeTxt>
                    2022 - Desenvolvido por Alura.
                </RodapeTxt>
            </Rodape>
        </Cabecalho>
    );
};