import { useParams, Link } from "react-router-dom"
import items from "./items";
import "./ItemDetail.css";

function ItemDetail() {

  const { id } = useParams()
  const item = items.find((item) => item.id === Number(id))

  if (!item) {
    return <h2>Item not found</h2>
  }

  return (

<div className="detail-page">

    <Link className="back-btn" to="/">
        ← Back to Marketplace
    </Link>

    <div className="detail-card">

        <div className="detail-image">

            {item.image_path ? (

                <img src={item.image_path} alt={item.name} />

            ) : (

                <div className="image-placeholder">

                    No Image

                </div>

            )}

        </div>

        <div className="detail-info">

            <h1>{item.name}</h1>

            <h2>₹ {item.price}</h2>

            <p><strong>Category:</strong> {item.category}</p>

            <p><strong>Condition:</strong> {item.condition}</p>

            <p><strong>Seller:</strong> {item.seller}</p>

            <p><strong>Contact:</strong> {item.contact}</p>

            <p><strong>Availability:</strong> {item.availability}</p>

            <p className="description">
                {item.description}
            </p>

            <button className="contact-btn">

                Contact Seller

            </button>

        </div>

    </div>

</div>

)}

export default ItemDetail





