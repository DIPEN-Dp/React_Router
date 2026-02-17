import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const Router = createBrowserRouter([
         {
          path:"/",
          element:<Layout/>,
          children:[
            {
              path:"",
              element:<Home/>
            },
            {
              path:"About",
              element:<About/>
            }
          ]
      }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
