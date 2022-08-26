horasSemanales= 40;
pagoNormal = 265;
pagoExtra=350;

if (horasSemanales==40){
	console.log("El total a pagar por horas laborales normal (40 hrs) es de: ");
	console.log(horasSemanales*pagoNormal);
  }
else {
  horasExtras=horasSemanales-40;
	console.log("El total a pagar por horas extras " + horasExtras + "es de: ");
	console.log(horasExtras*pagoExtra);
	