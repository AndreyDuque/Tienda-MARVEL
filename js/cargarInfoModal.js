
export function cargarInfoModal(producto){

    let fotoProducto = document.getElementById("fotoProducto")
    fotoProducto.classList.add("border-end")
    fotoProducto.src = producto.foto

    let nombreProducto = document.getElementById("nombreProducto")
    // nombreProducto.classList.add("text-center")
    nombreProducto.textContent = producto.nombre 

    let precioProducto = document.getElementById("precioProducto")
    precioProducto.textContent = producto.precio 

}