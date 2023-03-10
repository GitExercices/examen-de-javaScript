let addtodos = document.querySelector('.add-todo');//ajout tache
let todoslist = document.querySelector('.todos');//les taches
let clearButton = document.querySelector('button.clear');//bouton effacer
let searchInput = document.querySelector('input.search-to-dos');//rechercher des taches

const todolistAppend = todo =>{
    let listTemplate = `<li class="todo-item"><input type="checkbox">
    ${todo}<i class="fa regular fa-trash can" aria-hidden="true"></i>
    </li>`
    todoslist.innerHTML += listTemplate;
}
//let check = `<input type="checkbox">`
check.addEventListener('click', function() {
    check.classList.add('paragraph')
})



const filterList = searchValue =>{
    let lists = todoslist.querySelectorAll('li');
    lists.forEach(list =>{
        let listText = list.innerText.toLowerCase();
        if (listText.indexOf(searchValue) != -1){
            list.classList.remove('filtered');
        } else {
            list.classList.add('filtered');
            let filteredList = todoslist.querySelectorAll('.filtered')
        }
    })
}

addtodos.addEventListener('submit', e=>{
    e.preventDefault();
    let listValue = addtodos.querySelector('input').value.trim();
    if(listValue.length){
        todolistAppend(listValue);
    }
    
    addtodos.reset();
})



todoslist.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


clearButton.addEventListener('click', ()=>{
    todoslist.innerHTML =""
})

searchInput.addEventListener('keyup', e=>{
    let searchTerm = e.target.value.trim().toLowerCase();
    filterList(searchTerm);
})
