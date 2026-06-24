 import { useState } from "react";
import FoodCard from "../components/FoodCard";

import burger from "../assets/burgers.jpg";
import pizza from "../assets/pizza.jpg";
import fries from "../assets/fries.avif";
import pasta from "../assets/pasta.jpg";
import chicken from "../assets/chicken.webp";
import sandwich from "../assets/sandwhich.jpg";

function Menu() {

  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
    alert(food.name + " added to cart 🛒");
  };


  return (
    <div className="container mt-5">

      <h1 className="text-center mb-4">
        🍽 Our Special Menu
      </h1>


      <h4 className="text-end">
        🛒 Cart Items: {cart.length}
      </h4>


      <div className="row">


        <div className="col-md-4 mb-4">
          <FoodCard
            name="Cheese Burger"
            price="120"
            image={burger}
            addToCart={addToCart}
          />
        </div>


        <div className="col-md-4 mb-4">
          <FoodCard
            name="Italian Pizza"
            price="250"
            image={pizza}
            addToCart={addToCart}
          />
        </div>


        <div className="col-md-4 mb-4">
          <FoodCard
            name="French Fries"
            price="90"
            image={fries}
            addToCart={addToCart}
          />
        </div>


        <div className="col-md-4 mb-4">
          <FoodCard
            name="Pasta"
            price="180"
            image={pasta}
            addToCart={addToCart}
          />
        </div>


        <div className="col-md-4 mb-4">
          <FoodCard
            name="Chicken"
            price="320"
            image={chicken}
            addToCart={addToCart}
          />
        </div>


        <div className="col-md-4 mb-4">
          <FoodCard
            name="Sandwich"
            price="150"
            image={sandwich}
            addToCart={addToCart}
          />
        </div>


      </div>


      <div className="mt-5">
        <h3>🛒 Your Cart</h3>

        {
          cart.map((item,index)=>(
            <div 
              key={index}
              className="card p-3 mb-2"
            >
              {item.name} - ₹{item.price}
            </div>
          ))
        }

      </div>


    </div>
  );
}

export default Menu;