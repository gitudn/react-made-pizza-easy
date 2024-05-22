import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciuttoooo",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// MainApp here is the conventional App component which we usually render in the browser
// And all the other components like <pizza /> is nested as the following example
function MainApp() {
  return (
    <>
      <Header />
      <Menu />
    </>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>React Made Pizza Easy</h1>
    </header>
  );
}
/* Arrow functional component example
const Header = () => {
  return <h1>Pizza Italia Company</h1>;
};*/

//parent component
function Menu() {
  // we will now pass the data from this parent component to the child component  called Pizza(){...} below
  return (
    <>
      <h2 className="menuh2">Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaobj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="/pizzas/spinaci.jpg"
        price={11}
      />
      <Pizza
        name="Pizza Funghi"
        photoName="/pizzas/funghi.jpg"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={14}
      />
      <Pizza
        name="Pizza Margherita"
        photoName="/pizzas/margherita.jpg"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={8}
      />
      <Pizza
        name="Focaccia"
        photoName="/pizzas/focaccia.jpg"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
      /> */}

      <Footer />
    </>
  );
}

//child component  // receiving the props here in this child component
function Pizza(props) {
  //console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />
      <div>
        <h3>{props.pizzaobj.name}</h3>
        <p>{props.pizzaobj.ingredients}</p>
        <span>{props.pizzaobj.price + 3 + "€"}</span>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleString()} . We are currently open!
    </footer>
  );
}

// React Version 18
const rootFromIndexHtml = ReactDOM.createRoot(document.getElementById("root"));
rootFromIndexHtml.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
); //activating StrictMode while developing is always a good idea

// React before 18
//React.render(<App />);
