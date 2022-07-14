import { useState, useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';

import formaCabecalho from '../../assets/formaCabecalho.png';
import LogoAzul from '../../assets/Logoazul.png';
import Patas from '../../assets/Patas.png';
import formaBody from '../../assets/formaBody.png'
import Header from '../../Components/header';
import { BiHide, BiShow } from 'react-icons/bi';
import {
    Cabecalho,
    FormaBody,
    ImgPatas,
    Container,
    ImgCabecalho,
    ImgLogoAzul,
    TitleCad,
    AllInput,
    InputDiv,
    LabelInput,
    Input,
    BotaoSenha,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
    IconOlho,
} from './styles';

export default function Login(){

    const { authenticated, login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", { email, password });
        login(email, password); //integração com contexto / api
    }

    return(
        <Cabecalho>
            <FormaBody src={formaBody} />
            <Container>
                <Header />

                <ImgPatas src={Patas} alt='Patas de pets' />

                <ImgCabecalho src={formaCabecalho} alt='Forma geométrica para layout' />
                <ImgLogoAzul src={LogoAzul} alt='Logo da empresa AdoPet' />
                <TitleCad>Já tem conta? Faça seu login:</TitleCad>
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
                    <LabelInput htmlFor="senha" >Senha</LabelInput>
                    <Input 
                        primary
                        type="password"
                        id="senha"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Digite sua senha'
                        required
                    />
                    <IconOlho><BiHide style={{ fontSize: '25px' }} color='#999999' /></IconOlho>
                </InputDiv>
                <BotaoSenha href='#'>Esqueci minha senha.</BotaoSenha>
            <Botoes>
                <Botao type="submit" >
                    Entrar
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