// colocamos variables para calcular dos variables
var numero = 1
var numero2 = 5
var resultado = numero + numero2
// te muestra el resultado por consola
console.log(resultado)
window.alert("Hello world!");
alert("Bienvenida/o a esta pagina");
let nombre = prompt("decime tu nombre")
let edad = prompt("tu edad")
console.log(nombre + edad)
console.log("hola tu nombre es", nombre, "tienes", edad, "años bienvanida a esta pagina")
// calculadora de edad
const DAYS_IN_A_YEAR = 365;
let age = Number.parseInt(prompt('insert your age'))
alert(`en dias debes tener ${age * DAYS_IN_A_YEAR}`)
// utilisamos if
let nombremio = prompt("NOMBRE")
if (nombremio == "Candela" || nombremio == "candela") {
    alert("BIIENVENIDA CANDELA!!!!!!")
}
else {
    alert("NO ERES TU!!!")
}
// otra cosa
function númeroPar() {
    let número = prompt("Poné un número pibe")

    if (número % 2 == 0) {
        alert("Tu número es par.")

    } else {
        alert("Tu número es impar.")
    }
}
// booleano
prompt("trgos tomados")
let numeroDeTragos = 0
numeroDeTragos > 0 ? alert("usted no puede manejar") : alert("nos alegra que ustede sea un conductor responsable.")
// switch
let num = 2;
switch (num) {
    case 1:
        console.log("entramos al primera case")
        break
    case 2:
        console.log("entramos ala segunad case")
        break
        default:
            console.log("esto dse muestra por defecto en el caso de no encontrar una coincidencia")
}
let genero = Number.parseInt(prompt("Ingresa 1 si eres hombre y 2 si sos mujer"));
switch(genero){
    case 1: 
     if(edad >= 65){
        alert("Puede Jubilarse Señor");
     }else{
        alert("No puede Jubilarse aún");
     }
    break

    case 2:
        if(edad >= 60){
            alert("Puede Jubilarse Señora");
         }else{
            alert("No puede Jubilarse aún");
         }
    break
}
// while loop
let count = 5
while(count <=20){
    console.log("count es:"+count)
    count+=1
}