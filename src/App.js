import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'
import Counter from './Components/Counter'
import About from './Components/About'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Hire from './Components/Hire'
import Projects from './Components/Projects'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
// import Testimonials from './Components/Testimonials'
function App() {
  return (
   <>
  <Header/>
  <Body/>
  <Counter/>
  <About/>
  <Skills/>
  <Services/>
  <Hire/>
  <Projects/>
  {/* <Testimonials/> */}
  <Blog/>
  <Contact/>
  <Footer/>
   </>
  )
}

export default App
