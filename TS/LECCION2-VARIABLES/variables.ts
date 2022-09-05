// let variable:tipo = valor;

// Especificas el tipo de varible
let numero1:number = 10;
// numero1 = "Error";

// El tipo de variable depende del valor asignado
let numero2 = 20;
// numero2 = "Error";

let cualquierTipo:any;
cualquierTipo = 10;
cualquierTipo = "Puedo cambiar mi valor como en JS";

function mostrarVariable(num:any) {
    console.log(num);
}

mostrarVariable(numero1);
mostrarVariable(numero2);
mostrarVariable(cualquierTipo);