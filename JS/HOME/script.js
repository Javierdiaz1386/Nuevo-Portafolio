const promt = document.getElementById('promt')
const promtTaskBar = document.getElementById('promtTaskBar')
const promtClose = document.getElementById('circle-red')
const promtMinimize = document.getElementById('circle-yellow')
const promtMazimize = document.getElementById('circle-green')
const promtImput = document.getElementById('imput-promt')

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
})

document.addEventListener()
