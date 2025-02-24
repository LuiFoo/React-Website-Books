import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import styled from 'styled-components'
import UltimosLancamentos from './componentes/UltimosLancamento';

const AppContainer = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;