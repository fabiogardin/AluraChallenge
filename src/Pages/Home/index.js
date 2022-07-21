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
import formaBody from '../../assets/formaBody.png'
import Header from '../../Components/header-link';
import IconAccount from '../../Components/link-user';
import IconContato from '../../Components/link-contato';
import {
    Cabecalho,
    Container,
    ImgCabecalho,
    FormaBody,
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
    Item,
    Rodape,
    RodapeTxt,
} from './styles';

export default function Home(){

    const pets = [
        {
            Nome:"Dunga",
            Imagem: require('../../assets/petDunga.png'),
            Alt: "Imagem do cachorro Dunga",
            Idade:"2 anos",
            Tamanho:"Porte pequeno",
            Detalhe:"Calmo e educado",
            Local:"Rio de Janeiro (RJ)"
        },

        {
            Nome:"Felicia",
            Imagem: require('../../assets/petFelicia.png'),
            Alt: "Imagem da gata Felicia.",
            Idade:"6 meses",
            Tamanho:"Porte pequeno",
            Detalhe:"Ativa e carinhosa",
            Local:"Nova Iguaçu (RJ)"
        },
        
        {
            Nome:"Sirius",
            Imagem: require('../../assets/petSirius.png'),
            Alt: "Imagem do cachorro Sirius.",
            Idade:"6 meses",
            Tamanho:"Porte grande",
            Detalhe:"Ativo e educado",
            Local:"Duque de Caxias (RJ)"
        },
        
        {
            Nome:"Fiona",
            Imagem: require('../../assets/petFiona.png'),
            Alt: "Imagem do cadela Fiona.",
            Idade:"3 anos",
            Tamanho:"Porte pequeno",
            Detalhe:"Calma e carinhosa",
            Local:"São Gonçalo (RJ)"
        },
        
        {
            Nome:"Sid",
            Imagem: require('../../assets/petSid.png'),
            Alt: "Imagem do cachorro Sid.",
            Idade:"8 meses",
            Tamanho:"Porte médio/grande",
            Detalhe:"Brincalhão Amável",
            Local:"Rio de Janeiro (RJ)"
        },
        
        {
            Nome:"Yoda",
            Imagem: require('../../assets/petYoda.png'),
            Alt: "Imagem do gato Yoda.",
            Idade:"1 ano",
            Tamanho:"Porte médio",
            Detalhe:"Ativo e carinhoso",
            Local:"Nova Iguaçu (RJ)"
        },
        
        {
            Nome:"Lua",
            Imagem: require('../../assets/petLua.png'),
            Alt: "Imagem da gata Lua.",
            Idade:"6 meses",
            Tamanho:"Porte médio",
            Detalhe:"Ativa e carinhosa",
            Local:"Duque de Caxias (RJ)"
        },   
        
        {
            Nome:"Amora",
            Imagem: require('../../assets/petAmora.png'),
            Alt: "Imagem da filhote Amora.",
            Idade:"45 dias",
            Tamanho:"Porte grande",
            Detalhe:"Calma e carinhosa",
            Local:"São Gonçalo (RJ)"
        },
        
        {
            Nome:"Zelda",
            Imagem: require('../../assets/petZelda.png'),
            Alt: "Imagem da gata Zelda",
            Idade:"5 meses",
            Tamanho:"Porte médio",
            Detalhe:"Ativa e amável",
            Local:"Rio de Janeiro (RJ)",
        }
    ];

    const listaPets = pets.map(
        (item, index) =>
            (
                <Item key={ index } >
                    <ImgCartao src={item.Imagem} alt={item.Alt} />
                    <DadosCartao>
                        <TitleCartao>{item.Nome}</TitleCartao>
                        <Lista>
                            <DadosList>{item.Idade}</DadosList>
                            <DadosList>{item.Tamanho}</DadosList>
                            <DadosList>{item.Detalhe}</DadosList>
                            <br/>
                            <DadosLocal>{item.Local}</DadosLocal>
                            <DadosContato>falar com responsável</DadosContato>
                            <IconContato />
                        </Lista>
                    </DadosCartao>
                </Item>
            )
    )

    return(
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <Header />
                <IconAccount />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <TitleCad>Olá! Veja os amigos disponíveis para adoção!</TitleCad>
            </Container>
            <Body>
                {listaPets}
            </Body>            
            <Rodape>
                <RodapeTxt>
                    2022 - Desenvolvido por Alura.
                </RodapeTxt>
            </Rodape>
        </Cabecalho>        
    );
};