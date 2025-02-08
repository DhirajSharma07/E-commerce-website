import React from 'react';
import Cardcomponet from './Cardcomponet';

function Shop() {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center mb-10 pt-10 text-center" id='shop' >
        <h4 className=" font-bold uppercase text-orange-500 text-xl">Cloths</h4>
        <h1 className="text-3xl font-bold ttext-black">Top Selling Products</h1>
        <p className="text-gray-600 max-w-md text-xs font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo temporibus consectetur ipsa, quae exercitationem corrupti, ad ea eaque.
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:px-24 gap-6 pb-10">
        <Cardcomponet name="Men's Jeans" price="300" src="https://www.gapfactory.com/webcontent/0017/339/435/cn17339435.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="Men's Jeans" price="300" src="https://www.gapfactory.com/webcontent/0017/339/435/cn17339435.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="Men's Jeans" price="300" src="https://www.gapfactory.com/webcontent/0017/339/435/cn17339435.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="Men's Jeans" price="300" src="https://www.gapfactory.com/webcontent/0017/339/435/cn17339435.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="Men's Jeans" price="300" src="https://www.gapfactory.com/webcontent/0017/339/435/cn17339435.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
        <Cardcomponet name="T-Shirt" price="150" src="https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product-gallery@2x.jpg" />
      </div>
    </>
  );
}

export default Shop;
