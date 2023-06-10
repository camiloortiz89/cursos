//! FUNCIONES RECURSIVAS
// Son funciones que se llaman infinitamente hasta cumplir la condicion de salida

//Muestra de N a 0 descendentemente, si a es menor a 0 termina la funcion
// const conteoRegresivo = (a) => {
//     if (a < 0) return
//     console.log(a);
//     return conteoRegresivo(a - 1);
// }
// conteoRegresivo(10);
// import axios from 'axios';

const llamarApi = async (url, peticiones = 0) => {
    try {
        const { data } = await axios.get(url);
        console.log(data);
        return data
    } catch (e) {
        if (peticiones > 2) {
            return '';
        }
        console.log(e);
        return llamarApi(url, peticiones + 1);
    }
}

llamarApi('https://jsonplaceholder.typicode.com/todods/1');


// const obj = {
//     nombre: 'Camilo',
//     data: {
//         nombre: 'Camilo pero en Data',
//         data: 'Sin mas data',
//     },
// }
// const { data } = obj; //Este fragmento obtiene unicamente la propiedad "data"
// console.log(data)
// Resultado: { nombre: 'Camilo pero en Data', data: 'Sin mas data' }