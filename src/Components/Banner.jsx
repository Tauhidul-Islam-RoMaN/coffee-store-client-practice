import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
const Banner = () => {
    return (
        <>
            <div className=" flex lg:h-[640px] md:h-[365px] h-[180px] bg-no-repeat bg-contain bg-[url('https://i.postimg.cc/MpDwq11x/3.png')]">
                <div className="flex-1">   </div>
                <div className="md:flex-1 md:w-20 lg:pr-20 ml-1 md:pt-10 pt-2 md:pr-5 lg:mt-40 text-white">
                    <h2 className="lg:text-5xl md:text-4xl text-lg font-Rancho mb-6">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="font-Raleway text-sm mb-2 md:mb-6">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn bg-[#E3B577]">Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3]'>
                <div className="grid mx-24 py-16 md:gap-10 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className='flex items-center justify-center flex-col text-center'>
                        <img src={icon1} alt="" />
                        <p className="text-2xl text-[#331A15]  font-Rancho">Awesome Aroma</p>
                        <p className="font-Raleway text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='flex items-center justify-center flex-col text-center'>
                        <img src={icon2} alt="" />
                        <p className="text-2xl text-[#331A15]  font-Rancho">High Quality</p>
                        <p className="font-Raleway text-[#1B1A1A]">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div className='flex items-center justify-center flex-col text-center'>
                        <img src={icon3} alt="" />
                        <p className="text-2xl text-[#331A15]  font-Rancho">Pure Grades</p>
                        <p className="font-Raleway text-[#1B1A1A]">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div className='flex items-center justify-center flex-col text-center'>
                        <img src={icon4} alt="" />
                        <p className="text-2xl text-[#331A15]  font-Rancho">Proper Roasting</p>
                        <p className="font-Raleway text-[#1B1A1A]">Your coffee is brewed by first roasting the green coffee beans</p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;