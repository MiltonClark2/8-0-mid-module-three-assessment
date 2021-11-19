import { Component } from "react";
import "./App.css";
import productData from "./data/productData";
import formatPrice from "./helpers/formatPrice";


class App extends Component {
  constructor(){
    super()
    this.state = {
      productsList: productData,

    }
  }

  handleAddToCart= () => {

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
          <button>Add To Cart</button>
          <img src={img} alt={name}/>
          <div>{description}</div>
        </div>
      )
    })


    return(
      <div>
        <h1>My Garage Sale</h1>
        <div>
          {productsListArr}
        </div>
        <div>
          <h2>Cart</h2>
          <ul>Baseball Glove: $19.99</ul>
          <ul>Old Newspapers: $7.50</ul>
          <h3>Subtotal: $27.49</h3>
          <h3>Tax: $1.37</h3>
          <h3>Total: $28.86</h3>
        </div>
      </div>
      


  
    )
  };



}



export default App;
