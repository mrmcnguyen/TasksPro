import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/welcomeScreen'
import ErrorPage from "./routes/error-page";
import Sidebar from './routes/Sidebar'


import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import Dashboard from './routes/Dashboard';


const router = createBrowserRouter([
{
path: "/",
element: <App />,
errorElement: <ErrorPage />,
},
{
path: "home",
element: <Dashboard />,
children: [
{
path: "home/:sidebar",
element: <Sidebar />,
},
],
},
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>,
)