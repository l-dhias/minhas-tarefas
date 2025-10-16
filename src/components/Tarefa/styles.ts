import styled from 'styled-components'
import Variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Tarefas'
import { Botao } from '../../styles'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  pararremtro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.pararremtro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return Variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return Variaveis.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return Variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return Variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const BotaoRemover = styled(Botao)`
  background-color: ${Variaveis.vermelho};
`
