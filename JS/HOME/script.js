const promt = document.getElementById('promt')
const promtTaskBar = document.getElementById('promtTaskBar')
const promtClose = document.getElementById('circle-red')
const promtMinimize = document.getElementById('circle-yellow')
const promtMazimize = document.getElementById('circle-green')
const promtImput = document.getElementById('imput-promt')
const responsePromt = document.getElementById('response-promt-home-ls')
const lsProyects = document.getElementById('response-promt-proyects-ls')
const routeBox = document.getElementById('route')
const closeTodolist = document.getElementById('circle-red-todolist')
const todolistc = document.getElementById('todolist')
function ls(folder){
    switch(folder){
        case 'Home':
            responsePromt.style.display = 'flex'
            break
        case 'Proyects':
            lsProyects.style.display = 'flex'
    }
}

function home(folder){
    routeBox.textContent = 'Home'
    responsePromt.style.display = 'none'
    lsProyects.style.display = 'none'
}

function proyects(folder){
    routeBox.textContent = 'Proyects'
    responsePromt.style.display = 'none'
    lsProyects.style.display = 'none'

}

function aboutme(folder){
    routeBox.textContent = 'About Me'
    responsePromt.style.display = 'none'
    lsProyects.style.display = 'none'

}

function todolist(folder){
    if (folder=="Proyects"){
        lsProyects.style.display = 'none'
        todolistc.style.display = 'block'
    }
}



const commads = {
    "cd Home" : home,
    "cd Proyects": proyects,
    "cd About Me": aboutme,
    "ls" : ls,
    "todolist": todolist
    
}

promtTaskBar.addEventListener('click',
function openPromt(event){ 
    if(promt.style.display == 'block'){
        promt.style.display = 'none'
        promt.style.opacity = 0
    }else{
        promt.style.display = 'block'
        promt.style.opacity = 1
        setTimeout(function() {
            // Código que se ejecutará después del retraso
            promtImput.focus()
          }, 1000); // Retraso de 2000 milisegundos (2 segundos)
    }

    
    
})

promtMazimize.addEventListener('click',
function mazimizePromt(){
    promt.style.width = '100vw'
    promt.style.height = '90vh'
})

closeTodolist.addEventListener('click',
function (){
    todolistc.style.display = 'none' 
}
)

promtMinimize.addEventListener('click',
function minimizePromt(){
    if(promt.style.width == '100vw'){
     promt.style.width = '80vw'
     promt.style.height = '80vh'   

    }else{
    promt.style.display = 'none'
    promt.style.opacity = 0
    }
})

promtClose.addEventListener('click',
function closePromt(){
    promt.style.display = 'none'
    promt.style.opacity = 0
    responsePromt.style.display = 'none'
})

document.addEventListener("keypress", function(event) {
    if(document.activeElement === promtImput){
        if (event.keyCode === 13) {
            try{
                commads[promtImput.value](routeBox.textContent)
                promtImput.value = ""
            }catch{
                responsePromt.style.display = 'none'
            }
    }}
  });
