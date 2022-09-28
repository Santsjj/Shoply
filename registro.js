'use strict';

const nombre = document.querySelector('#name');
const apellido = document.querySelector("#surname");
const nombreU = document.querySelector("#userName");
const correo = document.querySelector("#mail")
const contra = document.querySelector("#userPassword");
const confirmar = document.querySelector("#confPassword");
const formulario = document.querySelector("#form");

formulario.addEventListener('submit',(e) =>{
    e.preventDefault();
    if (validFieldsForm() === -1){
        modalAlerta("Registro exitoso");
    }
});

const validFieldsForm = () =>{
    const values = Object.values(validFields)
    let response = values.findIndex(e => e === false);
    return response;
}

let validFields ={
    nom:false,
    ape:false,
    corr:false,
    nomU:false,
    pass:false
}

nombre.addEventListener('change',function(e){
    const name = e.target.value;
    const patronName = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g; 
    validFields.nom = name.match(patronName) ? true : false;
    console.log(Object.values(validFields));
});

apellido.addEventListener('change',(e) =>{
    const surname = e.target.value;
    const patronSurname = /^([a-zA-ZÀ-ÖØ-öø-ÿ-0-9]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g; 
    validFields.ape = surname.match(patronSurname) ? true : false;
    console.log(Object.values(validFields));
});

correo.addEventListener('change',(e) =>{
    const mail = e.target.value;
    const patronMail = /^([a-zA-ZÀ-ÖØ-öø-ÿ-0-9-@.]{3,25})([a-z-.]{2,3})([a-z-.]{0,3})$/g; 
    validFields.corr = mail.match(patronMail) ? true : false;
    console.log(Object.values(validFields));
});

nombreU.addEventListener('change',(e) =>{
    const nomU = e.target.value;
    const patronNomU = /^([a-zA-ZÀ-ÖØ-öø-ÿ-0-9]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g; 
    validFields.nomU = nomU.match(patronNomU) ? true : false;
    console.log(Object.values(validFields));
});

contra.addEventListener('change', (e) =>{
    const contra = e.target.value;
    const patronPass = /([a-zA-Z0-9]{8,})$/g;
    validFields.pass = contra.match(patronPass) ? true : false;
    if (validFields.pass === false){
        modalAlerta("Ingrese una contraseña con mínimo 8 caracteres que contengan mayúsculas, minúsculas y números");
    }
    console.log(Object.values(validFields));
});

confirmar.addEventListener('change', (e) =>{
    const conf = e.target.value;
    const patronPass2 = /([a-zA-Z0-9]{8,})$/g;
    validFields.pass = conf.match(patronPass2) ? true : false;
    if (validFields.pass === false){
        modalAlerta("Las contraseñas no coinciden");
    } 
    console.log(Object.values(validFields));
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