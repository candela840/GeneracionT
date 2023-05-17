let input = Number.parseInt(prompt("1 tijera, 2 papel, 3 piedra!"));
let ai = Math.floor(Math.random() * 3);

switch(input){
    case 1:
        switch(ai){
            case 0:
                alert("EMPATE, AMBOS TIJERA");
                break
                case 1:
                alert("GANASTE, TIJERA CORTA PAPEL");
                break
                case 2:
                alert("PERDISTE, PIEDRA GANA A TIJERA");
                break
        }
    break
    case 2:
        switch(ai){
            case 0:
                alert("PERDISTE, TIJERA CORTA PAPEL");
                break
                case 1:
                alert("EMPATE, AMBOS PAPEL");
                break
                case 2:
                alert("GANASTE, PAPEL ENVUELVE PIEDRA");
                break
        }
    break
    case 3:
        switch(ai){
            case 0:
                alert("GANASTE, PIEDRA ROMPE TIJERA");
                break
                case 1:
                alert("PERDISTE, PAPEL ENVUELVE PIEDRA");
                break
                case 2:
                alert("EMPATE, AMBOS PIEDRA");
                break
        }
    break
}
let numero_secreto = 10;
let usuario = Number.parseInt(prompt("adivina el numero secreto"));

if (usuario === numero_secreto) {
    alert("lo adivinaste :)")
} else {
    alert("no lo adiviniste :(")
}