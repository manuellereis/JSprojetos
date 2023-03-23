
const ImcCalculator = () => {
    const formulario = document.querySelector('#formulario');
    
    formulario.addEventListener('submit', function (event){
        event.preventDefault();
        const peso = formulario.querySelector('#peso').value;
        const altura = formulario.querySelector('#altura').value;
        const calculo = peso / (altura*altura);
        const calculoIMC = calculo.toFixed(2);
        const resultado = formulario.querySelector('#resultado');
        resultado.style.display = "block";

        const text = {
            acima: `<strong>Seu IMC é de: ${calculoIMC}.<br>*Acima do peso*</strong>`,
            normal: `<strong>Seu IMC é de: ${calculoIMC}.<br>*Peso normal*</strong>`,
            abaixo: `<strong style="color:red;">ATENÇÃO!<br>Seu IMC é de: ${calculoIMC}.<br>*Abaixo do peso*</strong>`,
            obesidade1:`<strong style="color:red;>ATENÇÃO!<br>Seu IMC é de: ${calculoIMC}.<br>*Obesidade grau I*</strong>`,
            obesidade2:`<strong style="color:red;>ATENÇÃO!<br>Seu IMC é de: ${calculoIMC}.<br>*Obesidade grau II*</strong>`,
            obesidade3:`<strong style="color:red;>ATENÇÃO!<br>Seu IMC é de: ${calculoIMC}.<br>*Obesidade grau III*</strong>`,
            erro1: `<strong style="color:red;">Erro!<br>Você precisa preencher os campos.</strong>`,
            erro2: `<strong style="color:red;">Erro!<br>Você precisa preencher o campo de peso.</strong>`,
            erro3: `<strong style="color:red;">Erro!<br>Você precisa preencher o campo de altura.</strong>`
        };

       if(calculoIMC <= 18.5){
            resultado.innerHTML = `${text.abaixo}`;
        }else if(calculoIMC > 18.5 && calculoIMC <= 24.9){
            resultado.innerHTML = `${text.normal}`;
        }else if(calculoIMC > 24.9 && calculoIMC <= 29.9){
            resultado.innerHTML = `${text.acima}`;
        }else if(calculoIMC >= 30 && calculoIMC <= 34.9){
            resultado.innerHTML = `${text.obesidade1}`;
        }else if(calculoIMC > 35 && calculoIMC <= 39.9){
            resultado.innerHTML = `${text.obesidade2}`;
        }else if(calculoIMC > 40){
            resultado.innerHTML = `${text.obesidade3}`;
        };

        if(peso == false && altura == false){
            resultado.innerHTML = `${text.erro1}`;
        }else if(!peso){
            resultado.innerHTML = `${text.erro2}`;
        }else if(!altura){
            resultado.innerHTML = `${text.erro3}`
        }
        
    });
    

};
ImcCalculator();