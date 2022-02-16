import React from 'react'
import "./itemListContainer.css"

const Item = ({item}) => {
  //console.log(item.id)
  return (<div className='container col-lg-3'>
            <div className='cardsItem m-3 '>
                <div className="cardsImg">       
                </div>
                <div className="cardsBody card-body">
                  <p className="cardsParagraph text-reset">{item.descripcion}</p>
                  <p className="cardsParagraph text-reset">{item.detalle}</p>
                  <p className="cardsParagraph text-reset">Precio:${item.precio}</p><hr />
                  <a id="botonAgregarAlCarrito" className="btnAgregarAlCarrito btn btn-success"> Agregar al carrito <i className="fas fa-shopping-cart"></i></a><hr />
                  <p className="cardsParagraph text-reset"> <small>Stock: {item.stock} un</small> </p>
                </div>
            </div>
          </div>
  )
}

export default Item