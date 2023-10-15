import logo1 from '../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div className= "bg-cover bg-[url('src/assets/images/more/15.jpg')] py-6 mx-auto items-center justify-center flex">
            <img src={logo1} className='w-20' alt="" />
            <h2 className="lg:text-7xl md:text-5xl text-2xl font-Rancho text-white ">Espresso Emporium</h2>
        </div>
    );
};

export default Navbar;