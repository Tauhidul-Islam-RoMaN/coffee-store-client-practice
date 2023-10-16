import { Link } from 'react-router-dom';
import remove from '../assets/images/delete1.svg'
import eye from '../assets/images/eye.svg'
import frame from '../assets/images/frame.svg'
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { name, chef, price, photo, _id } = coffee

    const handleRemove = (_id) => {
        console.log(_id);
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.deletedCount > 1) {
                    Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                    )
                }
                const remaining = coffees.filter(item => item._id !== _id)
                console.log(remaining);
                setCoffees(remaining)
            })
    }

    return (
        <div className="flex gap-5 justify-around bg-[#F5F4F1] items-center">
            <div>
                <img src={photo} alt="" />
            </div>
            <div className="">
                <h2> <span className="text-[#1B1A1A] font-Raleway font-semibold ">Name:</span> {name} </h2>
                <p> <span className="text-[#1B1A1A] font-Raleway font-semibold">Chef:</span> {chef} </p>
                <p> <span className="text-[#1B1A1A] font-Raleway font-semibold">Price:</span> {price} </p>
            </div>
            <div className='flex gap-4 flex-col'>
                <Link to={`/coffeeDetails/${_id}`}><img className='bg-[#D2B48C] w-11 p-2 text-white' src={eye} alt="" /></Link>
                <Link to={`/updateCoffee/${_id}`}><img className='bg-[#3C393B] w-11 p-2 text-white' src={frame} alt="" /></Link>
                <button onClick={() => handleRemove(_id)} type="submit"><img className='bg-[#EA4744] w-11 p-2 text-white' src={remove} alt="" /></button>
            </div>


        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func,

}

export default CoffeeCard;