import Product from "./Product";
import products from '../api.json';

function showProducts(product) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4" >
            <Product
                key={product.id}
                imagesrc={product.imageUrl}
                title={product.productName}
                price={product.price}
                description={product.description}
                stock={product.quantity}
            />
        </div>
    );
}

const Products = () => {
    return (
        <div className="container my-4" style={{ minHeight: '100vh' }}>
            <div className="row" id="product-cards">
                {products.map(showProducts)}
            </div>
        </div>
    );
}

export default Products;
