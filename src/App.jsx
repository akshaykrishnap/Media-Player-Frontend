

import './App.css'
import  Header from './Componets/Header'
import  Footer from './Componets/Footer'
import LandingPage  from './Pages/LandingPage'
import  Home from './Pages/Home'
import WatchHistory  from  './Pages/WatchHistory'
import { Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Header/>

       <Routes>

           <Route path='/' element={<LandingPage/>} />
           <Route path='/home' element={<Home/>} />
           <Route path='/watchHistory' element={<WatchHistory/>} />
      
       </Routes>

      <Footer/>
    </>
  )
}

export default App
