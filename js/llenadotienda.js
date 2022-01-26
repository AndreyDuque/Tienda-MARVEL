
// Resolver problemas con JS utilizamos Variables
// Una variable es una "caja", un espacio en memoria para
// almacenar DATOS
// JS es un lenguaje dinamicamente tipado

// Arreglo: Es una variable especial que me permite
// almacenar varios datos en una sola variable.

/* let productos = ['camiseta', 'gorra', 'termo']
console.log("Arreglo:", productos);
console.log("Arreglo:", productos[0]); */

// Objeto: Es una variable especial que permite almacenar
// muchos datos diferentes en una sola variable.

/* let objetoProductos = {
    nombre: "Camiseta",
    precio: 50000,
    cantidad: 5,
    foto: "http://www.fotos.com"
}

console.log("Objeto:", objetoProductos);
console.log("Objeto:", objetoProductos.nombre); */

// Maizena de Arreglos con sabor a Objetos

let productos = [{
    foto: 'img/tienda1.jpg',
    nombre: "Casco Iron-Man",
    precio: 150000,
    cantidad: 0
},

{
    foto: 'img/tienda2.jpg',
    nombre: "Camiseta Ant-Man",
    precio: 50000,
    cantidad: 0
},

{
    foto: 'img/tienda3.jpg',
    nombre: "Sudadera GRUT",
    precio: 25000,
    cantidad: 0
},

{
    foto: 'img/tienda4.jpg',
    nombre: "Vaso Venom",
    precio: 35500,
    cantidad: 0
},

{
    foto: 'img/tienda5.jpg',
    nombre: "Cap-America",
    precio: 95000,
    cantidad: 0
},

{
    foto: 'img/tienda6.jpg',
    nombre: "Maleta Cap",
    precio: 87000,
    cantidad: 0
},

{
    foto: 'img/tienda7.jpg',
    nombre: "Silla Marvel PRO",
    precio: 1500000,
    cantidad: 0
},

{
    foto: 'img/tienda8.jpg',
    nombre: "Blusa Spiderma",
    precio: 35000,
    cantidad: 0
},

{
    foto: 'img/tienda9.jpg',
    nombre: "GAME",
    precio: 187000,
    cantidad: 0
},

{
    foto: 'img/tienda10.jpg',
    nombre: "GRUT",
    precio: 70000,
    cantidad: 0
}]

// Array Metodos
// 1 Filter (Filtra un arreglo segun una condición dada
// por el programador)

/* let datosFlitrados = productos.filter(function(producto){
    return(producto.nombre == "Batimovil Escala")
})

console.log(datosFlitrados) */

// Foreach: Es el metodo por defecto para recorrer y 
// obtener la información de cada elemento de un arreglo

// Pasos para cargar elementos de HTML desde JS (Traversing)

/* 
1. Definir la información del punto de apoyo sobre el 
cual vamos a pintar
*/
let fila = document.getElementById("fila")

productos.forEach(function(producto){
    
    /* 
    2. Crear las etiquetas necesarias para montar
    mi tienda
    */
   let columna = document.createElement("div")
   columna.classList.add("col")

   let targeta = document.createElement("div")
   targeta.classList.add("card")
   targeta.classList.add("p-2")
   targeta.classList.add("shadow")

   let foto = document.createElement("img")
   foto.classList.add("card-img-top")
   foto.classList.add("rounded")
   foto.style.height = "200px"
   foto.src = producto.foto

   let divisor = document.createElement("hr")

   let cuerpoTarjeta = document.createElement("div")
   cuerpoTarjeta.classList.add("card-body")

   let titulo = document.createElement("h6")
   titulo.classList.add("card-title")
   titulo.classList.add("text-muted")
   titulo.textContent = producto.nombre

   let precio = document.createElement("p")
   precio.classList.add("card-text")
   precio.textContent = "$" + producto.precio

   let botonInfoProducto = document.createElement("button")
   botonInfoProducto.setAttribute("type", "button")
   botonInfoProducto.classList.add("btn")
   botonInfoProducto.classList.add("btn-dark")
   botonInfoProducto.classList.add("w-100")
   botonInfoProducto.classList.add("shadow")
   botonInfoProducto.textContent = "Ver producto"

   /* 
   3. Padres e hijos
   */
  cuerpoTarjeta.appendChild(titulo)
  cuerpoTarjeta.appendChild(precio)
  cuerpoTarjeta.appendChild(botonInfoProducto)

  targeta.appendChild(foto)
  targeta.appendChild(divisor)
  targeta.appendChild(cuerpoTarjeta)

  columna.appendChild(targeta)
  fila.appendChild(columna)

})