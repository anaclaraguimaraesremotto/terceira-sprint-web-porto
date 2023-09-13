import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CadastroBike from './routes/CadastroBike/index.jsx'
import Contato from './routes/Contato/index.jsx'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import Login from './routes/Login/index.jsx'
import MinhasBikes from './routes/MinhasBikes/index.jsx'
import NossaEquipe from './routes/NossaEquipe/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/contato",
        element: <Contato/>
      },
      {
        path:"/equipe",
        element: <NossaEquipe/>
      },
      {
        path:"/vistoria",
        element: <Vistoria/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/cadastro-bike",
        element: <CadastroBike/>
      },
      {
        path:"/minhas-bikes",
        element: <MinhasBikes/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)