import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import formaCabecalho from '../../assets/formaCabecalho.png';
import LogoAzul from '../../assets/Logoazul.png';
import Patas from '../../assets/Patas.png';
import formaBody from '../../assets/formaBody.png'
import Header from '../../Components/header-link';
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
    Error,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
    IconOlho,
} from './styles';

export default function Login(){

    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!email | !password){
            setError("Preencha todos os campos");
            return;
        }

        const res = login(email, password);

        if(res){
            setError(res);
            return;
        }

        navigate("/home");
        
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
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                        placeholder='Digite seu email'
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
                        onChange={(e) => [setPassword(e.target.value), setError("")]}
                        placeholder='Digite sua senha'
                        required
                    />
                    <IconOlho><BiHide style={{ fontSize: '25px' }} color='#999999' /></IconOlho>
                </InputDiv>
                <Error>{error}</Error>
                <BotaoSenha href='#'>Esqueci minha senha.</BotaoSenha>
                <Botoes>
                    <Botao Text="Entrar" type="Submit">Entrar</Botao>
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