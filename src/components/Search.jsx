import { useEffect, useState } from "react";
import products from '../api.json';
import SearchResult from "./SearchResult";

const Search = () => {
  const [search, setSearch] = useState('');
  const [product, setProduct] = useState(null);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (!search.trim()) {
      setProduct(null); // Clear the product if search input is empty
      return;
    }

    const matchedProduct = products.find(
      (product) => product.productName.toLowerCase() === search.toLowerCase()
    );
    setProduct(matchedProduct || null);
  }, [search]);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center p-3">
        <form
          className="w-25"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search Product"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>

      {product ? (
        <SearchResult product={product} />
      ) : (
        search && (
          <div className="text-center mt-3 text-muted">
            No product found for "{search}".
          </div>
        )
      )}
    </>
  );
};

export default Search;
