'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion

const products = [
  { name: "Syltherine", description: "Stylish cafe chair", price: "Rp 2.500.000", img: "/chair.jpg", discount: "30%" },
  { name: "Loviosa", description: "Stylish cafe chair", price: "Rp 2.500.000", img: "/pic2.jpg" },
  { name: "Lolito", description: "Luxury big sofa", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "50%", img: "/woodchair.jpg" },
  { name: "Respira", description: "Outdoor bar table and stool", price: "Rp 500.000", img: "/table.jpg", new: true },
  { name: "Grifo", description: "Night lamp", price: "Rp 1.500.000", img: "/lamp.jpg" },
  { name: "Muggo", description: "Small mug", price: "Rp 150.000", img: "/mug.jpg", new: true },
  { name: "Pingky", description: "Cute bed set", price: "Rp 7.000.000", oldPrice: "Rp 14.000.000", discount: "50%", img: "/bed.jpg" },
  { name: "Potty", description: "Minimalist flower pot", price: "Rp 500.000", img: "/pot.jpg" },
];

const ProductGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      {/* Product Grid with Animation */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="relative bg-white shadow-md rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 50 }} // Initial state (fade + slide up)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible state
            transition={{ duration: 0.5, delay: index * 0.1 }} // Adding delay for staggered effect
            viewport={{ once: true }} // Animate only once as it comes into view
          >
            {/* Product Image */}
            <Image
              src={product.img}
              alt={product.name}
              width={600}
              height={64}
              priority
              className="w-full h-64 object-cover group-hover:opacity-70 transition duration-300"
            />

            {/* Discount Badge */}
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                -{product.discount}
              </span>
            )}

            {/* New Badge */}
            {product.new && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                New
              </span>
            )}

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold text-gray-900">
                {product.price}
                {product.oldPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">{product.oldPrice}</span>
                )}
              </p>
            </div>

            {/* Hover Actions */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="text-white bg-orange-400 px-4 py-2 rounded-lg">
                <Link href="/detail">Add To Cart</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0 }} // Start hidden
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 0.5 }} // Smooth transition
      >
        <button className="px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg">Show More</button>
      </motion.div>
    </div>
  );
};

export default ProductGrid;
