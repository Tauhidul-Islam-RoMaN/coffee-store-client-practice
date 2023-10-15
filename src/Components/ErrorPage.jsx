import { Link } from 'react-router-dom';
import error from '../assets/images/404/error.gif'
import Footer from './Footer';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const ErrorPage = () => {
    return (
        <>
            <Link to='/' className="font-Rancho text-3xl flex gap-4 items-center lg:pl-56 md:pl-12 pb-10"> <AiOutlineArrowLeft></AiOutlineArrowLeft> Back to home</Link>
            <div className='flex justify-center items-center mx-auto'>
                <img src={error} alt="" />
            </div>
            <Footer></Footer>
        </>

    );
};

export default ErrorPage;