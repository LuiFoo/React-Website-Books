import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [
    { imagem: perfil, descricao: 'Imagem Perfil'},
    { imagem: sacola, descricao: 'Imagem Sacola'}
];

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
                <Icone>
                    <img src={icone.imagem} alt={icone.descricao} />
                </Icone>
            ) ) }
        </Icones>
    )
}

export default IconesHeader;