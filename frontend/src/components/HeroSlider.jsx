import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import HeroImage1 from "../assets/hero-image1.png"
import HeroImage2 from "../assets/hero-image2.png"
import HeroImage3 from "../assets/hero-image3.png"


function HeroSlider() {
    return(
        <div className="">
        <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={4000} transitionTime={1000} showArrows={false}>
            <div>
                <img src={HeroImage1} alt="hero-image1" />
            </div>
            <div>
                <img src={HeroImage2} alt="hero-image2" />
            </div>
            <div>
                <img src={HeroImage3} alt="hero-image3" />
            </div>
            <div>
                <img src={HeroImage2} alt="hero-image4" />
            </div >  
        </Carousel>
        </div>
    )
}

export default HeroSlider