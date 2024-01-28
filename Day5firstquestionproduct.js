import React, { useState } from 'react';

const ProductPage = () => {
  // Define the initial state for the product
  const [product, setProduct] = useState({
    name: 'Shirts',
    price: 1000,
    description: 'casuals',
  });

  // Function to handle changes in the product state
  const handleProductChange = (property, value) => {
    setProduct({
      ...product,
      [property]: value,
    });
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: Rs{product.price}</p>
      <p>Description: {product.description}</p>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={product.name}
          onChange={(e) => handleProductChange('name', e.target.value)}
        />
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          value={product.price}
          onChange={(e) => handleProductChange('price', parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          value={product.description}
          onChange={(e) => handleProductChange('description', e.target.value)}
        />
      </div>
    </div>
  );
};

export default ProductPage;