import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import Products from './Products';

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {email:'', password:'', isLogin:false}
      
    }
    
    change = (e)=>{this.setState({[e.target.name]:e.target.value})}

    login = async(e)=>{e.preventDefault();
                
                const {isLogin, ...log} = this.state
                
                const response = await axios.post('http://onlineshoppingbackend-env.eba-zaj9kvmp.eu-west-2.elasticbeanstalk.com/login', log)
                if(response.data.status===200){
                  //remove the login modal
                 
                  
                  //store the token in local store
                  localStorage.setItem('auth-token', response.data.token);localStorage.setItem('id', response.data.id)
                  const records = await axios.get('http://onlineshoppingbackend-env.eba-zaj9kvmp.eu-west-2.elasticbeanstalk.com/customerHistory',{params:{customerId:response.data.id}})
                  console.log('records', records.data)
                const history = records.data.map(item=>(<div><b>{new Date(item.date).toDateString()}</b><br/> Total: £{item.totalAmount}
                      {item.purchase.map(item=>(<div>{item.qty}x{item.product}:£{item.price}</div>))}
                
                </div>))

                  this.props.login(response.data, history)
                  //Use customer id to fetch previous purchase
                  swal('successfully login, Click ok to continue shopping')
                }else{
                  return swal(response.data.errorMessage)
                }
                
                this.setState({email:'',
                               password:'',
                               isLogin:true
                              })    
                                                                
                   }

    render() {
        return (
            <div >
              
                <form onSubmit={this.login}>
                  <input type='text' name='email' value={this.state.email.trim()} placeholder='email'  onChange={this.change} /><br/>
                  <input type='password' name='password' value={this.state.pass} placeholder='Password' autoComplete='none' onChange={this.change}/><br/>
                  <button>Sign in</button> 
                </form><br/>
                <button onClick={this.props.selectReg}>Register</button>
                <button className="modal-close" onClick={this.props.close_log_regForm}><i className=" material-icons right">close</i></button>
            </div>
        );
    }
}

export default Login;