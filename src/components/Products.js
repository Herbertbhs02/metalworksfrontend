import React, {useEffect,useState} from 'react'
import axios from 'axios'
import Item from './Item'
import Services from './Services'
import Category from './Category'
import Navbar from './Navbar';
import Footer from './Footer'

const display = [];

const Products = () => {

const [productdata, setProductdata] = useState(['doors'])//data.products
const [categorypick, setCategorypick] = useState("doors")//set Clothes category as a default product

//Function to select product category
const selection = async(e)=>{
   const response = await axios.get('http://metalworksback-env.eba-wjhkzvh7.eu-west-2.elasticbeanstalk.com/retrievework',{params:{category:e}})
   //const response = await axios.get('http://localhost:7070/retrievework',{params:{category:e}})
  setProductdata(response.data)
}
//xxxx
useEffect(()=>{
  const getproducts = async()=>{
  const res = await axios.get('http://metalworksback-env.eba-wjhkzvh7.eu-west-2.elasticbeanstalk.com/retrievework',{params:{category:categorypick}})
   //const res = await axios.get('http://localhost:7070/retrievework',{params:{category:categorypick}})
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
              <Navbar/>
              <Category selection={selection}/>
              <div className=' products  '>
                    {display2}
              </div>  
             <Footer/>
      </div>
  
    )

     }else

  return (
      <div>
            <Navbar/>
            <Category selection={selection}/>
            <div className=' products  '>
                  {display1}
            </div>  
            <Footer/>
    </div>

  )
}

export default Products