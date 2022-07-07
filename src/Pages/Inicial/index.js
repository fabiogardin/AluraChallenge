import Logobranco from '../../assets/Logobranco.png';
import formaCabecalho from '../../assets/formaCabecalho.png';
import pets from '../../assets/pets.png';
import formaBody from '../../assets/formaBody.png';
import IconInicial from '../../Components/link-inicial';
import IconEmailInicio from '../../Components/link-email0';
import BotaoLogin from '../../Components/link-login';
import BotaoCadastro from '../../Components/link-cadastro';
import {
    Cabecalho,
    FormaBody,
    Container,
    ImgCabecalho,
    ImgLogoBranco,
    Title,
    Body,
    Paragrafo,
    Botoes,
    ImagemPet,
    Pets,
    Rodape,
    RodapeTxt
 } from '../../styles';

export default function Inicial(){
    return (
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <IconInicial />
                <IconEmailInicio />
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
                <BotaoLogin />
                <BotaoCadastro />
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