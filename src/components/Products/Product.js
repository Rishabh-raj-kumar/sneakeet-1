import React from 'react';
import product4 from '../../assets/shop/shoes_3d.png';
import { useMotionValue, useTransform, motion } from 'framer-motion';

const Product = () => {
  // Example product data
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100,100],[-30,30])
  const rotateY = useTransform(x, [-100,100],[-30,30])

  const product = {
    id: 1,
    name: 'Product Name',
    price: 29.99,
    description: 'Product description goes here...',
    image: product4,
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart');
  };

  const handleAddToFavorites = () => {
    // Add to favorites logic
    console.log('Added to favorites');
  };

  return (
    <>
    <section class=" text-gray-900 body-font overflow-hidden bg-gradient-to-r from-fuchsia-600 to-pink-600">
  <div class="container px-5 py-8 mx-auto" style={{ perspective : 2000}}>
  <motion.div
  style={{ x, y , rotateX, rotateY, z : 100}}
   drag dragElastic={0.18}
   dragConstraints={{ top : 0, left : 0,
  right : 0, bottom : 0}}
   className=' cursor-grab bg-transparent shadow-2xl shadow-red-400 p-2 rounded-md '>
    <div class="lg:w-4/5 flex flex-wrap">
      <motion.img
      style={{ x, y , rotateX, rotateY, z : 100}}
       drag dragElastic={0.18}
       dragConstraints={{ top : 0, left : 0,
      right : 0, bottom : 0}}
       alt="ecommerce" class="lg:w-1/2 lg:h-auto rounded" src={product.image}/>
      <div class="lg:w-1/2  lg:pl-10 lg:py-2 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-teal-50 font-semibold tracking-widest">BRAND NAME</h2>
        <h1 class=" text-black text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-purple-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-300" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span class=" text-blue-950 p-2">4_Reviews</span>
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed text-gray-950">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div class="flex mt-2 items-center pb-5 border-b-2 border-gray-100 mb-2">
          <div class="flex">
            <span class="mr-3">Color</span>
            <button class="border-2 border-red-600 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-yellow-500 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button class="border-2 border-blue-700 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div class="flex ml-6 items-center">
            <span class="mr-3">Size</span>
            <div class="relative">
              <select class=" text-gray-50 bg-pink-700 rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option className='p-2'>SM</option>
                <option className='p-2'>M</option>
                <option className='p-2'>L</option>
                <option className='p-2'>XL</option>
              </select>
              <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-200 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-200">$58.00</span>
          <button class="flex ml-3 text-white bg-rose-700 border-0 py-2 px-6 focus:outline-none hover:bg-rose-600 rounded">Buy</button>
          <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-red-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  </div>
</section>
      </>
  );
};

export default Product;
