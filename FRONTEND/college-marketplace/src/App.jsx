import "./App.css";
import SellItem from "./SellItem";
import { Routes, Route } from "react-router-dom"

import Home from "./Home"
import ItemDetail from "./ItemDetail"

function App() {

  return (
    <Routes>

      
      <Route
  path="/sell"
  element={<SellItem />}
/>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/item/:id"
        element={<ItemDetail />}
      />

    </Routes>
  )

}

export default App



