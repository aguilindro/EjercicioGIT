class Persona{
	nombre ="";
	apellido ="";
	edad=0;
  
  constructor(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
  }

  getDetalles(){
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.edad);
  }

  getNombre(){
    return this.nombre;
  }
  getApellido(){
    return this.apellido;
  }
  getEdad(){
    return this.edad;
  }
}

class Empleado extends Persona{
	
	tipoEmpleado="";
    
	constructor(nombre,apellido,edad, tipoEmpleado){
		super(nombre,apellido,edad);
		this.tipoEmpleado=tipoEmpleado;
	}
	
    
	getDetalles(){
	super.getDetalles();
	console.log(this.tipoEmpleado);
	}

    getNombre(){
        super.getNombre();
    }

    getApellido(){
        super.getApellido();
    }
    getEdad(){
        super.getEdad();
    }

    getTipoEmpleado(){
        return this.tipoEmpleado;
    }
}

class Nomina{
	empleados=[];
	constructor(empleados){
		this.empleados=empleados;
	}
	
	calcularPagos(empleado){
		numero = Math.random()*(5-15) + 5;
        pago=0;

            if(empleado.getTipoEmpleado=="S"){
                pago= 250*(numero);
            }
            else{
                pago=500*(numero);
            }
        
		return pago;
	}

    calcularNomina(){
        for(i=0;i<this.empleados.length;i++){
            if(this.empleados[i].getTipoEmpleado=="S"){  
            console.log(this.empleados[i].getNombre +" "+ this.empleados[i].getApellido + " de " + this.empleados[i].getEdad + " años - " 
            + this.empleados[i].getTipoEmpleado) + "pertece a Empleado de Sindicato con un sueldo de " + this.calcularPagos(this.empleados[i]);
        }
        else{
            console.log(this.empleados[i].getNombre +" "+ this.empleados[i].getApellido + " de " + this.empleados[i].getEdad + " años - " 
            + this.empleados[i].getTipoEmpleado) + "pertece a Empleado de Confianza con un sueldo de " + this.calcularPagos(this.empleados[i]);
        }
        }
    }
}

empleado1 = new Empleado("Maria","Carvajal",33,"C");
empleado2 = new Empleado("Juan","Almeira",33,"C");
empleado3 = new Empleado("Dulce","Salguero",33,"S");
nomina = new Nomina([empleado1,empleado2,empleado3])
nomina.calcularNomina();


