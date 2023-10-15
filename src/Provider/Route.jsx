import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import Home from '../Components/Home';
import AddCoffee from '../Components/AddCoffee';

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addcoffee',
                element:<AddCoffee></AddCoffee>
            },
        ]
    },

])

export default myCreatedRoute;