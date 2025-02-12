import { useRef , useState} from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bentoImage2 from "../assets/bento-image2.jpg";
import bentoImage3 from "../assets/bento-image3.jpg";
import bentoImage4 from "../assets/bento-image4.jpg";
import bentoImage5 from "../assets/bento-image5.jpg";
import { ArrowUpRightFromSquare, Heart, MoveLeft, MoveRight } from "lucide-react";


const jewelleryItems = [
  { id: 1, image: bentoImage2, alt: "Image 2" ,name: "Engagement Ring", price: "$2000", size: "S"},
  { id: 2, image: bentoImage3, alt: "Image 3" ,name: "Engagement Ring", price: "$2000", size: "M"},
  { id: 3, image: bentoImage4, alt: "Image 4" ,name: "Engagement Ring", price: "$2000", size: "L"},
  { id: 4, image: bentoImage5, alt: "Image 5" ,name: "Engagement Ring", price: "$2000", size: "S"},
  { id: 5, image: bentoImage3, alt: "Image 3" ,name: "Engagement Ring", price: "$2000", size: "M"},
  { id: 6, image: bentoImage2, alt: "Image 2" ,name: "Engagement Ring", price: "$2000", size: "L"},
  { id: 7, image: bentoImage5, alt: "Image 5" ,name: "Engagement Ring", price: "$2000", size: "S"},
  { id: 8, image: bentoImage4, alt: "Image 4" ,name: "Engagement Ring", price: "$2000", size: "S"},
];

function RingSlider (){
  const sliderRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: true, // Ensures better focus management
    arrows:false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4">
     <Slider ref={sliderRef} {...settings}>
        {jewelleryItems.map((item) => (
          <div
            key={item.id}
            className="relative p-2 group"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-auto object-cover rounded-md transition-transform duration-300 group-hover:scale-105 cursor-pointer"
            />

            {/* Product Details Card - Appears on Hover */}
            {hoveredItem === item.id && (
              <div className="absolute inset-0 bg-primary text-white rounded-md transition-opacity duration-600 cursor-pointer opacity-95 p-2 flex justify-center items-center">
                <div className="border border-white h-full w-full flex flex-col items-center  justify-center">
                  <h3 className="text-2xl font-semibold">{item.name}</h3>
                  <div className="flex items-center justify-between w-1/2">
                    <p>Size:</p>
                    <p className="text-sm">{item.size}</p>
                  </div>
                  <div className="flex items-center justify-between w-1/2">
                    <p>Price:</p>
                   <p className="text-lg font-bold">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-8">
                    
                  <button className=" px-4 py-2 bg-light text-primary hover:bg-secondary hover:text-white transition duration-300  rounded-md cursor-pointer">Shop Now</button>
                  <div className="bg-light text-primary p-2 hover:bg-secondary hover:text-white  rounded-full text-white">
                     <Heart className=""/>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </Slider>
       

      {/* Custom Navigation Buttons Below the Slider */}
      <div className="custom-arrows flex justify-between items-center px-5 pb-4">
        <button onClick={() => sliderRef.current.slickPrev()} className="arrow-button bg-primary hover:bg-secondary transition duration-500 p-2 rounded-full text-light cursor-pointer">
          <MoveLeft className="size-4 md:size-6"/>
        </button>
        <button onClick={() => sliderRef.current.slickNext()} className="arrow-button bg-primary hover:bg-secondary transition duration-500 p-2 rounded-full text-light cursor-pointer">
          <MoveRight className="size-4 md:size-6"/>
        </button>
      </div>
    </div>
  );
}

export default RingSlider;