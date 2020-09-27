import React from 'react';
import './App.css';
import ProductTable from './component/ProductTable.js'


const products = [
            {name:"Laptop",
            category:"Electronics",
            price:"500$"},

            {name:"Iphone",
            category:"Electronics",
            price:"1500$"},

            {name:"Ipad",
            category:"Electronics",
            price:"1800$"},

            {name:"Oneplus",
            category:"Electronics",
            price:"300$"},

            {name:"Watch",
            category:"Electronics",
            price:"200$"},
]






function App() {
  return (
    <div className="app">
    <ProductTable products={products}/>
    </div>
  );
}

export default App;









// Create a project using create-react-app.
// Create inside App.js an array of object named products
// Each object contains a price, and name, and category which can be Electronics and Clothes.
// Create a component ProductTable, pass products array as props.
// ProductTable returns a table that has three columns Name, category, and price.
// Map your array of products inside the table.
// Use inline props to style your app as you wish.
// Use proptypes to define your props types

