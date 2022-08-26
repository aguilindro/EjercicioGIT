arreglo1=[3, 2, 1, 1, 2, 3, 2, 3, 1];
arreglo2=[1, 1, 2, 2, 1, 1, 1, 2, 1];

console.log( " Arreglo 1: ["+ arreglo1 +"]" );
console.log( " Arreglo 1: ["+ arreglo2 +"]" );
console.log("------------------------------------");
function sumaMatrices(arreglo1,arreglo2){
  for(i=0;i<arreglo1.length;i++){
     console.log(arreglo1[i] + " + " +arreglo2[i] + " = " + (arreglo1[i] + arreglo2[i]));
  }

}

function multiplicarMatrices(arreglo1,arreglo2){
  for(i=0;i<arreglo1.length;i++){
     console.log(arreglo1[i] + " * " +arreglo2[i] + " = " + (arreglo1[i] * arreglo2[i]));
  }

}
sumaMatrices(arreglo1,arreglo2);
console.log("------------------------------------");
multiplicarMatrices(arreglo1,arreglo2);