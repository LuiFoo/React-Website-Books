import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex; 
    font-size: 30px;
    margin-right: 10px;
`

const ImagemLogo = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <ImagemLogo 
                src={logo} 
                alt="Imagem Logo"
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;