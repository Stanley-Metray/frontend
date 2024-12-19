
const SearchResult = (props) => {
    const { productName, price, quantity, description, imageUrl } = props.product;
  
    return (
      <>
        <div className="my-3 d-flex flex-column justify-content-center align-items-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt={productName} />
            <div className="card-body">
              <h5 className="card-title">{productName}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Price: ₹{price}</h6>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <strong>Available Quantity:</strong> {quantity}
              </p>
              <a href="/product" className="btn btn-primary">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default SearchResult;
  