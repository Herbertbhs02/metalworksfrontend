import axios from 'axios';
import React, {Component} from 'react'
import swal from 'sweetalert';
import '../App.css';

class Register extends Component {
  constructor(props) {
    super()
    this.state = {name:'', surname:'', email:'', password:'', confirm:''}
    
  }

  change = (e)=>{this.setState({[e.target.name]:e.target.value})}

  submit = async(e)=>{e.preventDefault();
                   if(this.state.password!==this.state.confirm){return swal("Passwords don't match Click ok and try again")}
                   else{
                     const  {confirm, ...reg}= this.state //using ES6 to filter out password confirm property
                     
              //API to register your details on Server  
            const response = await axios.post('https://awspractice.me/register', reg)
            this.props.selectlogin()
            console.log(response)
              this.setState({name:'',
                            surname:'',
                             email:'',
                             password:'',
                             confirm:''
                            })   
                                                        
                 }  }
                
   
                    

  render() {
   return (
        <div>
            <form onSubmit={this.submit}>
                <h4>Signup Form</h4>
                <input type='text' className='regInput' name='name'value={this.state.name.trim()} placeholder='First name' onChange={this.change}/><br/>
                <input type='text' className='regInput' name='surname'value={this.state.surname.trim()} placeholder='Surname' onChange={this.change}/><br/>
                <input type='text' name='email' value={this.state.email.trim()} placeholder='Email' onChange={this.change} /><br/>
                <input type='password' name='password' value={this.state.pass} placeholder='Password' autoComplete='none' onChange={this.change}/><br/>
                <input type='password' name='confirm' value={this.state.confirm} placeholder='Confirm Password' autoComplete='none' onChange={this.change}/><br/>
                <button >Submit</button>
            </form>
            <button className="modal-close"  onClick={this.props.close_log_regForm}><i className="  material-icons right">close</i></button>
        </div>
  )
  }
}
export default Register