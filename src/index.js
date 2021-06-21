import validator from './validator.js';
// para no aceptar caracteres diferentes a numeros
const formulario = document.querySelector('#formulario');
formulario.numberCard.addEventListener('keyup', (e) => {
    let valorNumberCard = e.target.value;

    formulario.numberCard.value = valorNumberCard
    .replace(/\s/g, '')
    .replace(/\D/g, '')
    // .replace(/([0-9]{4})/g, '$1 ')
    .trim();
});
//llamado al algoritmo luhn
const validatorBtn = document.getElementById('btnNumberCard');
validatorBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let numberCard = document.getElementById('numberCard').value;

       if ((numberCard.length == 13 || numberCard.length ==16) && numberCard.length != 0){
            let validarFinal = validator.isValid(numberCard);
            if (validarFinal == true ){
                document.getElementById("boxOne").style.display="none";
                document.getElementById("result").style.display="block";
                document.getElementById("maskifyTotal").innerText= validator.maskify(numberCard);
            }
            else  {
                 mostrarMensage()
                formulario.reset();
            }
        }
        else {
            
            mostrarMensage2()
            formulario.reset();
       }
     
});

//mostrar y ocultar mensages
function mostrarMensage() {
    setTimeout(function(){
        document.getElementById("AlertMessage").style.display = "block";
        document.getElementById("finalAlertMessage").innerText = "Tarjeta Invalida. Ingrese el número de tarjeta";

    },1000);
    setTimeout(function(){
        document.getElementById("AlertMessage").style.display="none";
    },3000);
}

function mostrarMensage2() {
    setTimeout(function(){
        document.getElementById("AlertMessage").style.display = "block";
        document.getElementById("finalAlertMessage").innerText = "Número de digitos incorrectos";
    },1000);
    setTimeout(function(){
        document.getElementById("AlertMessage").style.display="none";
    },3000);
    
}













