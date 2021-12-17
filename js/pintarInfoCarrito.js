
export function pintarInfoCarrito(carrito){

    let filaPadre = document.getElementById("filaInfoCarrito")
    filaPadre.innerHTML = ''

    carrito.forEach(function(producto){

        // Crear Elementos
        let columna1 = document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-5")
        columna1.classList.add("border-end")
        columna1.classList.add("border-bottom")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-7")
        columna2.classList.add("border-bottom")

        let foto = document.createElement("img")
        foto.classList.add("w-100")
        foto.classList.add("img-fluid")
        foto.src = producto.foto

        let nombre = document.createElement("h6")
        nombre.textContent = producto.nombre

        let precio = document.createElement("p")
        precio.textContent = "Precio unitario: " + producto.precio

        let cantidad = document.createElement("p")
        cantidad.textContent = "Cantidad: " + producto.cantidad

        // Padres e Hijos
        columna1.appendChild(foto)

        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cantidad)

        filaPadre.appendChild(columna1)
        filaPadre.appendChild(columna2)

    })

}