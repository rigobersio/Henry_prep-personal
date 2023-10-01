// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre.split('').reduce(function (acumulador, elemento, indice) {
    if (indice === 0) {
      return acumulador;
    } else {
      return acumulador += elemento;
    }
  }, nombre[0].toUpperCase());
  /*
  alternativa
  return nombre.length > 0 && nombre[0] !== nombre[0].toUppercase() ? nombre[0].toUpperCase() + nombre.slice(1) : nombre;
  */
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var resultado = numeros.reduce(function (acumulador, elemento) {
    if (elemento !== Math.trunc(elemento)) {
      return acumulador;
    } else {
      return acumulador += elemento;
    }
  }, 0);
  cb(resultado);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  var i = 0;
  while (i < array.length) {
    cb(array[i])
    i++;
  }
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //var nuevoArray = cb(array.map((elemento) => elemento))
  var nuevoArr = []
  var i = 0;
  while (i < array.length) {
    var elemento = cb(array[i]);
    nuevoArr.push(elemento);
    i++;
  }
  return nuevoArr;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter((elemento) => elemento[0] === 'a');
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
