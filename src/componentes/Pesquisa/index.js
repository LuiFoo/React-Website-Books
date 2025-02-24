import styled from 'styled-components';
import Input from '../Input';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFFFFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px
`

const DivLivros = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
        margin: 0.5rem 0;
    }
   &:hover {
       background-color: #ffffff1a;
   }
`

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisado ] = useState([]);
    console.log(livrosPesquisados);


    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livrro em nossa estante</SubTitulo>
            <Input 
                placeholder="Escreva sua proxima leitura"
                onBlur={ evento => {
                    const textoDigitado = evento.target.value;
                    const resultadoPesquisa = livros.filter( livro => livro.nome.toUpperCase().includes(textoDigitado.toUpperCase()))
                    setLivrosPesquisado(resultadoPesquisa);
                } }
            />
            { livrosPesquisados.map( livro => (
                <DivLivros>
                    <img src={livro.src} />
                    <p>{livro.nome}</p>
                </DivLivros>

            )) }

        </PesquisaContainer>
    )
}

export default Pesquisa;