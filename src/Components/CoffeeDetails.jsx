import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {

    const coffeeDetails = useLoaderData()
    const { name, chef, price, photo, category, details, supplier, taste } = coffeeDetails


    return (
        <>

            <div className=" pb-32 pt-16 bg-no-repeat" >
                <Link to='/' className="font-Rancho text-3xl flex gap-4 items-center lg:pl-56 md:pl-12 pb-10"><AiOutlineArrowLeft></AiOutlineArrowLeft> Back to home </Link>
                <div className="bg-[#F4F3F0] lg:max-w-4xl md:max-w-2xl mx-auto">
                    <div className="lg:mx-32 pt-10 md:mx-16">
                        <div className="flex">
                            <img src={photo} alt="" />
                            <div>
                                <h2 className="font-Rancho text-[#331A15] text-4xl"> Niceties </h2>
                                <p>Name: {name} </p>
                                <p>Chef: {chef} </p>
                                <p>Supplier: {supplier} </p>
                                <p>Taste: {taste} </p>
                                <p>Category: {category} </p>
                                <p>Details: {details} </p>
                                <p>Price: {price} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default CoffeeDetails;
