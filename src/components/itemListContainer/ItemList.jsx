import React from 'react'
import Item from './Item';

const ItemList = ({data}) => {
   
    return (
            <div className='d-flex flex-wrap border'>
                {data && data.map((i,key) => <Item key={key} item={i}/>)}
            </div>
    )
    
}

export default ItemList