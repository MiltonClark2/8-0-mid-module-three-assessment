import { Component } from "react";
import "./App.css";
import productData from "./data/productData";



class App extends Component {
  constructor(){
    super()
    this.state = {
      productsList: productData,
      
    }
  }

  render(){
    return(
      <h1>My Garage Sale</h1>
  
    )
  };



}



export default App;
