import React, {useState} from 'react';

const Prueba = (props) => {
    const [contador, setContador] = useState(0);

    function onAdd(){
        setContador(contador+1)
    }
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{contador}</p>
        <button onClick={()=> onAdd()}>Sumar</button>
        <button onClick={()=> setContador(contador-1)}>Restar</button>
        <button onClick={()=> setContador(0)}>Reset</button>
    </div>
  )
}

export default Prueba