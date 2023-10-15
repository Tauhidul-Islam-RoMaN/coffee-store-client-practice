import { Link } from "react-router-dom";
import Banner from "./Banner";
import { BsCup } from 'react-icons/bs';
import Rectangle9 from '../assets/images/cups/Rectangle 9.png'
import Rectangle10 from '../assets/images/cups/Rectangle 10.png'
import Rectangle11 from '../assets/images/cups/Rectangle 11.png'
import Rectangle12 from '../assets/images/cups/Rectangle 12.png'
import Rectangle13 from '../assets/images/cups/Rectangle 13.png'
import Rectangle14 from '../assets/images/cups/Rectangle 14.png'
import Rectangle15 from '../assets/images/cups/Rectangle 15.png'
import Rectangle16 from '../assets/images/cups/Rectangle 16.png'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mt-20 bg-auto bg-left-top bg-no-repeat bg-[url('/src/assets/images/more/4.png')]">
                <div className="bg-auto bg-right-bottom bg-no-repeat bg-[url('/src/assets/images/more/5.png')]">
                    <div className="mx-auto text-center gap-2 flex mb-4  flex-col ">
                        <p className="text-xl text-[#1B1A1A] font-Raleway">--- Sip & Savor ---</p>
                        <h2 className="text-[#331A15] font-Rancho mb-3 text-3xl md:text-6xl">Our Popular Products</h2>
                        <button className="btn bg-[#E3B577] flex items-center mx-auto  gap-3">Add Coffee <span className="text-xl"> <BsCup></BsCup> </span> </button>
                    </div>
                    <div>
                        
                    </div>

                </div>
            </div>


            <div className="flex justify-center items-center my-16 flex-col">
                <p className="text-[#1B1A1A] font-Raleway text-xl">Follow Us Now</p>
                <Link className="text-[#331A15] font-Rancho mb-10 text-3xl hover:underline hover:text-blue-700 md:text-6xl" to="https://www.instagram.com/">Follow on Instagram</Link>
                <div className="grid grid-col-1 md:grid-cols-2 gap-4  lg:grid-cols-4 md:mx-16">
                    <img src={Rectangle9} alt="" />
                    <img src={Rectangle10} alt="" />
                    <img src={Rectangle11} alt="" />
                    <img src={Rectangle12} alt="" />
                    <img src={Rectangle13} alt="" />
                    <img src={Rectangle14} alt="" />
                    <img src={Rectangle15} alt="" />
                    <img src={Rectangle16} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Home;