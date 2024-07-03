import React, { useEffect, useState } from 'react';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/featuredProducts.json'); // Adjust the path as per your project structure
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="col-lg-12">
      <h4 className="mb-3">Featured products</h4>
      {products.map(product => (
        <div key={product.id} className="d-flex align-items-center justify-content-start">
          <div className="rounded me-4" style={{ width: '100px', height: '100px' }}>
            <img src={product.image} className="img-fluid rounded" alt="" />
          </div>
          <div>
            <h6 className="mb-2">{product.name}</h6>
            <div className="d-flex mb-2">
              {[...Array(product.rating)].map((star, index) => (
                <i key={index} className="fa fa-star text-secondary"></i>
              ))}
              {[...Array(5 - product.rating)].map((star, index) => (
                <i key={index} className="fa fa-star"></i>
              ))}
            </div>
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2">{product.price} $</h5>
              <h5 className="text-danger text-decoration-line-through">{product.originalPrice} $</h5>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center my-4">
        <a href="#" className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100">View More</a>
      </div>
    </div>
  );
}

export default FeaturedProducts;
