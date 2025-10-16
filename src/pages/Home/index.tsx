import { BarraLateral } from '../../containers/Barralateral'
import { ListaDeTarefas } from '../../containers/ListaDeTarefas'
import { BotaoAdicionar } from '../../components/BotaoAdicionar'

export const Home = () => (
  <>
    <BarraLateral mostarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)
