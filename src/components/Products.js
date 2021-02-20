import React, {useEffect,useState} from 'react'
import swal from 'sweetalert';
import axios from 'axios'
//import data from '../data.json'
import Item from './Item'
import Category from './Category'
import Cart from './Cart'
import Checkout from './Checkout'
// import Login from './Login'
import RegLoginModal from './RegLoginModal'
import Navbar from './Navbar';

const storeId = [];

const Products = () => {

const [productdata, setProductdata] = useState([])//data.products
const [cart, setCart] = useState([])
const [login, setLogin] = useState(false)//Customer login in status
const [customerEmail, setCustomerEmail] = useState('signIn')//Customer login in status
const [signInModal, setSignInModal] = useState(false)//used to activate sign in modal from nav bar link
const [categorypick, setCategorypick] = useState("Clothes")//set Clothes category as a default product

//Function to select product category
const selection = async(e)=>{
  const response = await axios.get('http://onlineshoppingbackend-env.eba-zaj9kvmp.eu-west-2.elasticbeanstalk.com/retrieveproducts',{params:{category:e}})
  setProductdata(response.data)
}

useEffect(()=>{
  
  const getproducts = async()=>{
  const res = await axios.get('http://onlineshoppingbackend-env.eba-zaj9kvmp.eu-west-2.elasticbeanstalk.com/retrieveproducts',{params:{category:categorypick}})
  setProductdata(res.data)
  }
  getproducts()
},[])

// fetch product id to use it to search a selected product and the quantity entered by the user
//Add item to the basket
const selectedid = (e)=>{ 
  const selecteditem =  productdata.filter(n=>n._id===e.id)
         if(!login){
         return swal('Sign in before you continue with your shopping please')

         }else if(storeId.indexOf(e.id)>=0){return swal({
                title: "oops!",
                text: "Item already in basket",
                button: "OK",
              })}//Terminate if already in the basket
        
  //Add qty into the object
      const Target = Object.assign(selecteditem[0], {qty:e.qty});
      setCart([...cart,Target])
      storeId.push(e.id)
}

//delete item from the basket
const deleteditem = (e)=>{   
  
   const res = cart.filter(p=>p._id!==e)   
   setCart(res)
   const pos =storeId.indexOf(e)
   storeId.splice(pos, 1);//update storeId array
  
}  

//Increment the qty of an item by one for each click
 const add_qty = (e)=>{
    cart.find(v=>v._id ===e.id).qty=e.qty
    setCart([...cart]) 
}

//Decrement the qty of an item by one for each click
const remove_qty = (e)=>{
       if(e.qty <= 0){return} //stop the decrement below zero. Terminate the operation
  cart.find(v=>v._id ===e.id).qty=e.qty
  setCart([...cart]) 
}

//Calculate total price of items in the basket
const totalprice = cart.reduce((a, c) => a + c.price * c.qty, 0)

//Basket.Map through selected products
const basket = cart.map(item=>(<div key={item._id}><Cart qty={item.qty} product={item.product} price={item.price} image={item.image} deleteditem={deleteditem} id={item._id} add_qty={add_qty} remove_qty={remove_qty}/></div>))

//List products. Item component is used in the map() method
const display = productdata.map(item=>(<div key={item._id}><Item image={item.image} name={item.product} price={item.price} description={item.description} id={item._id} selectedid={selectedid}/></div>))
 
// clears the chart after shopping
const clearchart = ()=>{setCart([])}// clears the chart after shopping

//Customer login status
const customerLogin = (e)=>{
   setLogin(true)
   setCustomerEmail(e)
}
console.log(login)
//Activate login initiated by sign in in the nav bar
const activatelogin = ()=>{
  setSignInModal(true)
}
//Close login Modal
const closeModal = ()=>{
  setSignInModal(false)
}
//Logout
const logOut = ()=>{
  setCustomerEmail('signIn')
  setLogin(false)
}

  return (
      <div>
             <Navbar activatelogin={activatelogin} email={customerEmail} logOut={logOut}/>
        <div className='row'>
            <Category selection={selection}/>
            <div className=' products col s12 m10'>
                  {display}
            </div>  

            <div className='basket-area col s12 m2'>              
            <i class="material-icons ">shopping_cart</i><b>Basket cost: </b><span className='totalprice'>£{totalprice.toFixed(2)}</span>
            {(cart.length!==0 && <Checkout cart={cart} totalprice={totalprice} clearchart ={clearchart} />)}  
                {(cart.length!==0 ? basket : <p>Basket Empty</p>)}    
          </div>

        
        <RegLoginModal customerLogin={customerLogin} signInModal={signInModal} closeModal={closeModal}/>
        
      </div>
    </div>

  )
}

export default Products
