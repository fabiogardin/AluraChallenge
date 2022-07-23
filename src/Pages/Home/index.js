import { useEffect } from 'react';
import { useState } from 'react';
import api from '../../Services/api';
import formaCabecalho from '../../assets/formaCabecalho.png';
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
    Item,
    Rodape,
    RodapeTxt,
} from './styles';

export default function Home(){

    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function loadCards(){
        const cardsPets = await api.get("/api/adotars?populate=imagem")
        setCards(cardsPets.data.data)
        }

        loadCards();
    }, [])


    const listaPets = cards.map(
        (item) =>
            (
                <Item key={ item?.id } >
                    <ImgCartao src={ `http://localhost:1337${item?.attributes?.imagem?.data?.attributes?.url}` } />
                    <DadosCartao>
                        <TitleCartao>{item?.attributes?.nome}</TitleCartao>
                        <Lista>
                            <DadosList>{item?.attributes?.idade}</DadosList>
                            <DadosList>{item?.attributes?.tamanho}</DadosList>
                            <DadosList>{item?.attributes?.detalhe}</DadosList>
                            <br/>
                            <DadosLocal>{item?.attributes?.local}</DadosLocal>
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