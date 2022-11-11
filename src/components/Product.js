import React from 'react'
import Rating from './Rating';

function Product(props) {
    const { product }= props;
  return (
    <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                    
                    {/* image size: 680px by 830px */}
                    <img className="medium" 
                    src={product.images} 
                    alt={product.name} 
                    />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                      <h1>{product.name}</h1>
                    </a>
                    <Rating rating={product.rating} 
                    numReviews={product.numReviews}>
                    </Rating>
                    <div className="price">
                        ${product.price}
                    </div>  
                </div>
              </div>
  );
}
export default Product;
