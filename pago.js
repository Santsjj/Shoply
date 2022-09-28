const nombre=document.getElementById('name');
const surname=document.getElementById('surname');
const documento=document.getElementById('typeDocument');
const city=document.getElementById('city');
const barrio=document.getElementById('hood');
const adress=document.getElementById('adress');
const numdocumento=document.getElementById('numdoc');
const phone=document.getElementById('phone');
const payment=document.getElementById('payment');
const payment2=document.getElementById('payment2');
const payment3=document.getElementById('payment3');
const payment4=document.getElementById('payment4');
const continuar=document.getElementById('continue');
//Validación de formulario
continuar.addEventListener('click', (e)=>{
    e.preventDefault();
    if(ValidFieldForm()===-1){
        modalAlerta('Pago Exitoso')
    }else{
        modalAlerta('Error de datos')
    }
});
//Se crea un objeto para la validación de datos
const ValidFieldForm=()=>{
    const values = Object.values(ValidForms);
    let response = values.findIndex(e=>e === false);
    return response;
}
//Se le asigna los elementos al objeto
let ValidForms={
    name: false,
    sname: false,
    tdocumento: false,
    cit: false,
    hood: false,
    adress: false,
    numd: false,
    phone: false,
    paym:false
}

nombre.addEventListener('change',(event)=>{
    const inputnom = event.target.value;
    const patronnom=/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})$/g;
    ValidForms.name=inputnom.match(patronnom) ? true : false;
    console.log(Object.values(ValidForms))
});

surname.addEventListener('change',(event)=>{
    const inputsnom = event.target.value;
    const patronsnom=/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})$/g;
    ValidForms.sname=inputsnom.match(patronsnom) ? true : false;
    console.log(Object.values(ValidForms))
});


//tipo de documento
documento.addEventListener('change',(event)=>{
    ValidForms.tdocumento = documento.selectedIndex > 0 ? true : false;
    console.log(Object.values(ValidForms));
});

//Número de documenteo
numdocumento.addEventListener('change',(event)=>{
    const inputsnumd = event.target.value;
    const patronsnumd=/^([0-9]{8,12})$/g;
    ValidForms.numd=inputsnumd.match(patronsnumd) ? true : false;
    console.log(Object.values(ValidForms))
});

city.addEventListener('change',(event)=>{
    ValidForms.cit = city.selectedIndex > 0 ? true : false;
    console.log(Object.values(ValidForms));
});


barrio.addEventListener('change',(event)=>{
    const inputbrr= event.target.value;
    const patronbrr=/([A-Za-z0-9#-]{5,})/
    ValidForms.hood=inputbrr.match(patronbrr) ? true : false;
    console.log(Object.values(ValidForms))
});

adress.addEventListener('change',(event)=>{
    const inputadrs= event.target.value;
    const patronadrs=/([A-Za-zÀ-ÖØ-öø-ÿ0-9#-]{5,30})/g;
    ValidForms.adress=inputadrs.match(patronadrs) ? true : false;
    console.log(Object.values(ValidForms))
});

phone.addEventListener('change',(event)=>{
    const inputsphn= event.target.value;
    const patronsphn=/^([0-9]{10,12})$/g;
    ValidForms.phone=inputsphn.match(patronsphn) ? true : false;
    console.log(Object.values(ValidForms))
});

payment.addEventListener('change', (e)=>{
    ValidForms.paym = payment.checked === true ? true : false;
    console.log(Object.values(ValidForms));
});
payment2.addEventListener('change', (e)=>{
    ValidForms.paym = payment2.checked === true ? true : false;
    console.log(Object.values(ValidForms));
});
payment3.addEventListener('change', (e)=>{
    ValidForms.paym = payment3.checked === true ? true : false;
    console.log(Object.values(ValidForms));
});
payment4.addEventListener('change', (e)=>{
    ValidForms.paym = payment4.checked === true ? true : false;
    console.log(Object.values(ValidForms));
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
