import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Create from './pages/Create/Create';
import Commerce from './pages/Commerce/Commerce';
import Cart from './pages/Cart/Cart';

function App() {

  const route = createBrowserRouter([
    {
      path:'',
      element:<Layout/>,
      children:[
        {index:true, path:'', element:<Home/>},
        {path:'login', element:<Login/>},
        {path:'create', element:<Create/>},
        {path:'commerce', element: <Commerce/>},
        {path:'cart', element:<Cart/>}
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
