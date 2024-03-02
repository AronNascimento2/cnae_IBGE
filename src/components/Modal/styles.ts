import styled from "styled-components";

export const Container = styled.div`
/* Estilo para o modal */

  display: block; /* Exibe o modal */
  position: fixed; /* Fixa o modal na tela */
  z-index: 1; /* Define a ordem de empilhamento */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */


/* Estilo para o conteúdo do modal */
.modal-content {
  background-color: #fefefe;
  margin: 10% auto; /* Centraliza verticalmente e deixa uma margem em relação ao topo */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px; /* Largura máxima do modal */
}

/* Estilo para o botão de fechar */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

`