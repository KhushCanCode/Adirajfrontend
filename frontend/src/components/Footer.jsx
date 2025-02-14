import React from 'react'
import Logo2 from "../assets/logofull.png";

function Footer() {
  return (
    <div className='relative h-[490px] md:h-[270px] lg:h-[252px]'
    style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%'}}>
        <div className='fixed h-[490px] md:h-[270px] lg:h-[252px] w-full bg-primary bottom-0 '>
            <footer className="bg-dark  text-neutral-400">
            <div className=" grid mx-auto max-w-7xl gird-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 lg:grid-cols-5 gap-10 px-4 pt-10 ">

                <div className='hidden lg:flex justify-start items-center'>  
                    <img src={Logo2} alt="logo" className='w-48 h-24' />
                </div>

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
                    </ul>
                </div>
            </div>
            <div>
                <p className="text-sm p-2 flex items-center justify-center bg-primary w-full mt-10 text-red-300">
                © 2024 Adiraj. All Rights Reserved.
                </p>
            </div>
            </footer>
            
        </div>
    
    </div>
  )
}

export default Footer