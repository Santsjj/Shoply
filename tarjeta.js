'use strict';
//Inputs a validar
const crdnum=document.getElementById('cardnumber'); 
const expcrd=document.getElementById('expCard');
const crdcode=document.getElementById('cardCode');
const crdnum1=document.getElementById('cardnumber1'); 
const expcrd1=document.getElementById('expCard1');
const crdcode1=document.getElementById('cardCode1');
const continuar=document.getElementById('continue');
//Validación de formulario
continuar.addEventListener('click', (e)=>{
    e.preventDefault();
    if(ValidForm()===-1){
        modalAlerta('Se envió el formulario')
    }else{
        modalAlerta('Error de datos en el formulario')
    }
});
//Se crea un objeto para la validación de datos
const ValidForm=()=>{
    const values = Object.values(ValidForms);
    let response = values.findIndex(e=>e === false);
    return response;
}
//Se le asigna los elementos al objeto
let ValidForms={
    num: false,
    exp: false,
    cod: false,
    num1: false,
    exp1: false,
    cod1: false
}

crdnum.addEventListener('change',(event)=>{
    const inputnumero = event.target.value;
    const patronnumero=/^([0-9]{8,12})$/g;
    ValidForms.num=inputnumero.match(patronnumero) ? true : false;
    console.log(Object.values(ValidForms))
});

expcrd.addEventListener('change', (event)=>{
    const inputex = event.target.value;
    const patronexp= /([a-zA-Z]{4,10})\s([0-9]{4})/;
    ValidForms.exp=inputex.match(patronexp) ? true : false;
    console.log(Object.values(ValidForms))
});

crdcode.addEventListener('change',(event)=>{
    const inputcode = event.target.value;
    const patroncode= /^([0-9]{3})$/g;
    ValidForms.cod=inputcode.match(patroncode) ? true : false;
    console.log(Object.values(ValidForms))
});

crdnum1.addEventListener('change',(event)=>{
    const inputnumero = event.target.value;
    const patronnumero= /^([0-9]{8,12})$/g;
    ValidForms.num1=inputnumero.match(patronnumero) ? true : false;
    console.log(Object.values(ValidForms))
});

expcrd1.addEventListener('change', (event)=>{
    const inputex1 = event.target.value;
    const patronexp1= /([a-zA-Z]{4,10})\s([0-9]{4})/;
    ValidForms.exp1=inputex1.match(patronexp1) ? true : false;
    console.log(Object.values(ValidForms))
});

crdcode1.addEventListener('change',(event)=>{
    const inputcode = event.target.value;
    const patroncode= /^([0-9]{3})$/g;
    ValidForms.cod1=inputcode.match(patroncode) ? true : false;
    console.log(Object.values(ValidForms))
});

function modalAlerta(cadena){
    const alert=document.createElement("div");
    const texto=document.createElement("p");
    texto.setAttribute("Class","textAlerta");
    alert.setAttribute("id","alerta");
    alert.setAttribute("class","alerta");
    texto.innerHTML=`<strong>${cadena}</strong>`;
    alert.appendChild(texto);
    document.body.appendChild(alert);
    alert.onclick=function(){
        document.getElementById("alerta").remove();
    }
}