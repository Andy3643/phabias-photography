import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Wedding from './pages/wedding/Wedding'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Wifi from './pages/wifi/Wifi'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='*' element={<Home/>}/>
          <Route path='/wedding' element={<Wedding/>}/>
         <Route path='/internet' element={<Wifi/>}/>
           {/* <Route path='gallery' element={<Gallery/>}/>
          <Route path='plans' element={<Plans/>}/>
          <Route path='trainers' element={<Trainers/>}/>
          <Route path='/*' element={<Notfound/>}/>
          <Route path='about' element={<About/>}/> */}

        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App