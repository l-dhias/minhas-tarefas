import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

export const EstiloGlobal = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Roboto, sans-serif;
list-style:none;
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin: 40px 0;
  font-weight: bold;
  font-size: 18px;
`

export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
  dorder-color: #6666;
  color: #6666;
  background-color: #fff;
  font-weight: bold;
  width: 100%;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azulEscuro};
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
