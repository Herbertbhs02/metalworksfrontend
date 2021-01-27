import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


toast.configure();

function Payment({totalprice,name,description}) {

  const [product] = React.useState({
    name: name,
    price:totalprice,
    description: description
  });
 

   const handleToken = async(token, addresses)=> {
     console.log({token, addresses})
     const response = await axios.post('http://localhost:8080/checkout',{token,product}) 
     
   
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
      
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="">
      {/* <div className="">
        <h1>{product.name}</h1>
        <h3>On Sale · ${product.price}</h3>
      </div> */}
      <StripeCheckout
        stripeKey="pk_test_51IDG6vGWpVzA8Bj4QhPBZfoXD6BKjZ8PkLyYQliyeipssJRYjJBAcf0501HN7GuK72PKnL65D2yY5YgeRNdxLMGP001gh5iVM7"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={totalprice*100}
      />
    </div>
  );
}
export default Payment