import About from "./components/about/About"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Menu from "./components/menu/Menu"


function App() {


  return (
    <>
     <div className="overflow-x-hidden">
      

      <Header/>
      <Hero/>
      <About/>
      <Menu/>
     </div>
    </>
  )
}

export default App
