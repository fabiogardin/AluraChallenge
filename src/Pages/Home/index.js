import styled from 'styled-components';
import formaCabecalho from '../../assets/formaCabecalho.png';
import Dunga from '../../assets/petDunga.png';
import Amora from '../../assets/petAmora.png';
import Felicia from '../../assets/petFelicia.png';
import Fiona from '../../assets/petFiona.png';
import Lua from '../../assets/petLua.png';
import Sid from '../../assets/petSid.png';
import Sirius from '../../assets/petSirius.png';
import Yoda from '../../assets/petYoda.png';
import Zelda from '../../assets/petZelda.png';
import IconCasa from '../../Components/link-casa';
import IconEmail from '../../Components/link-email';
import IconAccount from '../../Components/link-user';
import IconContato from '../../Components/link-contato';
import {
    Container,
    ImgCabecalho,
    Title,
    Rodape,
    RodapeTxt,
} from '../../styles';

export default function Home(){
    return(
        <Cabecalho>
            <Container>
                <IconCasa />
                <IconEmail />
                <IconAccount />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <TitleCad>Olá! Veja os amigos<br/>disponíveis para adoção!</TitleCad>
            </Container>
            <Body>
                <Cartao1>
                    <ImgCartao src={Dunga} alt='Imagem do cachorro Dunga.' />
                    <DadosCartao>
                        <TitleCartao>Dunga</TitleCartao>
                        <Lista>
                            <DadosList>2 anos</DadosList>
                            <DadosList>Porte pequeno</DadosList>
                            <DadosList>Calmo e educado</DadosList>
                            <br/>
                            <DadosLocal>Rio de Janeiro (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao1>
                <Cartao>
                    <ImgCartao src={Felicia} alt='Imagem da gata Felicia.' />
                    <DadosCartao>
                        <TitleCartao>Felícia</TitleCartao>
                        <Lista>
                            <DadosList>6 meses</DadosList>
                            <DadosList>Porte pequeno</DadosList>
                            <DadosList>Ativa e carinhosa</DadosList>
                            <br/>
                            <DadosLocal>Nova Iguaçu (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao>
                <Cartao>
                    <ImgCartao src={Sirius} alt='Imagem do cachorro Sirius.' />
                    <DadosCartao>
                        <TitleCartao>Sirius</TitleCartao>
                        <Lista>
                            <DadosList>6 meses</DadosList>
                            <DadosList>Porte grande</DadosList>
                            <DadosList>Ativo e educado</DadosList>
                            <br/>
                            <DadosLocal>Duque de Caxias (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao>
                <Cartao>
                    <ImgCartao src={Fiona} alt='Imagem do cadela Fiona.' />
                    <DadosCartao>
                        <TitleCartao>Fiona</TitleCartao>
                        <Lista>
                            <DadosList>3 anos</DadosList>
                            <DadosList>Porte pequeno</DadosList>
                            <DadosList>Calma e carinhosa</DadosList>
                            <br/>
                            <DadosLocal>São Gonçalo (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao>
                <Cartao>
                    <ImgCartao src={Sid} alt='Imagem do cachorro Sid.' />
                    <DadosCartao>
                        <TitleCartao>Sid</TitleCartao>
                        <Lista>
                            <DadosList>8 meses</DadosList>
                            <DadosList>Porte médio/grande</DadosList>
                            <DadosList>Brincalhão e amável</DadosList>
                            <br/>
                            <DadosLocal>Rio de Janeiro (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao>
                <Cartao>
                    <ImgCartao src={Yoda} alt='Imagem do gato Yoda.' />
                    <DadosCartao>
                        <TitleCartao>Yoda</TitleCartao>
                        <Lista>
                            <DadosList>1 ano</DadosList>
                            <DadosList>Porte médio</DadosList>
                            <DadosList>Ativo e carinhoso</DadosList>
                            <br/>
                            <DadosLocal>Nova Iguaçu (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao>
                <Cartao>
                    <ImgCartao src={Lua} alt='Imagem da gata Lua.' />
                    <DadosCartao>
                        <TitleCartao>Lua</TitleCartao>
                        <Lista>
                            <DadosList>6 meses</DadosList>
                            <DadosList>Porte médio</DadosList>
                            <DadosList>Ativa e carinhosa</DadosList>
                            <br/>
                            <DadosLocal>Duque de Caxias (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao>
                <Cartao>
                    <ImgCartao src={Amora} alt='Imagem da filhote Amora.' />
                    <DadosCartao>
                        <TitleCartao>Amora</TitleCartao>
                        <Lista>
                            <DadosList>45 dias</DadosList>
                            <DadosList>Porte grande</DadosList>
                            <DadosList>Calma e carinhosa</DadosList>
                            <br/>
                            <DadosLocal>São Gonçalo (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao>
                <Cartao>
                    <ImgCartao src={Zelda} alt='Imagem da gata Zelda.' />
                    <DadosCartao>
                        <TitleCartao>Zelda</TitleCartao>
                        <Lista>
                            <DadosList>5 meses</DadosList>
                            <DadosList>Porte médio</DadosList>
                            <DadosList>Ativa e amável</DadosList>
                            <br/>
                            <DadosLocal>Rio de Janeiro (RJ)</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Cartao>
            </Body>            
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

const Body = styled(Container)`
    gap: 24px;
`;

const TitleCad = styled(Title)`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    color: #3772FF;

    position: absolute;
    margin: 145px 30px 0 30px;
    text-align: center;
`;

const Cartao = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background: #F7F7F7;
    align-items: center;
    padding: 24px;
`;

const Cartao1 = styled(Cartao)`
    margin-top: -60px;
`;

const ImgCartao = styled.img`
    width: 148px;
    height: 148px;

`;

const Lista = styled.ul`
    height: 130px;
`;

const DadosCartao = styled.div`
    width: 50%;

`;

const TitleCartao = styled.h4`    
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 8px;

    color: #3772FF;
`;

const DadosList = styled.li`
    font-size: 14px;
    line-height: 20px;
    list-style-type: none;

    color: #737380;
`;

const DadosLocal = styled.li`
    font-size: 12px;
    line-height: 16px;
    list-style-type: none;

    color: #737380;
`;

const DadosContato = styled.li`
    font-size: 10px;
    line-height: 16px;
    list-style-type: none;
    margin-left: 30px;
    margin-top: 10px;

    color: #737380;
`;

const RodapeTxt2 = styled(RodapeTxt)`
    margin-top: 20px;
`;