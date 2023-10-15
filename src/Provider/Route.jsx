import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import Home from '../Components/Home';
import AddCoffee from '../Components/AddCoffee';
import UpdateCoffee from '../Components/UpdateCoffee';
import ErrorPage from '../Components/ErrorPage';

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addcoffee',
                element:<AddCoffee></AddCoffee>
            },
            {
                path:'/updatecoffee',
                element:<UpdateCoffee></UpdateCoffee>
            },
        ]
    },

])

export default myCreatedRoute;