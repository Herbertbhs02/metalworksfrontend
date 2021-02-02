import React, {useState} from 'react'

const Category = ({selection}) => {
  const [select, setSelect]= useState("Clothes")

  const [categoryselect]= React.useState({
         selection
  })

   const onChangeValue = (e)=>{ 
        setSelect(e.target.value)
        categoryselect.selection(e.target.value)
      }

  return (
    <div>
      <h6><b>Select  Product Category</b></h6>
      <p >
    <label className="radio-btn">
      <input class="with-gap" value="Clother" name="Clothes" value="Clothes" type="radio" checked ={select==="Clothes"} onChange={onChangeValue} />
      <span>Clothes </span>
    </label>

    <label className="radio-btn">
      <input class="with-gap" value="Shoes" name="Shoes" type="radio" value="Shoes" checked ={select==="Shoes"} onChange={onChangeValue} />
      <span>Shoes</span>
    </label>

    <label className="radio-btn">
      <input class="with-gap" value="Fruits" name="Fruits" type="radio" value="Fruits" checked={select==="Fruits"} onChange={onChangeValue} />
      <span>Fruits</span>
    </label> 
  </p>
        

    </div>
  )
}

export default Category
