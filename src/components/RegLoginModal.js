import React, {useState} from 'react'
import Modal from 'react-modal';
import '../App.css';
import Register from './Register';
import Login from './Login';


//Modal style 
const customStyles = {
    overlay:{
      backgroundColor:'grey',
      opacity: '0.91',
      zIndex: 1000
     
    },
    content : {
      color:'black',
      backgroundColor:'white',
      
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
   
      transform             : 'translate(-50%, -50%)'
    }
  };
  
  Modal.setAppElement('#root')

const RegLoginModal = ({customerLogin, signInModal, closeModal})=> {

  const [modalIsOpen,setIsOpen] = useState();
  const [select,setSelect] = useState(false);
   
  const selectReg = ()=>{setSelect(true)}
  const selectlogin = ()=>{setSelect(false)}

  

  const [log] = React.useState({
    customerLogin,
    closeModal
  });
 
 
  const login = (e)=>{
            
            log.customerLogin(e)
            log.closeModal()
  }
  
  const selectedComponent = (select ? <Register selectlogin={selectlogin}/> :<Login selectReg={selectReg} login={login} />) 
 
  return (
    <div>
      
      <Modal
                isOpen={signInModal}
                //onAfterOpen={afterOpenModal}
                //onRequestClose={closeModal}
                style={customStyles}
                >
            {selectedComponent}    
      </Modal>            
    </div>
  )

}

export default RegLoginModal
