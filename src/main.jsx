import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// Method:-1 to Create browser router for routing elements
// const Router = createBrowserRouter([
//            {
//               path:"/",
//               element:<Layout/>,
//               children:[
//                   {
//                       path:"",
//                       element:<Home/>
//                     },
//                     {
//                         path:"About",
//                         element:<About/>
//                       },
//                       {
//                           path:"Contact",
//                           element:<Contact/>
//                         }
//                       ]
//              }
//             ])
          
  //Method:-2 to Create browser router for routing elements

    const Router=createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='User/:Userid' element={<User/>}/>
        <Route path='Github' element={<Github/>}/>
      </Route>
      )
    )
            
            createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
