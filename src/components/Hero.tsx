'use client';
// components/HeroSection.jsx
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-100">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }} // Initial opacity for fade-in effect
        animate={{ opacity: 1 }} // Animate to full opacity
        transition={{ duration: 1 }} // Duration of the fade-in
      >
        <Image
          src="/living-room.jpg"
          alt="Background Furniture"
          fill // This prop makes the image fill its parent container
          style={{ objectFit: 'cover' }} // Set object fit using style
          className="w-full h-full"
          priority
        />
      </motion.div>

      {/* Overlay Box */}
      <div className="flex items-center justify-start w-full h-full p-16 bg-black/20">
        <motion.div
          className="max-w-md bg-white/80 p-8 rounded-lg shadow-lg backdrop-blur-sm"
          initial={{ x: -100, opacity: 0 }} // Initial position and opacity for the card
          animate={{ x: 0, opacity: 1 }} // Animate to final position and full opacity
          transition={{ duration: 0.5, delay: 0.2 }} // Duration and delay for the animation
        >
          <p className="text-sm uppercase text-gray-600 font-semibold">New Arrival</p>
          <h1 className="text-4xl font-bold text-gray-900">
            Discover Our New Collection
          </h1>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="px-6 py-3 mt-6 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition">
                <Link href="/shop">Shop Now</Link>
              </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
