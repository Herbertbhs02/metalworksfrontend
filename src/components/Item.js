import React,{useState} from 'react'
import '../App.css';

const Item = ({name,price,image,description,id,selectedid}) => {

  const[qty, setQty] = useState(1)
  const amount = (e)=>{setQty(e.target.value)}        
  return (
     
          
             <div className="card Item">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className='photo' src={image} alt='product-image'/>
                </div>
                
                <div className="card-content Item-content">
                <p><b>Product:</b> {name}</p>
                  <p><b>Price:</b> £{price.toFixed(2)}</p>
                  <span className="card-title activator "><i className="material-icons right">more</i></span>
                  
                </div>
                <div className="card-reveal orange darken-1">
                  
                  <span className="card-title  card-more grey-text text-darken-4"><b>{name}</b><i className=" icon-close material-icons right">close</i></span>
                  <p>{description}</p>
                </div>
               
                <input type='pin' placeholder='Enter qty' size='4' name='' value={qty} onChange={amount} className='Item-qty'/>
                <button className="btn Item-btn waves-effect waves-light" onClick={()=>selectedid({id,qty:qty})}
                type="submit" name="add">Add<i className="material-icons right">shopping_cart</i>   
                </button>
               
              </div>
  
  )
}

export default Item
