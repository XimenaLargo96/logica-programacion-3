const inputNumber = document.getElementById("input-number");
const form = document.querySelector("form")
const result = document.getElementById("result");


function factorial(numero){

    if(numero === 0){
        return 1;
    }
    else{
        let resultado = 1;
        
        for(let i=1 ; i<= numero ; i++){
            resultado *= i;
        }
        return resultado;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    result.innerHTML = `<p class="text-center fs-4 mt-3">El factorial de ${inputNumber.value} es: ${factorial(inputNumber.value)} </p>`
})

