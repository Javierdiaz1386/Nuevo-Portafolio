const promt = document.getElementById('promt')
const promtTaskBar = document.getElementById('promtTaskBar')
const promtClose = document.getElementById('circle-red')
const promtMinimize = document.getElementById('circle-yellow')
const promtMazimize = document.getElementById('circle-green')
const promtImput = document.getElementById('imput-promt')
const responsePromt = document.getElementById('response-promt')
const routeBox = document.getElementById('route')

function ls(folder){
    switch(folder){
        case 'Home':
            responsePromt.style.visibility = 'visible'
    }
}

function home(folder){
    routeBox.textContent = 'Home'
    responsePromt.style.visibility = 'hidden'
}

function proyects(folder){
    routeBox.textContent = 'Proyects'
    responsePromt.style.visibility = 'hidden'

}

function aboutme(folder){
    routeBox.textContent = 'About Me'
    responsePromt.style.visibility = 'hidden'

}



const commads = {
    "cd Home" : home,
    "cd Proyects": proyects,
    "cd About Me": aboutme,
    "ls" : ls
    
}

promtTaskBar.addEventListener('click',
function openPromt(event){ 
    if(promt.style.visibility == 'visible'){
        promt.style.visibility = 'hidden'
        promt.style.opacity = 0
    }else{
        promt.style.visibility = 'visible'
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

promtMinimize.addEventListener('click',
function minimizePromt(){
    if(promt.style.width == '100vw'){
     promt.style.width = '80vw'
     promt.style.height = '80vh'   

    }else{
    promt.style.visibility = 'hidden'
    promt.style.opacity = 0
    }
})

promtClose.addEventListener('click',
function closePromt(){
    promt.style.visibility = 'hidden'
    promt.style.opacity = 0
    responsePromt.style.visibility = 'hidden'
})

document.addEventListener("keypress", function(event) {
    if(document.activeElement === promtImput){
        if (event.keyCode === 13) {
            try{
                commads[promtImput.value](routeBox.textContent)
                promtImput.value = ""
            }catch{
                responsePromt.style.visibility = 'hidden'
            }
    }}
  });
