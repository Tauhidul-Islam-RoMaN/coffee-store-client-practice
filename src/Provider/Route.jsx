import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Components/MainLayout';
import Home from '../Components/Home';

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
        ]
    },

])

export default myCreatedRoute;