import styled from 'styled-components';

const Opcao = styled.li`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
  
    padding: 0 5px;
    cursor: pointer;
  
    font-size: 16px;
  
    min-width: 120px;
`
const Opcaos = styled.ul`
    display: flex;
`

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <Opcaos>
            { textoOpcoes.map( (texto) => (
                <Opcao>
                    <p>{texto.toUpperCase()}</p>
                </Opcao>
            ) ) }
        </Opcaos>
    )
}

export default OpcoesHeader;