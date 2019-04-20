var id =0
var checkbox = []
function addItem(){
    var input = document.querySelector("#item").value
    if(input!=""){
    var pai = document.querySelector("#taskList")
    var item = `<li class="t${id} list-group-item" id="taskList">${input}</li>`;
    pai.insertAdjacentHTML('beforeend',item);
    id++
    }else{
        alert("null")
    } 

}
