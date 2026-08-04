import Navbar from "./Navbar";
import Hero from "./Hero"
import items from "./items"
import Card from "./Card"
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

 return (
  <>
    <Navbar />

    <Hero />

    <div id="marketplace">

    <h1>College Marketplace</h1>

    <h3>Available Items</h3>

<div className="marketplace-grid">

  {items.map((item) => (

    <Card
      key={item.id}

      name={item.name}

      price={item.price}

      category={item.category}

      condition={item.condition}

      seller={item.seller}

      image={item.image}

      onViewDetails={() => navigate(`/item/${item.id}`)}

    />

  ))}

</div>

</div>

  </>
)
}

export default Home





