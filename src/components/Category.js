import React, {useState} from 'react'


const Category = ({selection}) => {
  const [select, setSelect]= useState("doors")

  const [categoryselect]= React.useState({
         selection
  })

   const onChangeValue = (e)=>{ 
        setSelect(e.target.value)
        categoryselect.selection(e.target.value)
      }

  return (
    <div className='category'>
      <h6><b>Select  Product Category</b></h6>
      <p >
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

    {/* <label className="radio-btn">
      <input class="with-gap" value="windows" name="windows" type="radio"  checked={select==="windows"} onChange={onChangeValue} />
      <span>Windows</span>
    </label>  */}

    <label className="radio-btn">
      <input class="with-gap" value="services" name="services" type="radio"  checked={select==="services"} onChange={onChangeValue} />
      <span>Services</span>
    </label> 
    
  </p>
 

    </div>
  )
}

export default Category