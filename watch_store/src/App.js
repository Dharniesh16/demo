import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home_page from './pages/Home_page';
import Header from './components/Header';
import Cart from './pages/Cart';
import Upload from './pages/Upload';
import Update from './pages/Update';
import Editts from './Editts';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>  
        <Route path='/' element={<Home_page/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='update' element={<Update/>}/>
        <Route path='/edit/:id' element={<Editts/>} loader={({params})=>
      fetch(`http://localhost:4040/allproducts/${params.id}`)} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
