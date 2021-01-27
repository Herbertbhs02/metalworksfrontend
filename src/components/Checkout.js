import React,{useState} from 'react'
import Modal from 'react-modal';
import '../App.css';
import Payment from './Payment'

//Modal code
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
const Checkout = ({cart,totalprice}) => {
  console.log(cart)
  console.log(totalprice)
  const [modalIsOpen,setIsOpen] = useState(false);

  const openModal = ()=>{
    setIsOpen(true)
  }
 
  const  closeModal = ()=>{
    setIsOpen(false);
    
  } 
  const shopping = cart.map(item=><div><span>Product:{item.qty}x{item.product} £:{(item.qty*item.price).toFixed(2)}</span></div>)



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
              {/* <input className='email' required  name='email' placeholder='Type your email'/>
              <textarea className='address'  placeholder='Enter the shipping address'></textarea>  */}
          </form>

          <button className='btn-small' onClick={closeModal}>Back</button>
          <Payment  totalprice = {totalprice.toFixed(2)}
                    name='purchasedItems'
                    description='variousItems'
                    />
          
       
               

        </Modal>
    </div>
  )
}

export default Checkout
