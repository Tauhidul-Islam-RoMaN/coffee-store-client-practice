import { IoIosCall } from 'react-icons/io';
import { HiMail } from 'react-icons/hi';
import { ImLocation2 } from 'react-icons/im';
import logo1 from '../assets/images/more/logo1.png'

const Footer = () => {
    return (
        <footer className="flex flex-col items-center mx-auto text-center bg-cover bg-[url('src/assets/images/more/13.jpg')]  dark:bg-neutral-600 lg:text-left">
            <div className="container p-6 text-neutral-800  dark:text-neutral-200">
                <img src={logo1} className='w-20 flex mx-auto lg:mx-0 ' alt="" />
                <div className="grid gap-4 mt-4 mb-12 lg:grid-cols-2">
                    <div className="mb-6 md:mb-0">
                        <div className='mx-auto md:mx-0'>
                            <h5 className="mb-4 md:text-5xl text-3xl  font-Rancho">Espresso Emporium</h5>

                            <p className="mb-4 md:mx-10 lg:mx-0 font-Raleway">
                                Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                            </p>
                            <div>

                            </div>
                            <p className="mb-10 md:text-5xl text-3xl font-Rancho">
                                Get in Touch
                            </p>
                        </div>
                        <div className='flex gap-5 font-Raleway mx-auto md:mx-0  flex-col'>
                            <div className='flex gap-5 mx-auto lg:mx-0 items-center text-xl'>
                                <IoIosCall></IoIosCall>  <p>+8801700-000000</p>
                            </div>
                            <div className='flex gap-5 mx-auto lg:mx-0 items-center text-xl'>
                                <HiMail></HiMail>  <p>user@espressoemporium.com</p>
                            </div>
                            <div className='flex gap-5 mx-auto lg:mx-0 items-center text-xl'>
                                <ImLocation2></ImLocation2> <p>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <h5 className="mb-10 md:text-5xl text-3xl md:mt-6 font-Rancho text-[#331A15]  ">Connect with Us</h5>
                        <form className="space-y-4 font-Raleway w-full">
                            <input type="text" name="name" className="p-2 md:w-4/5 w-3/5 rounded-sm " placeholder="Name" /> <br />
                            <input type="email" name="email" className="p-2 md:w-4/5 w-3/5 rounded-sm" placeholder="Email" />
                            <textarea name="massage" className="p-2 md:w-4/5 w-3/5 rounded-sm" placeholder="Message" cols="30" rows="3"></textarea>
                        </form>
                        <button className="btn btn-outline mt-2 rounded-full font-Rancho ">Send Message </button>
                    </div>
                </div>
            </div>

            <div className="w-full text-white p-4 text-center text-lg font-Rancho bg-[url('src/assets/images/more/8.png')] dark:text-neutral-200">
                <div className="col-start-1 row-start-1 bg-black bg-opacity-90 w-full h-full"></div>
                <div className="col-start-1 row-start-1">
                    <p>Copyright Espresso Emporium ! All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;