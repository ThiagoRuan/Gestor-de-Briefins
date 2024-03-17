import 'react-toastify/dist/ReactToastify.css'
import Grid from './components/Grid'
import GlobalStyle from './styles/GlobalStyle'
import BriefingNovo from './components/Input'

function App() {

  return (
    <>
      <GlobalStyle/>
      <header><strong>Gestor de Briefins</strong> </header>
      <BriefingNovo />
      <Grid/>
      <footer>Feito por Thiago Ruan</footer>
    </>
  )
}

export default App
