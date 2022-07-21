import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

import formaCabecalho from '../../assets/formaCabecalho.png';
import LogoAzul from '../../assets/Logoazul.png';
import Patas from '../../assets/Patas.png';
import formaBody from '../../assets/formaBody.png'
import Header from '../../Components/header-link';
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
    Error,
    Botoes,
    Botao,
    Rodape,
    RodapeTxt,
    IconOlho,
} from './styles';

export default function Cadastro(){
    const navigate = useNavigate();
    const { cadastrar } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaC, setSenhaC] = useState("");
    const [error, setError] = useState("");

    const handleCadastro = (e) => {
        e.preventDefault();
        if(!name | !email | !senha | !senhaC){
            setError("Preencha todos os campos");
            return;
        } else if(senha !== senhaC){
            setError("Senha não confere!");
            return;
        }

        const res = cadastrar(email, senha);

        if(res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
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
            <AllInput onSubmit={handleCadastro}>
                <InputDiv>
                    <LabelInput htmlFor="email" >Email</LabelInput>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
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
                        onChange={(e) => [setName(e.target.value), setError("")]}
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
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
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
                        id="senhaC"
                        name="senhaC"
                        value={senhaC}
                        onChange={(e) => [setSenhaC(e.target.value), setError("")]}
                        placeholder='Repita a senha criada acima'
                        required
                    />
                    <IconOlho><BiHide style={{ fontSize: '25px', color:'#999999' }} /></IconOlho>
                </InputDiv>
                <Error>{error}</Error>
                <Botoes>
                    <Botao Text='Cadastrar' type='submit'>Cadastrar</Botao>
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