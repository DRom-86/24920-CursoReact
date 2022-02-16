import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';


const ItemListContainer = ({greeting}) => {

    const data = [{id:1, descripcion:"Boligrafo", detalle:"Trazo fino azul 1mm", precio:50, stock:10},
                  {id:2, descripcion:"Lapiz", detalle:"Grafito HB", precio:20, stock:12},
                  {id:3, descripcion:"Regla", detalle:"Flexible de 15cm", precio:60, stock:30},
                  {id:4, descripcion:"Sacapuntas", detalle:"Plástico", precio:55, stock:18},
                  {id:5, descripcion:"Lapices de Colores", detalle:"Largos x12un", precio:180, stock:22}];

    const [info,setInfo] = useState(null)


    useEffect(()=>{
        const tarea = new Promise ((resolve,reject) => {
            setTimeout(() => {resolve(data)}, 2000)
            // reject("No se encontro")
        })

         tarea
            .then (result =>{
                setInfo(result);
            }).catch(err =>{
                console.log(err);
            })            
    },[])

        
    return (
        <div className='container mt-5'>
            <h1>{greeting}</h1>
            <div className='container mt-3'>
                <ItemList data={info}/>
            </div>
        </div>
    )
}

export default ItemListContainer
