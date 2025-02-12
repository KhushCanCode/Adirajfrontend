import bentoImage1 from "../assets/bento-image1.jpg";
import bentoImage2 from "../assets/bento-image2.jpg";
import bentoImage3 from "../assets/bento-image3.jpg";
import bentoImage4 from "../assets/bento-image4.jpg";
import bentoImage5 from "../assets/bento-image5.jpg";
import bentoImage6 from "../assets/bento-image6.jpg";

const BentoGrid = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4 p-2 lg:p-4 ">
      {/* High Jewelry */}
      <div className="col-span-1 md:col-span-1  order-1 md:order-none">
        <img src={bentoImage1} alt="High Jewelry" className="w-full h-full lg:h-full object-cover" />
      </div>

      {/* Gold Text Box */}
      <div className="bg-light p-10 md:p-6 lg:p-16 flex flex-col justify-center text-secondary order-2 md:order-3">
        <h2 className="text-2xl lg:text-4xl font-semibold ">GOLD</h2>
        <p className="mt-2 text-lg sm:text-xl md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
        <button className="mt-4 w-full sm:w-[60%] md:w-[50%] border border-secondary py-2 px-4 hover:bg-secondary hover:text-white cursor-pointer">Discover</button>
      </div>

      {/* Jewelry Items */}
      <div className="grid grid-cols-2 gap-2 md:gap-1 lg:gap-4 order-3 md:order-2  ">
        <div className="h-full w-full">
         <img src={bentoImage2} alt="Earrings" className="w-full h-full object-cover" />
        </div>
        <div className="h-full">
        <img src={bentoImage3} alt="Studs" className="w-full h-full  object-cover" />
        </div>
        <div className="h-full">
        <img src={bentoImage4} alt="Rings" className="w-full h-full  object-cover" />
        </div>
        <div className="h-full">
        <img src={bentoImage5} alt="More Jewelry" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Diamonds Text Box */}
      <div className="bg-dark p-10 md:p-6 lg:p-16 flex flex-col justify-center text-light order-4 h-auto lg:h-3/4  md:order-4">
        <h2 className="text-2xl lg:text-4xl font-semibold ">DIAMONDS</h2>
        <p className="mt-2 text-lg md:text-xl lg:text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
        <button className="mt-4 w-full sm:w-[60%] md:w-[50%] border border-secondary py-2 px-4 hover:bg-light hover:text-dark cursor-pointer">Discover</button>
      </div>

      {/* Fashion Image */}
      <div className="col-span-1 sm:col-span-2 order-5 md:order-5">
        <img src={bentoImage6} alt="Fashion Look" className="w-full h-auto sm:h-3/4 md:h-full lg:h-3/4 object-cover" />
      </div>
    </div>
    );
  };
  
  export default BentoGrid;
  