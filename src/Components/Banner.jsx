import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'
const Banner = () => {
    return (
        <>
            <div className=" flex w-full h-[600px] bg-contain bg-[url('src/assets/images/more/3.png')]">
                <div className="flex-1">   </div>
                <div className="flex-1 w-20 pr-20 pt-10 mt-40 text-white">
                    <h2 className="lg:text-5xl md:text-4xl font-Rancho mb-6">Would you like a Cup of Delicious Coffee?</h2>
                    <p className="font-Raleway mb-6">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className="btn bg-[#E3B577]">Learn More</button>
                </div>
            </div>
            <div className='bg-[#ECEAE3]'>
                <div className="grid mx-20 py-16 gap-4 grid-cols-4">
                    <div>
                        <img src={icon1} alt="" />
                        <p className="text-2xl text-[#331A15]  font-Rancho">Awesome Aroma</p>
                        <p className="font-Raleway text-[#1B1A1A]">You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img src={icon2} alt="" />
                        <p className="text-2xl text-[#331A15]  font-Rancho">High Quality</p>
                        <p className="font-Raleway text-[#1B1A1A]">We served the coffee to you maintaining the best quality</p>
                    </div>
                    <div>
                        <img src={icon3} alt="" />
                        <p className="text-2xl text-[#331A15]  font-Rancho">Pure Grades</p>
                        <p className="font-Raleway text-[#1B1A1A]">The coffee is made of the green coffee beans which you will love</p>
                    </div>
                    <div>
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