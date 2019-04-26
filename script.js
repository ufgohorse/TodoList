var id = 0;
var empty = 1;
const listaTodos = [];
const listaChecks = [];
const input = document.querySelector("#item");

//funcao executada ao dar checklist
function check(id){
    var check = document.getElementsByClassName("c"+id)[0];
  if(listaChecks[id] == 0){
    check.style.backgroundColor = "green";
    listaChecks[id] = 1;
  } else {
    check.style.backgroundColor = "white";
    listaChecks[id] = 0;
  }
}

//funcao executada ao dar enter com input ativo
function keyEvent(){
  key = event.keycode || event.which;
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
  let itemLista = document.createElement("li");
  let checkBox = document.createElement("button");

  itemLista.setAttribute("class", "t"+id+" list-group-item");
  itemLista.setAttribute("id", "task");
  itemLista.innerHTML = input.value;
  lista.appendChild(itemLista);

  checkBox.setAttribute("class", "c"+id+" list-group-item");
  checkBox.setAttribute("id", "cheka");
  checkBox.setAttribute("onclick", "check("+id+")");
  listaChecks.push(0);
  lista.appendChild(checkBox);

  //atualiza o id do item da lista
  id++;
  //adiciona item no array
  listaTodos.push(input.value);
}

//limpa o input após adicionarmos um item
function limparInput() {
  return (input.value = null);
}
