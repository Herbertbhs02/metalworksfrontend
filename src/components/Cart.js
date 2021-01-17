import React from 'react'

const Cart = ({product,price,qty,image,deleteditem,id}) => {
    
     const amount = price*qty
  return (
    <div className="cart">
        <div className='row'>
                <div className='col s12 m6'> 
                <img className='cart-photo'  src={image} alt='product-image'/> 
                </div>

            <div className='cart-info col s12 m6'>
                    <span><b>Product:</b> {qty}x{product}</span><br/>
                    <span><b>Price:</b> £ {amount.toFixed(2)}</span> 
                  <button type="submit" className="delete right" onClick ={()=>deleteditem(id)}><i class="material-icons ">delete_forever</i></button>
            </div> 
          
        </div> 

            
    </div>

  )
}

export default Cart
