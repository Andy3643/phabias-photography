import React from 'react'
import Header from '../../sections/header/Header'
import Internet from '../../sections/internet/Internet'
import MyWork from '../../sections/myWork/MyWork'
import Testimonials from '../../sections/testimonials/Testimonials'
import './home.css'

const Home = () => {
  return (
  <>
      <Header/>
      <MyWork/>
      <Internet/>
      <Testimonials/>
  </>
  )
}

export default Home