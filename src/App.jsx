import React from 'react'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import { Contact } from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'

function App() {

  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        
         <Route index element={<Home/>} />
         <Route path='product' element={<Product/>} />
         <Route path='about' element={<About/>} />
         <Route path='contact' element={<Contact/>} />

      </Route>
    )
  )

  return (
   <RouterProvider router={(router)}/>
  )
}

export default App