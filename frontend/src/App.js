import React from 'react';
import data from './data';
import {BrowserRouter, Route,Link} from 'react-router-dom';
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
        <Link to="/">ShopMaxx</Link>
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
