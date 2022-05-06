import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Item from './Item'
import Category from './Category'
import Navbar from './Navbar';

//const storeId = [];

const Products = () => {

const [productdata, setProductdata] = useState([])//data.products




const [categorypick, setCategorypick] = useState("doors")//set Clothes category as a default product

//Function to select product category
const selection = async(e)=>{
  
  const response = await axios.get('http://localhost:7070/retrievework',{params:{category:e}})
  setProductdata(response.data)
  
}
//xxxx
useEffect(()=>{
  
  const getproducts = async()=>{
  const res = await axios.get('http://localhost:7070/retrievework',{params:{category:categorypick}})
  setProductdata(res.data)
  }
  getproducts()
},[])



//List products. Item component is used in the map() method
const display = productdata.map(item=>(<div key={item._id}><Item image={item.image} name={item.product} price={item.price} description={item.description} id={item._id} /></div>))
 

  return (
      <div>
            <Navbar/>
        
            <Category selection={selection}/>
            <div className=' products  '>
                  {display}
            </div>  
         
    </div>

  )
}

export default Products