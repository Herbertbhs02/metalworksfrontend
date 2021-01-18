import React from 'react'

const Cart = ({product,price,qty,image,deleteditem,id,add_qty,remove_qty}) => {
    
     const amount = price*qty
  return (
    <div className="cart">
        <div className='row'>
                <div className='col s12 m6'> 
                <img className='cart-photo'  src={image} alt='product-image'/> 
                </div>

            <div className='cart-info col s12 m6'>
                    <span><b>Product</b> {qty}x{product}</span><br/>
                    <span><b>Price:</b> £ {amount.toFixed(2)}</span> 
                    <a className="btn-floating btn-small add-btn" onClick={()=>add_qty({id,qty:Number(qty)+1})}><i className="material-icons">add</i></a>
                    <a className="btn-floating btn-small " onClick={()=>remove_qty({id,qty:Number(qty)-1})}><i className="material-icons">remove</i></a>
                  <button type="submit" className="delete delete-btn right " onClick ={()=>deleteditem(id)}><i className="material-icons ">delete_forever</i></button>
            </div> 
          
        </div> 

            
    </div>

  )
}

export default Cart
