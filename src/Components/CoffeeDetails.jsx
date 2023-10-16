import { useLoaderData, useParams } from "react-router-dom";

const CoffeeDetails = ({coffee}) => {
    const {name,chef,supplier,taste,category,details,photo, price,amount} = coffee

    const id= useParams()
    console.log(id);
    const loadedCoffee = useLoaderData()

    return (
        <div>
            <img src="" alt="" />
            <div>
                <h2 className="font-Rancho text-[#331A15] text-4xl"> Niceties </h2>
                <p>Name: {name} </p>
                <p>Cher: {cher} </p>
                <p>Supplier: {supplier} </p>
                <p>Taste: {taste} </p>
                <p>Category: {category} </p>
                <p>Details: {details} </p>
            </div>
            
        </div>
    );
};

export default CoffeeDetails;
