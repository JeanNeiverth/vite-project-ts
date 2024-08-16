import { useEffect, useState } from "react";
import {Header} from "../components/Header.tsx"
import styles from './Api.module.css'
import { useForm } from 'react-hook-form'

interface ProductType {
    id:number,
    name:string,
}

export function Api() {

    const [products, setProducts] = useState<ProductType[]>([]);
    const {register, handleSubmit, getValues} = useForm()
    // const text = watch('search');


    async function loadProducts(queryObj:URLSearchParams) {
        const queryString = queryObj.toString()
        const response = await fetch(`http://localhost:3000/products/?${queryString}`);
        const data = await response.json();
        setProducts(data);
    }

    function submitFormSearch() {
        const queryObj = {q:getValues('search')}
        loadProducts(new URLSearchParams(queryObj))
    }
    function submitFormNewProduct() {
        const newProduct = getValues('newProduct')
        if (newProduct.length > 0) {
            addNewProduct(newProduct)
        }
        else {
            console.log('Não foi possível criar novo produto')
        }
        
    }

    useEffect( () => {
        loadProducts(new URLSearchParams());
    }, [] )

    const productsReact = products.map(product => {
        console.log(product.name)
        return (<li key={product.id}>{product.name}</li>)
    })

    function createNewId(ids:number[]) {
        let newId = 1;
        while (ids.includes(newId)) {
            newId = newId+1
        }
        return newId;
    }

    function addNewProduct(name:string) {
        const newId = createNewId(products.map(product => product.id))
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               'id': newId,
               'name': name
            })
        }).then(() => loadProducts(new URLSearchParams))
    }


    return (
        <div>
            <Header />
            <div className={styles.apiContainer}>
                <form className={styles.search} onSubmit={handleSubmit(submitFormSearch)}>
                    <input id="search" type="text" placeholder="Faça uma busca" {...register('search')}/>
                </form>
                <ul>
                    {productsReact}
                </ul>
                <form className={styles.search} onSubmit={handleSubmit(submitFormNewProduct)}>
                    <input id="newProduct" type="text" placeholder="Adicione um novo produto" {...register('newProduct')}/>
                </form>
            </div>
        </div>
    )
}