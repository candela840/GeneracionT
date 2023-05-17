var miAuto={
    marca:"clio",
    anio:2020,
    roto:false,
}
var propertyKey="modelo"
miAuto.propertyKey=propertyKey
var anotherPropertyKey="$100000"
miAuto.anotherPropertyKey=anotherPropertyKey
var nextProperty="color"
miAuto.nextProperty=nextProperty
console.log(miAuto)
for(auto in miAuto){
    console.log(auto)
}
