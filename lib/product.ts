import { products } from "@/data/product";

export const getProducts = () =>{
    return products;
}

export const getProductById=(id:number)=>{
return products.find(p=>p.id === id)
}