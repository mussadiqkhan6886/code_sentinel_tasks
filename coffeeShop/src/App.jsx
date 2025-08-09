import { useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import About from "./Sections/About"
import Hero from "./Sections/Hero"
import Online from "./Sections/Online"
import Services from "./Sections/Services"
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100
    })
  })
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Online />
      <Footer />
    </>
  )
}

export default App



