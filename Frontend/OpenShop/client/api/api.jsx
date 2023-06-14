import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9000', // URL base de tu API
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:5173' // Origen permitido para las solicitudes
    }
  });

export function getProducts(){
    return api.get('http://localhost:9000/products');
}

console.log(getProducts);

export function postProducts(data){
    return api.post('http://localhost:9000/products', data);
}
