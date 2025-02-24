import styled from 'styled-components';
import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    align-items: center;
    flex-wrap: wrap;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor='#EB9B00' 
                tamanhoFonte='36px' 
                alinhamento='center'
            >
                ÚTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} />
                )) }
            </NovosLivrosContainer>
            <CardRecomenda
                titulo='Talvez você se interesse por'
                subtitulo='Angular 11'
                descricao='Construindo uma aplicação com a plataforma Google'
                img={imagemLivro}
            />
            <CardRecomenda
                titulo='Talvez você se interesse por'
                subtitulo='Angular 12'
                descricao='Construindo uma aplicação com a plataforma Google'
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;