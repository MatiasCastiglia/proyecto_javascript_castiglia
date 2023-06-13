function saludoUsuario(){
let nombreUsuario = prompt("Ingrese su nombre");
alert("Bienvenido/a " + nombreUsuario);
while (nombreUsuario == "") {
  alert("Nombre Incorrecto");
  nombreUsuario = prompt("Ingrese su nombre");
}
}
saludoUsuario()
let mensaje = prompt("¿Deseas comprar algún producto? (s-si)");
let total = 0;

while (mensaje.toLowerCase() == "si"){
  let producto = prompt(
    "1 - Buzo de frisa $4000\n2 - Remera de algodón $2500\n3 - Jean Elastizado $5000\n4 - Remera manga larga $3000\n5 - Campera de frisa $6000"
  );
  switch (producto) {
    case "1":
      alert("Se te agregó el Buzo de frisa");
      incrementarTotal(4000);
      break;
    case "2":
      alert("Se te agregó la Remera de algodón");
      incrementarTotal(2500);
      break;
    case "3":
      alert("Se te agregó el Jean Elastizado");
      incrementarTotal(5000);
      break;
    case "4":
      alert("Se te agregó la Remera manga larga");
      incrementarTotal(3000);
      break;
    case "5":
      alert("Se te agregó la Campera de frisa");
      incrementarTotal(6000);
      break;
    default:
      alert("Este producto no existe");
      break;
  }

  mensaje = prompt("¿Quieres comprar otro producto más? (s-si)");
}

alert("Precio total a pagar: $" + total);

function incrementarTotal(precio) {
  total = total + precio;
  alert("Precio a pagar hasta el momento: $" + total);
}

// Mi segunda pre entrega 

class Producto{
  constructor(nombre,precio,talle){
      this.nombre = nombre;
      this.precio = precio
      this.talle = talle
  }
}

const productos = []

function agregarProducto(){
  let ingresarNombre = prompt("Ingrese el nombre del producto").toLowerCase()
  let ingresarPrecio = parseFloat(prompt("Ingrese el precio del producto"))
  let ingresarTalle = prompt("Ingrese el talle")
  let nuevoProducto = new Producto(ingresarNombre,ingresarPrecio,ingresarTalle)
  productos.push(nuevoProducto)
  console.log(productos) 
}

function filtrarProductos(array){
  let buscarProducto = prompt("Ingrese el nombre del producto").toLowerCase()
  const productosEncontrados = array.filter((elemento)=>elemento.nombre === buscarProducto)
  if(productosEncontrados.length === 0){
      alert("Producto no encontrado")
  }
  console.log("Productos filtrados:")
  console.log(productosEncontrados)
}

let ingresarDato = prompt("¿Qué deseas hacer? \n1)Agregar Producto \n2)Filtrar Productos \n3)Salir")

while(ingresarDato !== "3"){
  if(ingresarDato==="1"){
      agregarProducto()
  }else if(ingresarDato ==="2" && productos.length > 0){
      filtrarProductos(productos)
  }else{
      alert("Opción no valida")
  }
  ingresarDato = prompt("¿Qué deseas hacer? \n1)Agregar Producto  \n2)Filtrar Productos \n3)Salir")
}









