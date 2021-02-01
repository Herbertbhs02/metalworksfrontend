
import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Products'

import Cart from './components/Cart'

function App() {

  return (
    <div >
      <Navbar/>
      
        <div className='App'>
            <Products/>
            
        </div>
    </div>
  );
}

export default App;
