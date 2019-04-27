/*
 * Copyright (c) 2019 Universidade Federal de Goiás
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

var id = 0;
var empty = 1;
const listaTodos = [];
const input = document.querySelector("#item");

//funcao executada ao dar enter com input ativo
function keyEvent(){
  key = event.which || event.keyCode;
  if(key == 13){
    adicionarTodo();
  }
}

//funcao executada ao clicar no botao
function adicionarTodo() {
  verificarInputVazio();
  if(empty == 0){
    adicionarItemLista();
  }
  limparInput();
}

//verifica se o input está preenchido
function verificarInputVazio() {
  if (
    input.value == undefined ||
    input.value == null ||
    input.value.length < 1
  ) {
    empty = 1;
    return alert("Ops, você não descreveu a tarefa!");
  } else {
    empty = 0;
  }
}

//adiciona o item na lista tanto no html, quanto no array de items da lista
function adicionarItemLista() {
  //pega o elemento no html onde a lista será mostrada
  let lista = document.querySelector("#taskList");
  //'constroi' o elemento com o valor do input
  let itemLista = `<li class="t${id} list-group-item" id="task">${
    input.value
  }</li>`;
  lista.insertAdjacentHTML("beforeend", itemLista);
  //atualiza o id do item da lista
  id++;
  //adiciona item no array
  listaTodos.push(input.value);
}

//limpa o input após adicionarmos um item
function limparInput() {
  return (input.value = null);
}
