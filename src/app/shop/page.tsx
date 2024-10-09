// pages/shop.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';


const products = [
  {
    id: 1,
    name: 'Comfy Chair',
    price: '$499',
    image: '/comfychair.jpg', // Directly referencing the image in the public folder
  },
  {
    id: 2,
    name: 'Wooden Chair',
    price: '$299',
    image: '/woodchair.jpg',
  },
  {
    id: 3,
    name: 'Office Chair',
    price: '$199',
    image: '/officechair.jpg',
  },
  {
    id: 4,
    name: 'Chair',
    price: '$149',
    image: '/chair3.jpg',
  },
  {
    id: 1,
    name: 'Sofa Set',
    price: '$499',
    image: '/sofa.jpg', // Directly referencing the image in the public folder
  },
  {
    id: 2,
    name: 'Sofa Set',
    price: '$299',
    image: '/sofaset1.jpg',
  },
  {
    id: 3,
    name: 'Sofa Set',
    price: '$199',
    image: '/sofaset2.jpg',
  },
  {
    id: 4,
    name: 'Sofa Set',
    price: '$149',
    image: '/sofaset3.jpg',
  },
  {
    id: 1,
    name: 'Bed',
    price: '$499',
    image: '/bed2.jpg', // Directly referencing the image in the public folder
  },
  {
    id: 2,
    name: 'Wooden Bed',
    price: '$299',
    image: '/bed1.jpg',
  },
  {
    id: 3,
    name: 'Bed',
    price: '$199',
    image: '/bed3.jpg',
  },
  {
    id: 4,
    name: 'Bed',
    price: '$149',
    image: '/bed4.jpg',
  },
  {
    id: 4,
    name: 'Lamp',
    price: '$149',
    image: '/lamp.jpg',
  },
  {
    id: 4,
    name: 'Lamp',
    price: '$149',
    image: '/lamp1.jpg',
  },
  {
    id: 4,
    name: 'Lamp',
    price: '$149',
    image: '/lamp2.jpg',
  },
  {
    id: 4,
    name: 'Lamp',
    price: '$149',
    image: '/lamp3.jpg',
  },
  // Add more products as needed
];

const Shop: React.FC = () => {
  return (
    <div className="container mx-auto mb-10 p-8">
      <h1 className="text-4xl font-bold text-center my-8 text-yellow-600">Shop Our Collection</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {products.map((product, index) => (
            <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <Image src={product.image} alt={product.name} width={400} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg text-gray-700">{product.price}</p>
              <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-md transition-transform transform hover:scale-105">
              <Link href="/detail">Add To Cart</Link>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
