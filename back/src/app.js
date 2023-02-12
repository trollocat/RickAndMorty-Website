class Mascotinha {
  constructor(actividades) {
    this.actividades = actividades;
  }
  getFrecuencia(actividad) {
    for (var i = 0; i < this.actividades.length; i++) {
      if (this.actividades[i].actividad === actividad) {
        return this.actividades[i].frecuencia;
      }
    }
  }
}

var perro = new Mascotinha([
  { actividad: "salir a caminar", frecuencia: "1 vez al dia" },
  { actividad: "baño", frecuencia: "1 vez al mes" },
]);

console.log(perro.getFrecuencia("salir a caminar"));
console.log(perro.getFrecuencia("baño"));
