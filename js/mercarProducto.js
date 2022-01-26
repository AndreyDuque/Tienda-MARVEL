
export function mercarProducto(event){

    let producto = {}

    if(event.target.classList.contains("btn-dark")){
        let datosProducto = event.target.parentElement.parentElement
        // console.log(datosProducto.querySelector('img').src)

        producto = {
            foto: datosProducto.querySelector("img").src,
            nombre: datosProducto.querySelector("h6").textContent,
            precio: datosProducto.querySelector("p").textContent,
            cantidad: 0
        }

        // console.log(producto)
    }

    return producto

}