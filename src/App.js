import { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import formatPrice from "./helpers/formatPrice";


class App extends Component {
  constructor(){
    super()
    this.state = {
      productsList: productData,
      cartProductsList: [],
      subtotal: 0,
      tax: 0,
      total: 0,
      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipCode: "",


    }
  }

  handleAddToCartButton= (event) => {
    const {productsList} = this.state
    const {value} = event.target
    let product = productsList.find(product =>{
      return product.name.includes(value) 
    })
    
    this.setState({
      cartProductsList: [...this.state.cartProductsList, product],
      subtotal: this.state.subtotal + product.price,
      tax: this.state.subtotal * .05,
      total: this.state.subtotal + this.state.tax
    })
    

  }

  handleBuyNowButton= () => {

  };

  handleFirstNameInput = (e) => {
    this.setState({
      firstName: e.target.value
    })
  };

  handleLastNameInput = (e) => {
    this.setState({
      lastName: e.target.value
    })
  };

  handleEmailInput = (e) => {
    this.setState({
      email: e.target.value
    })
  };

  handleCreditCardInput = (e) => {
    this.setState({
      creditCard: e.target.value
    })
  };

  handleZipCodeInput = (e) => {
    this.setState({
      zipCode: e.target.value
    })
  };
  

  handleFormSubmit= (e) => {
    e.preventDefault();
   
  };

  

  render(){
    
    let productsListArr = this.state.productsList.map((product)=>{
      let {name, price, img, description} = product;
      return(
        <div>
          <h3>{name}</h3>
          <div>Price: {formatPrice(price)}</div>
          <button className="products-button" type="submit" onClick={this.handleAddToCartButton}>Add To Cart</button>
          <img src={img} alt={name}/>
          <div>{description}</div>
        </div>
      )
    })

    // let cartProductsListArr = this.state.cartProductsList.map((product)=>{
    //   return(
    //       <li>
    //         {this.state.product.name}: {this.state.product.price}
    //       </li>
    //   )
    // })


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
            {this.state.cartProductsList}
            <li>Old Newspapers: $7.50</li>
          <h3>Subtotal: $27.49</h3>
          <h3>Tax: $1.37</h3>
          <h3>Total: $28.86</h3>
        </div>

        <div id="checkout-container">
          <form onSubmit={this.handleFormSubmit} id="checkout">
          <h2>Checkout</h2>
          <label htmlFor="first-name">First Name</label>
          <br/>
          <input 
            type="text" 
            id="first-name" 
            onInput={this.handleFirstNameInput}
            value={this.state.firstName}
          />
          <br/>
          
          <label htmlFor="last-name">Last Name</label>
          <br/>
          <input 
            type="text" 
            id="last-name"
            onInput={this.handleLastNameInput}
            value={this.state.lastName} 
          />
          <br/>
          
          <label htmlFor="email">Email</label>
          <br/>
          <input 
            type="text" 
            id="email"
            onInput={this.handleEmailInput}
            value={this.state.email}  
          />
          <br/>
          
          <label htmlFor="credit-card">Credit Card</label>
          <br/>
          <input 
            type="text" 
            id="credit-card"
            onInput={this.handleCreditCardInput}
            value={this.state.creditCard} 
          />
          <br/>
          
          <label htmlFor="zip-code">Zip Code</label>
          <br/>
          <input 
            type="text" 
            id="zip-code"
            onInput={this.handleZipCodeInput}
            value={this.state.zipCode}  
          />
          <br/>
          
          <button type="submit">Buy Now</button>
          </form>
        </div>

      </div>
      


  
    )
  };



}



export default App;
