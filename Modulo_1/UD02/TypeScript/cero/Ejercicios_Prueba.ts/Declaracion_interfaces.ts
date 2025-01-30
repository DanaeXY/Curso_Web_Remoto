interface Persona {
    nombre: string,
    apellido1:string,
    apellido2:string,
    dni:string,
    anhoNacimiento: number,
    edad?:number
}

function mostrarDatos (nombre:string, apellido1:string, apellido2:string, dni:string, anhoNacimiento:number){
    console.log("Nombre:",nombre,"Apellidos:", apellido1," ", apellido2," con DNI nº", dni);

    let anhos: number = new Date() - anhoNacimiento;

    if () {
        
    }
}