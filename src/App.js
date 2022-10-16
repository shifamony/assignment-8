import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import PrivateRout from './routs/PrivateRout';
import Orders from './components/Orders';

function App() {
  const router =createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children:[
     {
      path: '/',
      element: <PrivateRout><Home></Home></PrivateRout>,
     },
     {
      path: '/orders',
      element: <PrivateRout><Orders></Orders></PrivateRout>,
     },
     {
      path:'/register',
      element: <Register></Register>
     },
     {
      path:'/login',
      element: <Login></Login>
     }
    ]
   }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
