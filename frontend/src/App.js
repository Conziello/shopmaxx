import React from 'react';
import data from './data';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">ShopMaxx</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Outfits</a>
        </li>

        <li>
          <a href="index.html">Hair and accessories</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/" exact={true} component={HomeScreen}/>
        <Route path="/product/:id" component={ProductScreen}/>
        
        <ul className="products">
         
         {
         data.products.map(product =>
          <li>
          <div className="product">
            <img className="product-image" src={product.image} alt="product" />
            <div className="product-name">
              <a href="product.html">
                {product.name}
              </a>
            </div>
         <div className="product-brand">{product.brand}</div>
         <div className="product-price">${product.price}</div>
            <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
          </div>
          </li>
         )}

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>

  </BrowserRouter>

  );
}

export default App;
