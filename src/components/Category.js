import React, {useState,useEffect} from 'react'
import '../App.css';


const Category = ({selection}) => {
  const [select, setSelect]= useState("home")
  const [categoryselect]= React.useState({
         selection
  })
   const onChangeValue = (e)=>{ 
        setSelect(e.target.value)
        categoryselect.selection(e.target.value)
      }


  return (
    <div className="category">
      <p><b>Tap or click on options below</b></p>
      <p >
      <label className="radio-btn">
      <input class="with-gap" value="home" name="home" type="radio"  checked={select==="home"} onChange={onChangeValue} />
      <span>Home</span>
    </label>  

    <label className="radio-btn">
      <input class="with-gap"  name="doors" value="doors" type="radio" checked ={select==="doors"} onChange={onChangeValue} />
      <span>Doors</span>
    </label>

    <label className="radio-btn">
      <input class="with-gap" value="Welding" name="Welding" type="radio"  checked ={select==="Welding"} onChange={onChangeValue} />
      <span>Welding</span>
    </label>

    <label className="radio-btn">
      <input class="with-gap" value="gate" name="gate" type="radio"  checked={select==="gate"} onChange={onChangeValue} />
      <span>Gates</span>
    </label> 

    <label className="radio-btn">
      <input class="with-gap" value="showcase" name="showcase" type="radio"  checked={select==="showcase"} onChange={onChangeValue} />
      <span>Showcase</span>
    </label> 

    

    <label className="radio-btn">
      <input class="with-gap" value="services" name="services" type="radio"  checked={select==="services"} onChange={onChangeValue} />
      <span>Services</span>
    </label>  
      </p>
    </div>
  )
}

export default Category