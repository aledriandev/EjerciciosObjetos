var assert=require("assert");

// Ejercicio 1
function Rectangulo(base,altura){
  this.base=base;
  this.altura=altura;
  this.area=function(){
    return this.base*this.altura;
  }
}

//Ejercicio 2
// los metodos son las funciones dentro del objeto
function Edad(nombre,dia,mes,anioNacimiento){
  this.nombre=nombre;
  this.dia=dia;
  this.mes=mes;
  this.anio=anioNacimiento;
  this.edad=function(){
    var anioActual=(new Date()).getFullYear();
    var mesActual=(new Date()).getMonth()+1;
    var diaActual=(new Date()).getDate();
    var _edad=anioActual-this.anio;
    if (mesActual<this.mes){
      _edad--;
    }
    if (mesActual==this.mes && diaActual<this.dia) {
      _edad--;
    }
    return "La edad actual de "+this.nombre +" es "+_edad;
  }
}

//Ejercicio3
function Persona(nombre,edad,pasatiempo){
    this.nombre=nombre;
    this.edad=edad;
    this.pasatiempo=pasatiempo;
    this.mensaje=function(){
      return "Hola soy "+ this.nombre+" tengo "+ this.edad+" años y me gusta "+ this.pasatiempo
    }
}


describe("Ejercicios Objetos", function(){
  describe("Ejercicio 1",function() {
    it('Prueba de un rectangulo de 3 por 3', function(){
      var respuesta= new Rectangulo(3,3);
      assert.equal(9, respuesta.area());
    });
  });
  describe("Ejercicio 2",function() {
    it("Prueba Su que cumple años el 28 de junio", function(){
      var myEdad= new Edad("Su",28,06,2000);
      assert.equal("La edad actual de Su es 16", myEdad.edad());
    });
  });
  describe("Ejercicio 3",function() {
    it("Prueba Alejandra de 23 que le gusta codear", function(){
      var frase= new Persona("Alejandra",23,"codear");
      assert.equal("Hola soy Alejandra tengo 23 años y me gusta codear", frase.mensaje());
    });
  });
});
