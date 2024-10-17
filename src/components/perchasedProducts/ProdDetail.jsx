// src/components/PurchasedProducts.jsx
import React from 'react';

// Example product detail component
const ProdDetail = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold text-gray-900">Price: ${product.price}</p>
            {/* You can add more details here */}
        </div>
    );
};
export default ProdDetail