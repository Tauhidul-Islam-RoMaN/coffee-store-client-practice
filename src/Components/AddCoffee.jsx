import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleAddCoffee= (event) => {
        event.preventDefault()
        const form = event.target
        const supplier =form.supplier.value
        const chef =form.chef.value
        const taste =form.taste.value
        const category =form.category.value
        const details =form.details.value
        const photo =form.photo.value
        const name =form.name.value
        const amount =form.amount.value
        const price =form.price.value
        const newCoffee = {name,chef,supplier,taste,category,details,photo, price,amount}
        console.log(newCoffee);

        fetch('https://coffee-store-server-practice-bseffra3o-romans-projects-caf8547b.vercel.app/coffee', {
            method:"POST",
            headers: {
                'content-type' : "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insedtedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'User added Successfully',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    
    return (
        <div className="bg-[url('/src/assets/images/more/11.png')] pb-32 pt-16 bg-no-repeat" >
            <Link to='/' className="font-Rancho text-3xl flex gap-4 items-center lg:pl-56 md:pl-12 pb-10"> <AiOutlineArrowLeft></AiOutlineArrowLeft> Back to home</Link>
            <div className="bg-[#F4F3F0] lg:max-w-4xl md:max-w-2xl mx-auto">
                <div className="lg:mx-32 pt-10 md:mx-16">
                    <h2 className="text-[#331A15] text-center font-Rancho mb-3 text-2xl md:text-6xl">Add New Coffee</h2>
                    <p className="text-center font-Raleway mx-2 md:text-lg">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleAddCoffee} className="mt-6">
                    <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Name</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="name" placeholder="Enter Coffee Name" className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Chef</span>
                            </label>
                            <label className="rounded-lg ">
                                <input type="text" name="chef" placeholder="Enter Coffee Chef " className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Supplier</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="supplier" placeholder="Enter Coffee Supplier" className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Taste</span>
                            </label>
                            <label className="rounded-lg ">
                                <input type="text" name="taste" placeholder="Enter Coffee Taste " className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Category</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="category" placeholder="Enter Coffee Category" className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Details</span>
                            </label>
                            <label className="rounded-lg ">
                                <input type="text" name="details" placeholder="Enter Coffee Details " className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                        <div className="form-control w-1/2 ">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Price</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="price" placeholder="Enter Coffee Price" className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Amount</span>
                            </label>
                            <label className="rounded-lg ">
                                <input type="text" name="amount" placeholder="Enter Coffee Amount " className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className=" flex justify-between md:gap-10 gap-2 mx-10 pb-6 ">
                        <div className="form-control w-full md:text-base text-xs ">
                            <label className="label">
                                <span className="label-text font-Raleway text-lg">Photo</span>
                            </label>
                            <label className="rounded-lg">
                                <input type="text" name="photo" placeholder="Enter Photo Url" className="input w-full md:text-base text-xs input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="mx-10 pb-10">
                        <input type="submit" className="btn bg-[#D2B48C] w-full" value="Add Coffee" />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddCoffee;