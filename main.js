
//Declaramos los precios de las polizas

const cat1A = 2500; //16-25 años, hombre
const cat1B = 2350; //16-25 años, mujer
const cat2A = 2000; // 26-39 años hombre
const cat2B = 1850; // 26-39 años mujer
const cat3A = 1500; // 40-85 años  hombre
const cat3B = 1250; // 40-85 pero menos de 86 años  mujer

//El evento generaCuota

let genero = document.getElementById('genero').value;
const generaCuota = (genero, edad) => {
    
    //Declaro las variables
    genero = document.getElementById('genero').value;
    edad = document.getElementById('edad').value;
    user = document.getElementById('user').value;
    let msj = '';
    let precio = 0;

    //Validamos EDAD

    if(edad === ''){
        msj = 'Necesitamos su EDAD para generar una CUOTA';
    }

    //Si es menor de 16

    else if(edad < 16){
        msj =`Hola ${user}, todavía no podes adquirir una poliza: `;
    }
    else if((edad < 26) && (genero === 'hombre')){
        msj =`Hola ${user}, el precio de su poliza es: `;
        precio = cat1A;
    }else if((edad < 26) && (genero === 'mujer')){
        msj =`Hola ${user}, el precio de su poliza es: `;
        precio = cat1B;   
    }else if((edad < 40) && (genero === 'hombre')){
        msj =`Hola ${user}, el precio de su poliza es: `;
        precio = cat2A;
    }else if((edad < 40) && (genero === 'mujer')){
        msj =`Hola ${user}, el precio de su poliza es: `;
        precio = cat2B;
    }else if(edad >=40 && edad <=85 && genero === 'hombre'){
        msj =`Hola ${user}, el precio de su poliza es: `;
         precio = cat3A;
     }else if(edad >=40 && edad <=85 && genero === 'mujer'){
        msj =`Hola ${user}, el precio de su poliza es: `;
        precio = cat3B;
    } 
    else {
        msj =`Hola ${user}, lo sentimos no tenemos poliza disponible.`;
    }
   
    
    //Declaramos la variable para tener acceso al HTML y poner el mensaje en el DIV

    const cuota = document.getElementById('cuota');

    //Mostramos el precio y el mensaje si es que el precio no es 0;
   
    if(precio !== 0){
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
            <span>${precio}</span>
        </div>
        `;
    } 
    //Mostramos solamente el mensaje cuando el precio es 0;
    else {
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
        </div>
        `;
    }
}

