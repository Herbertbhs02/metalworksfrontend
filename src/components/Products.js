import React, {useState} from 'react'
//import axios from 'axios'
import data from '../data.json'
import Item from './Item'
import Cart from './Cart'



const Products = () => {

const [productdata, setProductdata] = useState(data.products)
const [cart, setCart] = useState([])


// fetch product id to use it to search a selected product and the quantity entered by the user
const selectedid = (e)=>{ 
  const selecteditem =  productdata.filter(n=>n._id===e.id)
  //Add qty into the object
  const Target = Object.assign(selecteditem[0], {qty:e.qty});
  setCart([...cart,Target])
   
}
const deleteditem = (e)=>{   
   const res = cart.filter(p=>p._id!==e)   
   setCart(res)
}  
//Calculate total price of items in the basket
const totalprice = cart.reduce((a, c) => a + c.price * c.qty, 0)
//Basket.Map through selected products
const basket = cart.map(item=>(<div key={item._id}><Cart qty={item.qty} product={item.product} price={item.price} image={item.image} deleteditem={deleteditem} id={item._id} /></div>))

//List products. Item component is used in the map() method
const display = productdata.map(item=>(<div key={item._id}><Item image={item.image} name={item.product} price={item.price} id={item._id} selectedid={selectedid}/></div>))

  return (
   <div className='row'>

        <div className=' products col s12 m10'>
              {display}
        </div>  

        <div className='col s12 m2'>
        <i class="material-icons ">shopping_cart</i><b>Basket cost: </b><span>£{totalprice.toFixed(2)}</span>
             {basket}
        </div>
         
  
    </div>

  )
}

export default Products