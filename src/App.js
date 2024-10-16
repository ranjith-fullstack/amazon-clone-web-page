import React  from "react";

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import { Index } from "./components";
import { Cart } from "./components/cart";
import { Product } from "./components/product";

function App() {

  return ( 
    <div>
      <BrowserRouter> 
      <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/Product" element={<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>


  );

  
}

export default App;
