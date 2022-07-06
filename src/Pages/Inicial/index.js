import Logobranco from '../../assets/Logobranco.png';
import formaCabecalho from '../../assets/formaCabecalho.png';
import pets from '../../assets/pets.png';
import formaBody from '../../assets/formaBody.png';
import { BiEnvelope, BiHomeAlt } from 'react-icons/bi';
import {
    Cabecalho,
    FormaBody,
    Container,
    IconCasa,
    IconEmail,
    ImgCabecalho,
    ImgLogoBranco,
    Title,
    Body,
    Paragrafo,
    Botoes,
    Botao,
    ImagemPet,
    Pets,
    Rodape,
    RodapeTxt
 } from '../../styles';

function Inicial(){
    return (
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <IconCasa><BiHomeAlt style={{fontSize: '30px', color:'#FFFFFF'}} /></IconCasa>
                <IconEmail><BiEnvelope style={{fontSize: '30px', color:'#FFFFFF'}} /></IconEmail>

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <ImgLogoBranco src={Logobranco} alt='Logo da empresa AdoPet' />
                <Title>Boas-vindas!</Title>
            </Container>
            <Body>
                <Paragrafo>
                Que tal mudar sua vida adotando seu novo melhor amigo? Vem com a gente!
                </Paragrafo>
            </Body>
            <Botoes>
                <Botao href="#">
                    Já tenho conta
                </Botao>
                <Botao href="#">
                    Quero me cadastrar
                </Botao>
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

export default Inicial;



