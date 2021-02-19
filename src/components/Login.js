import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {email:'', password:'', isLogin:false}
      
    }
    
    change = (e)=>{this.setState({[e.target.name]:e.target.value})}

    login = async(e)=>{e.preventDefault();
                
                const {isLogin, ...log} = this.state
                //console.log(log)
                const response = await axios.post('http://onlineshoppingbackend-env.eba-zaj9kvmp.eu-west-2.elasticbeanstalk.com/login', log)
                if(response.data.status===200){
                  //remove the login modal
                  this.props.login(response.data.email)
                  

                  //store the token in local store
                  localStorage.setItem('auth-token', response.data.token);localStorage.setItem('id', response.data.id)
                  localStorage.setItem('email', response.data.email)
                  //show customer email in the nav-bar
                  //Use customer id to fetch previous purchase
                  swal('successfully login, Click ok to continue shopping')
                }else{
                  return swal(response.data.errorMessage)
                }
                console.log(response.data)
                this.setState({email:'',
                               password:'',
                               isLogin:true
                              })    
                                                                
                   }

    render() {
        return (
            <div>
              
                <form onSubmit={this.login}>
                  <input type='text' name='email' value={this.state.email.trim()} placeholder='email'  onChange={this.change} /><br/>
                  <input type='password' name='password' value={this.state.pass} placeholder='Password' autoComplete='none' onChange={this.change}/><br/>
                  <button>Sign in</button> 
                </form><br/>
                <button onClick={this.props.selectReg}>Register</button>
                
            </div>
        );
    }
}

export default Login;