import React,{useState} from 'react'
import Modal from 'react-modal';
import '../App.css';


import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

//Modal style 
const customStyles = {
  overlay:{
    backgroundColor:'grey',
    opacity: '0.91',
    zIndex: 1000
   
  },
  content : {
    color:'black',
    backgroundColor:'white',
    
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
 
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')
const Checkout = ({cart,totalprice, clearchart, customerId, updateparchase}) => {

  const [product] = React.useState({
    name:'purchasedItems',          
    price:totalprice,
    description:'variousItems',
    clearchart,
    cart,
    customerId,
    updateparchase
  });
  
  const [modalIsOpen,setIsOpen] = useState(false);
  

  const openModal = ()=>{
    setIsOpen(true)
  }
  const  closeModal = ()=>{
    setIsOpen(false);
  } 

  const shopping = cart.map(item=><div><span>Product:{item.qty}x{item.product} £:{(item.qty*item.price).toFixed(2)}</span></div>)
 
//End of modal code
//Stripe payment code
  

      const handleToken = async(token, addresses,)=> {
      
      const response = await axios.post('https://awspractice.me/checkout',{token,product, totalprice}) 
      //'http://onlineshoppingbackend-env.eba-zaj9kvmp.eu-west-2.elasticbeanstalk.com/checkout'
     const { status } = response.data;
     console.log("Response:", response.data);
     if (status === "success") {
       toast("Success! check your email", { type: "success" });
       setIsOpen(false);
      clearchart()// clear cart after payment
      //Save customer purchase details 
      const res = await axios.post('https://awspractice.me/purchasehistory',{cart, totalprice, customerId})      
       console.log('History',res)
     //update customer purchase history in the browser
       product.updateparchase()
     
     } else {
       toast("Something went wrong", { type: "error" });
     }
    }


  return (
    <div>
      <button className=" checkout light-blue  darken-4 btn-small " onClick={openModal}>Proceed to checkout</button>
      <Modal
          isOpen={modalIsOpen}
          //onAfterOpen={afterOpenModal}
          //onRequestClose={closeModal}
          style={customStyles}
        >
          
          <form >
            <span5><b>Purchase summary</b></span5><br/>
            <span><b>Total of:</b>£{totalprice.toFixed(2)} </span>
              {shopping} 
          </form>

          <button className='btn-small' onClick={closeModal}>Back</button>
        
            <StripeCheckout
        stripeKey="pk_test_51IDG6vGWpVzA8Bj4QhPBZfoXD6BKjZ8PkLyYQliyeipssJRYjJBAcf0501HN7GuK72PKnL65D2yY5YgeRNdxLMGP001gh5iVM7"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={totalprice*100}
      />
        </Modal>
    </div>
  )
}

export default Checkout
