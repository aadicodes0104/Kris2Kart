import "./Card.css";

function Card({
  name,
  price,
  category,
  condition,
  seller,
  image,
  onViewDetails
}) {

  return (

    <div className="card">

      <div className="card-image">

        {image ? (

          <img src={image} alt={name} />

        ) : (

          <div className="image-placeholder">

            No Image

          </div>

        )}

      </div>

      <div className="card-content">

        <h2>{name}</h2>

        <p><strong>₹ {price}</strong></p>

        <p>{category}</p>

        <p>{condition}</p>

        <p>Seller : {seller}</p>

        <button
          className="details-btn"
          onClick={onViewDetails}
        >
          View Details
        </button>

      </div>

    </div>

  )

}

export default Card;




