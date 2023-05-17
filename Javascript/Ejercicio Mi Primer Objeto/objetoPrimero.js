
  let naves = {
    Tipodenave: "Espacial",
    Pais: "USE",
    Cantidaddetripulantes: 3,
    Tripulantes: ["Juan"," matias"," luka"],
    Estado: "Usada",
    Despegar: function () {
     console.log(" ¡Todo listo para el despegue! Oh no ... ¡algo se rompió!" );
     alert("¡BOOOOOOM!");
    }
};
console.log(naves.pais)
console.log(naves["Tripulantes"])
console.log(naves.Cantidaddetripulantes)
naves.Despegar()