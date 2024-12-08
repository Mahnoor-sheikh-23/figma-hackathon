import React from 'react';
import Image from 'next/image';
import twitter from "../public/image/twitter.png";
import facebook from "../public/image/facebook.png";
import insta from "../public/image/insta.png";
import youtube from "../public/image/youtube.png";
import india from "../public/image/india.png";


const Footer = () => {
    return (
        <div className="flex flex-col bg-black text-white h-auto w-full p-6 lg:h-[431px] justify-between">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Links Section */}
                <div className="flex flex-col lg:flex-row justify-around gap-6 lg:gap-36 leading-9 p-6 lg:p-9">
                    <div>
                        <ul className="font-normal text-[13px]">
                            <li>FIND A STORE</li>
                            <li>BECOME A MEMBER</li>
                            <li>SIGN UP FOR EMAIL</li>
                            <li>Send us Feedback</li>
                            <li>STUDENT DISCOUNTS</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#7E7E7E] font-normal text-[13px]">
                            <li className="text-white">GET HELP</li>
                            <li>Order Status</li>
                            <li>Delivery</li>
                            <li>Returns</li>
                            <li>Payment Options</li>
                            <li>Contact Us on Nike.com Inquires</li>
                            <li>Contact Us on All Other Inquires</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-[#7E7E7E] font-normal text-[13px]">
                            <li className="text-white">ABOUT NIKE</li>
                            <li>News</li>
                            <li>Careers</li>
                            <li>Investors</li>
                            <li>Sustainability</li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex justify-center lg:justify-start gap-5 mt-6 lg:mt-9 p-6">
                    <div>
                        <Image src={twitter} alt="Twitter" />
                    </div>
                    <div>
                        <Image src={facebook} alt="Facebook" />
                    </div>
                    <div>
                        <Image src={youtube} alt="YouTube" />
                    </div>
                    <div>
                        <Image src={insta} alt="Instagram" />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center pb-3 mt-6 lg:mt-0">
                {/* Country and Copyright */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-7 items-center font-normal text-[13px]">
                    <div>
                        <Image src={india} alt="India" className="ml-0 lg:ml-4" />
                    </div>
                    <p className="text-[#7E7E7E] text-center lg:text-left">
                        © 2023 Nike, Inc. All Rights Reserved
                    </p>
                </div>

                {/* Links Section */}
                <ul className="flex flex-col lg:flex-row gap-4 lg:gap-9 mt-4 lg:mt-0 text-[#7E7E7E] font-normal text-[13px] text-center lg:text-left">
                    <li>Guides</li>
                    <li>Terms of Sale</li>
                    <li>Terms of Use</li>
                    <li>Nike Privacy Policy</li>
                </ul>
            </div>
        </div>

    )
}

export default Footer
