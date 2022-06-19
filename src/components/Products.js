import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Item from './Item'
import Services from './Services'
import Category from './Category'
import Footer from './Footer'
import Home from './Home'

const display = [];

const Products = () => {

const [productdata, setProductdata] = useState(['home'])//data.products
const [categorypick, setCategorypick] = useState("home")//set home page  as a default product
const [loading, SetLoading] = useState(true)
//Function to select product category
const selection = async(e)=>{
   const response = await axios.get('https://metalworks.lol.metalworks.club/retrievework',{params:{category:e}})
  setProductdata(response.data)
}
//xxxx
useEffect(()=>{
  const getproducts = async()=>{
  const res = await axios.get('https://metalworks.lol.metalworks.club/retrievework',{params:{category:categorypick}})
  setProductdata(res.data)
  }
  getproducts()
},[])

//List products. Item component is used in the map() method
const display1 = productdata.map(item=>(<div key={item._id}><Item image={item.image} name={item.product} description={item.description} id={item._id} /></div>))
const display2 = productdata.map(item=>(<div key={item._id}><Services  name={item.product} description={item.description} id={item._id} /></div>))


     if(productdata[0].category ==='services'){
      return (
        <div>
              <Category selection={selection}/>
              <div className=' products  '>
                    {display2}
              </div>  
             <Footer/>
      </div>
  
    )

     }else if(productdata[0].category ==='home'){
   
      return (
        <div className=''>
              <Category selection={selection}/>
              <div className=' '>
               <Home/>
               </div>
              <Footer/>
      </div>
  
    )

     }else

  return (
      <div  className="">
            <Category selection={selection}/>
            <div className=' products  '>
                  {display1}
            </div>  
            <Footer/>
    </div>

  )
}

export default Products