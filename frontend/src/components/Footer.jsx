import React from 'react'
import Logo2 from "../assets/logofull.png";

function Footer() {
  return (
    <div className='relative h-[470px] sm:h-[420px] md:h-[350px] lg:h-[350px]'
    style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%'}}>
        <div className='fixed h-[470px] sm:h-[420px] md:h-[350px] lg:h-[350px] w-full bg-primary bottom-0 '>
            <footer className="bg-dark h-[470px] md:h-[350px] sm:h-[420px] lg:h-[350px] text-neutral-400 ">

            <div className=' justify-center items-center w-[100%] py-4 flex '>  
                    <img src={Logo2} alt="logo" className='w-30 md:w-48 md:h-24 ' />
            </div>

            <div className="  mx-auto max-w-7xl grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-6 py-4 md:px-20 px-8 md:place-items-center ">

                {/* Info Section */}
                <div className=' '>
                <h4 className="text-neutral-300 font-semibold">INFO</h4>
                <ul className="mt-2 space-y-1">
                    <li><a href="#" className="hover:underline">Our Store</a></li>
                    <li><a href="#" className="hover:underline">Account</a></li>
                    <li><a href="#" className="hover:underline">Jewelry Care Guide</a></li>
                    <li><a href="#" className="hover:underline">Terms & Privacy</a></li>
                </ul>
                </div>

                {/* Support Section */}
                <div className=''>
                <h4 className="text-neutral-300 font-semibold">SUPPORT</h4>
                <ul className="mt-2 space-y-1">
                    <li><a href="#" className="hover:underline">Contact</a></li>
                    <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
                    <li><a href="#" className="hover:underline">FAQ</a></li>
                    <li><a href="#" className="hover:underline">Accessibility</a></li>
                </ul>
                </div>

                {/* Services */}
                <div className='j'>
                    <h4 className="text-neutral-300 font-semibold">SERVICES</h4>
                    <ul className="mt-2 space-y-1">
                    <li><a href="#" className="hover:underline">Private Appointments</a></li>
                    <li><a href="#" className="hover:underline">Diamond Guide</a></li>
                    <li><a href="#" className="hover:underline">Repairs</a></li>
                    <li><a href="#" className="hover:underline">Rent</a></li>
                    </ul>
                </div>

                    {/* Connect */}
                <div className=''>
                    <h4 className="text-neutral-300 font-semibold ">CONNECT</h4>
                    <ul className="mt-2 space-y-1">
                    <li><a href="#" className="hover:underline">Instagram</a></li>
                    <li><a href="#" className="hover:underline">Pinterest</a></li>
                    <li><a href="#" className="hover:underline">TikTok</a></li>
                    <li><a href="#" className="hover:underline">Youtube</a></li>
                    </ul>
                </div>
            </div>
            {/* <div>
                <p className="text-sm p-2 flex items-center justify-center bg-dark w-full mt-10 text-red-300">
                © 2024 Adiraj. All Rights Reserved.
                </p>
            </div> */}
            </footer>
            
        </div>
    
    </div>
  )
}

export default Footer