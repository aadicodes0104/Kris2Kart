import "./App.css";
import SellItem from "./SellItem";
import { Routes, Route } from "react-router-dom"

import home from "./home"
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
        element={<home />}
      />

      <Route
        path="/item/:id"
        element={<ItemDetail />}
      />

    </Routes>
  )

}

export default App



