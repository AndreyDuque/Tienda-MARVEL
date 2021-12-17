
// Importaciones
import { mercarProducto } from './mercarProducto.js'
import { cargarInfoModal } from './cargarInfoModal.js'
import {pintarInfoCarrito} from './pintarInfoCarrito.js'

// Variables Globales
let carrito = [] // Es un arreglo de productos (arreglo de objetos)
let producto = {}

// Referencias a etiquetas del HTML
let filaproductos = document.getElementById("fila")
let modalInfoProducto = new bootstrap.Modal(document.getElementById('infoProducto'))
let modalInfoCarrito = new bootstrap.Modal(document.getElementById('infoCarrito'))
let botonAgregarCarrito = document.getElementById("botonAgregarCarrito")
let pildora = document.getElementById("pildora")
let botonInfoCarrito = document.getElementById("botonVerInfoCarrito")

// Escucho cuando hagan clic en la fila de los productos
filaproductos.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn-warning")) {

        producto = mercarProducto(event)
        // console.log(producto)
        cargarInfoModal(producto)
        modalInfoProducto.show()

    }

})

// Escucho cuando le hagan click al boton agregar carrito
botonAgregarCarrito.addEventListener("click", function(){

    let cantidad = document.getElementById("cantidadProducto")
    producto.cantidad = cantidad.value
    carrito.push(producto)
    console.log(carrito)

    pildora.classList.remove("invisible")
    pildora.textContent = carrito.length

    modalInfoProducto.hide()

    cantidad.value = "1"

})

// Escuchar el click en el carrito de compras
botonInfoCarrito.addEventListener("click", function(){

    pintarInfoCarrito(carrito)
    modalInfoCarrito.show()

})