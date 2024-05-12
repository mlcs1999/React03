import './App.css';
import { User } from './models/userModel';
import NavBar  from './components/NavBar';
import Products from './components/Products';
import { Product } from './models/product';
import { useState } from 'react';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const products: Product[] = [
  new Product(1, "Product 1", "Description 1", 0),
  new Product(2, "Product 2", "Description 2", 0),
  new Product(3, "Product 3", "Description 3", 0)
];

function App() {

  // const name = "Milica";
  const element = <h1>Dobrodosli</h1>;

  function fullName(user: User) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: "Milica",
    lastName: "Simic"
  }
  
  const [cartNum, setCartNum] = useState(0);
  
  const addToCart = (id: number) => {
    products.map((product) => {
      if (product.id === id) {
        product.amount = product.amount + 1;
        const a = cartNum + 1;
        setCartNum(a);
        console.log("product id=", product.id, "amount=", product.amount);
      }
    });
  };

  return (
    <BrowserRouter>
      <NavBar cartNum={cartNum}/>
      <Routes>
        <Route
        path='/'
        element={
        <Products products={products} onAdd={addToCart} />
        }
        />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
