const Product = (props) => {
    return <>
        <div className="card">
            <a href="/" style={{ cursor: 'pointer' }}>
                <img
                    data-bs-toggle="modal"
                    data-bs-target="#product-modal"
                    src={props.imagesrc}
                    style={{
                        height: '200px',
                        width: '100%',
                        objectPosition: 'center',
                        maxHeight: '200px',
                        objectFit: 'contain',
                    }}
                    className="card-img-top img-fluid"
                    alt="Product"
                />
            </a>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text description">{props.description}</p>
                <p className="card-text">
                    <strong>Rs. </strong>{props.price}
                </p>
                <div className="d-flex justify-content-around align-content-center">
                    <p
                        className="btn btn-primary btn-sm"
                        style={{ pointerEvents: 'none', cursor: 'default' }}
                    >
                        In Stock <span className="badge text-bg-danger">{props.stock}</span>
                    </p>
                    <p className="btn btn-warning btn-sm">Add to Cart</p>
                </div>
            </div>
        </div>
    </>
}

export default Product;