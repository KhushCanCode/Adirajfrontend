import React, { useState, useEffect } from 'react';
import { Heart, Minus, Plus, Share2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import RingSlider from '../components/RingSlider';

const sizes = ['6', '7', '8', '9', '10'];

function ItemPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [showDetails, setShowDetails]  = useState(false);
  
    const handleQuantityChange = (type) => {
      if (type === 'increase') {
        setQuantity(prev => prev + 1);
      } else if (type === 'decrease' && quantity > 1) {
        setQuantity(prev => prev - 1);
      }
    };
  
    return (
      <div className="min-h-screen bg-gray-50 mt-32 md:mt-36">

        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
          <nav className="text-sm mb-4 md:mb-8">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-gray-500 hover:text-gray-900">Home</Link></li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-900 font-medium">Rings</li>
            </ol>
          </nav>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Product Image */}
            <div className="space-y-4">
              <div className=" bg-red-50 rounded-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800"
                  alt="Diamond Ring"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="aspect-square bg-red-50 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=200"
                      alt={`Diamond Ring View ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
            </div>
  
            {/* Product Details */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-2xl md:text-3xl font-bold text-dark">Elegant Diamond Ring</h1>
                <div className="flex items-center space-x-2">
                  <p className="text-xl md:text-2xl font-bold text-secondary">₹24,999</p>
                  <p className="text-base md:text-lg text-gray-500 line-through">₹29,999</p>
                </div>
              </div>

              <div className="space-y-4">
              <h3 className="text-sm font-medium ">Details</h3>
               <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm">
                 <li>22k solid gold—always</li>
                 <li>Diamond 4 C's: 0.005ct, Round, VSI-2, G/H</li>
                 <li>Weight: 6.5g</li>
                 <li>Rent Duration: 15 Days</li>
               </ul>
             </div>
            

              <div className="space-y-4">
               <div className="flex items-center justify-between">
                 <h3 className="text-sm font-medium">Ring size</h3>
                 <a href="#" className="text-sm text-gray-500 hover:text-gray-700 underline">Size Guide</a>
               </div>
               <div className="flex gap-2">
                 {[3, 4, 5, 6, 7, 8].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-full border cursor-pointer ${
                      selectedSize === size
                        ? 'border-secondary bg-secondary text-white'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
  
              {/* Quantity */}
              <div className="space-y-4">
              <h3 className="text-sm font-medium">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
  
              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button className="flex-1 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-primary transition-colors cursor-pointer">
                  Rent Now
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center border cursor-pointer ${
                    isWishlisted
                      ? 'border-secondary text-secondary'
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                <button className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-300 text-gray-600 hover:border-gray-400 cursor-pointer">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            {/* Description */}
            <div className="">
                <h3 className="text-sm font-medium mb-3">Description</h3>
                  <p className="text-gray-600">
                    This exquisite diamond ring features a stunning center stone surrounded by a halo of smaller diamonds. 
                    Crafted in 18K gold, it's perfect for special occasions. The ring comes with a certificate of authenticity 
                    and a luxury presentation box.
                  </p>
                </div>
              
            {/* Product Specifications */}
            <div className="space-y-4">
                <h3 className="text-sm font-medium py-2 border-y border-primary cursor-pointer" 
                onClick={()=> setShowDetails(!showDetails)}>Full Details</h3>
                {showDetails && (
                <div className="grid grid-cols-2 gap-4 text-sm">

                  {/* Full Details */}
                  
                  <div className="col-span-2 bg-gray-50 p-4 rounded-lg space-y-3">
                    <h3 className="font-medium text-gray-900">Metal Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-gray-500">Metal Type</p>
                        <p className="font-medium">18K Gold</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Purity</p>
                        <p className="font-medium">750 (18K)</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Color</p>
                        <p className="font-medium">Yellow Gold</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Weight</p>
                        <p className="font-medium">4.2 grams</p>
                      </div>
                    </div>
                  </div>
  
                  {/* Stone Details */}
                  <div className="col-span-2 bg-gray-50 p-4 rounded-lg space-y-3">
                    <h3 className="font-medium text-gray-900">Stone Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-gray-500">Center Stone</p>
                        <p className="font-medium">Natural Diamond</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Carat Weight</p>
                        <p className="font-medium">1.2 ct</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Cut Grade</p>
                        <p className="font-medium">Excellent</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Clarity</p>
                        <p className="font-medium">VS1</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Color Grade</p>
                        <p className="font-medium">F</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Shape</p>
                        <p className="font-medium">Round Brilliant</p>
                      </div>
                    </div>
                  </div>
  
                  {/* Additional Details */}
                  <div className="col-span-2 bg-gray-50 p-4 rounded-lg space-y-3">
                    <h3 className="font-medium text-gray-900">Additional Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-gray-500">Setting Type</p>
                        <p className="font-medium">Halo Setting</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Style</p>
                        <p className="font-medium">Modern</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Occasion</p>
                        <p className="font-medium">Wedding/Engagement</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-500">Rent Duration</p>
                        <p className="font-medium">3 Days</p>
                      </div>
                    </div>
                  </div>
                </div>)}
              </div>
                
            </div>
          </div>
        </div>
        {/* New in Store Section */}
      <div className='bg-white py-2 md:py-4 '>
        <div className='w-full flex items-center justify-center h-14 md:h-20  text-primary font-bold text-base md:text-2xl '>
            <div className='flex items-center gap-4'>
            <Sparkles className='text-neutral size-4 md:size-6'/>
             <h2 className='font-serif'>Suggested For You</h2>
            <Sparkles className='text-neutral size-4 md:size-6'/>
          </div>
      </div>
        <RingSlider/>
      </div>
      </div>
    );
}

export default ItemPage
