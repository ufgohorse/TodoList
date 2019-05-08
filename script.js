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
var listaTodos = [];
var ListaTodosBD = "";
var lista = document.querySelector("#taskList");
lista.addEventListener("click", checkar)
const input = document.querySelector("#item");

window.onload = function() {
  listaTodos = JSON.parse(localStorage.getItem("todoList"));
  listaTodos.forEach(function(element) {
    console.log(element.todo)
    var item = `<li class = "list-group-item task" id="li-${id}">${element.todo}<input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
    lista.insertAdjacentHTML("beforeend", item);
    //if we got a checked box, then style
    if(element.marcado) {
      var li = document.getElementById("li-"+id);
      li.style.textDecoration = "line-through";
      li.style.backgroundColor = "rgb(112, 170, 144)";
      li.childNodes[1].checked = true;
    }else{
      var li = document.getElementById("li-"+id);
      li.parentNode.style.textDecoration = "none";
      li.style.backgroundColor = "slategray";
    }
    id++;
  }); 
}

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
  //'constroi' o elemento com o valor do input
  let itemLista = `<li class="list-group-item task" id="li-${id}">${input.value} <input id="-${id}" class="checkboxes" type="checkbox"></li>`;
  lista.insertAdjacentHTML("beforeend", itemLista);
  //atualiza o id do item da lista
  id++;
  //adiciona item no array
  ListaTodosBD = {todo: input.value, marcado:false};
  listaTodos.push(ListaTodosBD);
  addToLocalStorage()
}

//limpa o input após adicionarmos um item
function limparInput() {
  return (input.value = null);
}

function checkar(event) {
  const element = event.target;
  if(element.type === "checkbox") {
    listaTodos = JSON.parse(localStorage.getItem("todoList"));
    console.log(listaTodos[element.id.split('-')[1]].marcado)
    if(!(listaTodos[element.id.split('-')[1]].marcado)){
      element.parentNode.style.textDecoration = "line-through";
      element.parentNode.style.backgroundColor = "rgb(112, 170, 144)";
      listaTodos[element.id.split('-')[1]].marcado = true;
      addToLocalStorage()
    }else{
      element.parentNode.style.textDecoration = "none";
      element.parentNode.style.backgroundColor = "slategray";
      listaTodos[element.id.split('-')[1]].marcado = false;
      addToLocalStorage()
    }
   
  }
  console.log(element)
}

function addToLocalStorage(){
  if(typeof(Storage) !== "undefined") {
    localStorage.setItem("todoList", JSON.stringify(listaTodos));
  }
  else {
    alert("browser doesn't support local storage!");
  }
}
