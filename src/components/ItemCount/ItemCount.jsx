import React, { useState } from 'react'

const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(initial)

    function increment (){
        if (count < stock){
            setCount(count+1);
        } else if (count === stock){
            alert (`Alcanzaste el stock disponible`)
        }
    }
    function decrement (){
        if (count > 1){
            setCount(count-1);
        }
    }
    function onAdd(){
        alert (`agregaste ${count} productos`)
    }

  return (
    <div className='container pt-4 w-25 mt-5 border'>
        <div className='container d-flex justify-content-between'>
            <button className='btn btn-danger' onClick={decrement}>Quitar</button>
            <button className='btn btn-success' onClick={increment}>Agregar</button>
        </div><br/>
            <p className='mx-2'><b>{count}</b></p><hr />
        <div className='pb-4'>
            <button className='btn btn-dark' onClick= {onAdd}>Revisar</button>
        </div>
    </div>
  )
}

export default ItemCount