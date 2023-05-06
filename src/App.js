
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Gameview from './components/Gameview';



function App() {
  return (
    <div className="App">
   
       <Header/>
    <Routes>
          <Route path='/' element={<Main/>}/>   
          <Route path='/Gameview/:id' element={<Gameview/>}/> 
          
    </Routes>
       <Footer/>
  
    </div>
  );
}

export default App;
