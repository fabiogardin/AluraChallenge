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
import Header from '../../Components/header';
import IconAccount from '../../Components/link-user';
import IconContato from '../../Components/link-contato';
import {
    Cabecalho,
    Container,
    ImgCabecalho,
    TitleCad,
    Body,
    ImgCartao,
    DadosCartao,
    TitleCartao,
    Lista,
    DadosList,
    DadosLocal,
    DadosContato,
    Cartao,
    Rodape,
    RodapeTxt,
} from './styles';

export default function Home(){
    return(
        <Cabecalho>
            <Container>
                <Header />
                <IconAccount />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <TitleCad>Olá! Veja os amigos<br/>disponíveis para adoção!</TitleCad>
            </Container>
            <Body>
                <Cartao>
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
                </Cartao>
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
                <RodapeTxt>
                    2022 - Desenvolvido por Alura.
                </RodapeTxt>
            </Rodape>
        </Cabecalho>        
    );
};