import "./SellItem.css";

function SellItem() {

  return (

    <div className="sell-page">

      <h1>Sell Your Item</h1>

      <form className="sell-form">

        <label>Upload Image</label>
        <input type="file" />

        <label>Item Name</label>
        <input type="text" placeholder="Enter item name" />

        <label>Price</label>
        <input type="number" placeholder="₹" />

        <label>Category</label>
        <select>

          <option>Electronics</option>

          <option>Books</option>

          <option>Furniture</option>

          <option>Accessories</option>

          <option>Others</option>

        </select>

        <label>Condition</label>

        <select>

          <option>Like New</option>

          <option>Excellent</option>

          <option>Good</option>

          <option>Fair</option>

        </select>

        <label>Description</label>

        <textarea
          rows="5"
          placeholder="Describe your item..."
        />

        <label>Contact Number</label>

        <input
          type="text"
          placeholder="9876543210"
        />

        <label>Availability</label>

        <input
          type="text"
          placeholder="After 5 PM"
        />

        <button type="submit">

          Post Item

        </button>

      </form>

    </div>

  );

}

export default SellItem;



