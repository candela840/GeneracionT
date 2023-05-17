let listadeSuper = []
listadeSuper[0] = "carne"
listadeSuper[1] = "Frutas"
listadeSuper[2] = "Verduras"
console.log(listadeSuper[0])
let ultimo = listadeSuper.length - 1
console.log(listadeSuper[ultimo])
//listadeSuper.push("veg")
//console.log(listadeSuper)
//listadeSuper.push("babnana","roca")
//console.log(listadeSuper)
//listadeSuper.pop()//quita
//listadeSuper.unshift("gaseosa")//agrga al comienso
//console.log(listadeSuper)//muestra
//console.log(listadeSuper.lastIndexOf("carne"))//nos disa la nposision
let ListadeAmigos = []
ListadeAmigos[0] = "alex"
ListadeAmigos[1] = "pedro"
ListadeAmigos[2] = "Juan"
ListadeAmigos[3] = "Max"

for (let i = 0; i < ListadeAmigos.length; i++) {
    if (ListadeAmigos !== "Feliz") {
        console.log("no tienes ningun amigo que se llame Feliz")
    }
    else {
        console.log("si tienes amigo")
    }
}
ListadeAmigos2 = ListadeAmigos;
//una copia
let nuevo = ListadeAmigos.slice(1, 3, "Remplasar")
nuevo.pop()
console.log(nuevo)
console.log(ListadeAmigos)
//generador de string con todos los elementos del array
console.log(ListadeAmigos.join("/"))
//Hacer que un sprint se buelva un array
let cadena = "Estoy aprendiendo algo"
console.log(cadena)
console.log(cadena.split(" "))
//concant
//include para saber si el array tiene
console.log(ListadeAmigos.includes("Juan"))
//Revers DESTRUCTIVO(Reorganisar)
console.log(ListadeAmigos.reverse())
// Arrow function
let notas = [1, 2, 3, 4, 5, 6, 7]
let aprobadas = notas.filter(nota => nota >= 6)
console.log(aprobadas)
//forEach()metodo nuevo simplifica (mucho mas lent que el map)
notas.forEach(function (nota) {
    console.log("sacaste : " + nota)
})
//Function
function nombredemifuncion(parametro) {
    nombredemifuncion()
}


