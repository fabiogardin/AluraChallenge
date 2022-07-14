import { useState, useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { useNavigate } from 'react-router-dom';

import formaCabecalho from '../../assets/formaCabecalho.png';
import LogoAzul from '../../assets/Logoazul.png';
import Patas from '../../assets/Patas.png';
import formaBody from '../../assets/formaBody.png'
import Header from '../../Components/header';
import { BiHide, BiShow } from 'react-icons/bi';
import {
    Cabecalho,
    FormaBody,
    Container,
    ImgPatas,
    ImgCabecalho,
    ImgLogoAzul,
    TitleCad,
    AllInput,
    InputDiv,
    LabelInput,
    Input,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
    IconOlho,
} from './styles';

export default function Cadastro(){

    const { authenticated } = useContext(AuthContext);

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Cadastro", { email, name, senha });
        navigate('/login')
    }

    return(
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <Header />

                <ImgPatas src={Patas} alt='Patas de pets' />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <ImgLogoAzul src={LogoAzul} alt='Logo da empresa AdoPet' />
                <TitleCad>Ainda não tem cadastro? <br/>Então, antes de buscar seu melhor amigo, precisamos de alguns dados:</TitleCad>
            </Container>
            <AllInput onSubmit={handleSubmit}>
                <InputDiv>
                    <LabelInput htmlFor="email" >Email</LabelInput>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Escolha seu melhor email'
                        required
                    />
                </InputDiv>
                <InputDiv>
                    <LabelInput htmlFor="nome" >Nome</LabelInput>
                    <Input
                        type="text"
                        id="nome"
                        name="nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Digite seu nome completo'
                        required
                    />
                </InputDiv>
                <InputDiv>
                    <LabelInput htmlFor="senha" >Senha</LabelInput>
                    <Input
                        primary
                        type="password"
                        id="senha"
                        name="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder='Crie uma senha'
                        required
                    />
                    <IconOlho><BiHide style={{ fontSize: '25px', color:'#999999' }} /></IconOlho>
                </InputDiv>
                <InputDiv>
                    <LabelInput htmlFor="senha" >Confirme sua senha</LabelInput>
                    <Input
                        primary
                        type="password"
                        id="senha"
                        placeholder='Repita a senha criada acima'
                        required
                    />
                    <IconOlho><BiHide style={{ fontSize: '25px', color:'#999999' }} /></IconOlho>
                </InputDiv>
                <Botoes>
                    <Botao type='submit'>
                        Cadastrar
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