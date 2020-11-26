import logo from './logo.svg';
import './App.css';

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
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Red dinner dress</a>
              </div>
              <div className="product-brand">amiko</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d2.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Fitting beige dress</a>
              </div>
              <div className="product-brand">Nelly</div>
              <div className="product-price">$90</div>
              <div className="product-rating">5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d3.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">White dress</a>
              </div>
              <div className="product-brand">Nelly</div>
              <div className="product-price">$60</div>
              <div className="product-rating">5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d4.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Blue bandage dress</a>
              </div>
              <div className="product-brand">Nimy</div>
              <div className="product-price">$40</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d5.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Floral skater dress</a>
              </div>
              <div className="product-brand">amiko</div>
              <div className="product-price">$55</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="images/d6.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Black skater dress</a>
              </div>
              <div className="product-brand">amiko</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  );
}

export default App;
