import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header;