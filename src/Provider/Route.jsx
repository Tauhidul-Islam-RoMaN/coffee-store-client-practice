import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import Home from '../Components/Home';
import AddCoffee from '../Components/AddCoffee';
import UpdateCoffee from '../Components/UpdateCoffee';
import ErrorPage from '../Components/ErrorPage';
import CoffeeDetails from '../Components/CoffeeDetails';
import Login from '../Components/Login';

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch('https://coffee-store-server-practice-bseffra3o-romans-projects-caf8547b.vercel.app/coffee')
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>
            },
            {
                path:'/updateCoffee/:id',
                element:<UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`https://coffee-store-server-practice-bseffra3o-romans-projects-caf8547b.vercel.app/updatedCoffee/${params.id}`)
                
            },
            {
                path:'/coffeeDetails/:id',
                element: <CoffeeDetails></CoffeeDetails>,
                loader: ({params}) => fetch(`https://coffee-store-server-practice-bseffra3o-romans-projects-caf8547b.vercel.app/coffeeDetails/${params.id}`)

            },
            {
                path:'/login',
                element: <Login></Login>

            },

        ]
    },

])

export default myCreatedRoute;