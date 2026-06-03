import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/applayout'
import Home from './pages/Home'
import GifPage from './pages/GifPage'
import Category from './pages/Category'
import SearchPage from './pages/SearchPage'
import Favorites from './pages/Favorites'
import GifProvider from './context/gif-context'

const router=createBrowserRouter([

  {
    element:<AppLayout/>,

    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path: "/:type/:slug",
        element:<GifPage/>
      },
      {
         path: "/:category",
         element:<Category/>
      },
      {
        path:"/search/:query",
        element:<SearchPage/>
      },
      {
        path: "/favorites",
        element:<Favorites/>
      }
    ]

  }
  
])

const App = () => {

  
  return (

    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>
   
  )
}

export default App
