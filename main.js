function saludar() {
    alert("Hola " + nombreUsuario + " Bienvenido a Plushielandia");
}

function comprarProducto(){
    let productosComprados = parseInt (prompt("Ingrese cantidad del producto a comprar"))
    let totalCompra = prompt(productosComprados * precioProducto )  
    alert(totalCompra)
}

let nombreUsuario = prompt("Introduzca su nombre de usuario (usar esc para salir)")
if(nombreUsuario == "lizzevil"){
    console.log("Bienvenido administrador " + nombreUsuario)

    let nombreProducto = prompt("Introduzca el nombre del producto, para salir use esc").toUpperCase()
    while(nombreProducto != "ESC"){
        
        let precioProducto = parseFloat(prompt( "Introduzca precio del producto"))
        let stockProducto = parseInt(prompt("Introduzca stock del producto"))
        let tamanioProducto = parseFloat (prompt("Introduzca tamaño del producto"))
        alert("El producto es: " + nombreProducto + " su precio es: " + precioProducto + "el tamaño del peluche es: " + tamanioProducto + " y tiene un stock de: " + stockProducto)
        
    };
}else(nombreUsuario != "lizzevil");{
    saludar()
    comprarProducto()
}


class Producto {
    constructor(nombre, descripcion, precio,stock){
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
    }
}

const productos = []
let continuar = true

while(continuar === true){
    const nombre = prompt("Ingresar nombre del peluche"). toUpperCase()
    const descripcion = prompt("Ingrese descripcion del peluche").toUpperCase()
    const precio = parseFloat(prompt("Ingrese el precio del peluche ingresado"))
    const stock = parseFloat(prompt("Ingrese stock del peluche"))
    const producto = new Producto(nombre, descripcion, precio, stock)
    productos.push(producto)
    continuar = confirm("¿Quiere seguir añadiendo peluches?")

}

console.log(productos)

continuar = confirm("¿Quiere buscar un peluche en específico?")
while(continuar){
    const nombreProductoBuscado = prompt("¿Qué peluche busca?"). toUpperCase()
    const index = productos.findIndex((producto)=> producto.nombre === nombreProductoBuscado)
    if(index != -1){
        alert("El producto ha sido encontrado")
    }
}


const peluchesProductos = document.querySelector("#peluchesProductos")
productos.forEach((producto)=>{
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "tarjetaProducto"
    tarjetaProducto.id = `producto${producto.id}`
    tarjetaProducto.innerHTML = `<img src="${producto.imagen}">
                                <h3>${producto.nombre}</h3>
                                <span>Precio: ${producto.precio} $</span>
                                <span>Stock: ${producto.stock} $</span>
                                <button>Comprar</button>
                                `
    peluchesProductos.append(tarjetaProducto)
})

const productoEliminar = document.querySelector("#producto1")
productoEliminar.remove()


class Producto {
    constructor(obj){
        this.nombre = obj.producto.toUpperCase()
        this.descripcion = obj.descripcion.toUpperCase()
        this.precio = parseFloat(obj.precio)
        this.stock = parseFloat(obj.stock)

    }
}
const almacenados = JSON.parse(localStorage.getItem("listaProductos"))
const producto = []
