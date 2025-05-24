import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllGroup from "../pages/AllGroup";
import PrivateRoute from "./PrivateRoute";
import MyGroups from "../pages/MyGroups";
import CreateGroup from "../pages/CreateGroup";
import Error from "../component/Error";
import Details from "../component/Details";
import Update from "../component/Update";



export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component: Home,
                loader:()=>fetch('https://a10-hobbyhub-server.vercel.app/hobbies')
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/register',
                Component: Register
            },
            {
                path: '/groups',
                Component: AllGroup,
                loader: ()=>fetch('https://a10-hobbyhub-server.vercel.app/hobbies')
            },
            {
                path:'/hobbies/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({params})=>fetch(`https://a10-hobbyhub-server.vercel.app/hobbies/${params.id}`)
                
            },
            {
                path:'/myGroups/:id',
                element: <PrivateRoute> <MyGroups></MyGroups> </PrivateRoute>,
                loader: ({params})=> fetch(`https://a10-hobbyhub-server.vercel.app/myGroups/${params.id}`)
            },
            {
                path:'/createGroup',
                element: <PrivateRoute> <CreateGroup></CreateGroup>  </PrivateRoute>
            },
            {
                path:' /updateGroup/:id',
                Component: Update,
                loader: ({params})=>fetch(`https://a10-hobbyhub-server.vercel.app/myGroups/${params.id}`)
            }

        ] 
    },

    {
        path: "*",
        element: <Error></Error>
    }  
])

