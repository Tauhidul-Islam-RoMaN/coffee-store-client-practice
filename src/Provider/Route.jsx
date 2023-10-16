import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import Home from '../Components/Home';
import AddCoffee from '../Components/AddCoffee';
import UpdateCoffee from '../Components/UpdateCoffee';
import ErrorPage from '../Components/ErrorPage';
import CoffeeDetails from '../Components/CoffeeDetails';

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>
            },
            {
                path:'/updateCoffee/:id',
                element:<UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/updatedCoffee/${params.id}`)
                
            },
            {
                path:'/coffeeDetails/:id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/coffeeDetails/${params.id}`)

            }
        ]
    },

])

export default myCreatedRoute;