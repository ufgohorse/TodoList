var id = 0;
const listaTodos = [];
const input = document.querySelector("#item");

//funcao executada ao clicar no botao
function adicionarTodo() {
  verificarInputVazio();
  adicionarItemLista();
  limparInput();
}

//verifica se o input está preenchido
function verificarInputVazio() {
  if (
    input.value == undefined ||
    input.value == null ||
    input.value.length < 1
  ) {
    return alert("Ops, você não descreveu a tarefa!");
  }
}

//adiciona o item na lista tanto no html, quanto no array de items da lista
function adicionarItemLista() {
  //pega o elemento no html onde a lista será mostrada
  let lista = document.querySelector("#taskList");
  //'constroi' o elemento com o valor do input
  let itemLista = `<li class="t${id} list-group-item" id="taskList">${
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
