const numeros =  [1, 2, 3]
/**aqui usamos una funcion para obtener el mayor del array  */
console.log(Math.max(...numeros)); /*el spread operator divide cada elemente y lo envio indivudualemente como un array  */

const frutas = ['Manzana', 'Pera'];
const verduras = ['Tomate', 'Zanahoria'];

const mercado = [...frutas, ...verduras];

console.log(mercado);


const persona = {nombre : "Luna", edad: 22}
const copia = {...persona}
const agregar = {...persona, activo:true};

console.log(agregar)