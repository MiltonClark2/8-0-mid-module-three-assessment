import { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import formatPrice from "./helpers/formatPrice";


class App extends Component {
  constructor(){
    super()
    this.state = {
      productsList: productData,
      cartItemList: [],

    }
  }

  handleAddToCartButton= (item) => {
    this.setState({
      cartItemList: [...this.state.cartItemList, item]
    })

  }

  handleBuyNowButton= () => {

  }

  handleFormSubmit= (e) => {
    e.preventDefault();
  }

  

  render(){
    
    let productsListArr = this.state.productsList.map((product)=>{
      let {name, price, img, description} = product;
      return(
        <div>
          <h3>{name}</h3>
          <div>Price: {formatPrice(price)}</div>
          <button type="submit" onClick={this.handleAddToCartButton}>Add To Cart</button>
          <img src={img} alt={name}/>
          <div>{description}</div>
        </div>
      )
    })


    return(
      <div className="products">

        <div id="products-container">
          <h1>My Garage Sale</h1>
          <div id="products-list">
           {productsListArr}
          </div>
        </div>
        
        <div id="cart-container">
          <ul>
            <h2>Cart</h2>
          </ul>
            <li>Baseball Glove: $19.99</li>
            <li>Old Newspapers: $7.50</li>
          <h3>Subtotal: $27.49</h3>
          <h3>Tax: $1.37</h3>
          <h3>Total: $28.86</h3>
        </div>

        <div id="checkout-container">
          <form id="checkout">
          <h2>Checkout</h2>
          <label htmlFor="first-name">First Name</label>
          <br/>
          <input type="text" id="first-name" />
          <br/>
          
          <label htmlFor="last-name">Last Name</label>
          <br/>
          <input type="text" id="last-name" />
          <br/>
          
          <label htmlFor="email">Email</label>
          <br/>
          <input type="text" id="email" />
          <br/>
          
          <label htmlFor="credit-card">Credit Card</label>
          <br/>
          <input type="text" id="credit-card" />
          <br/>
          
          <label htmlFor="zip-code">Zip Code</label>
          <br/>
          <input type="text" id="zip-code" />
          <br/>
          
          <button type="submit">Buy Now</button>
          </form>
        </div>

      </div>
      


  
    )
  };



}



export default App;
