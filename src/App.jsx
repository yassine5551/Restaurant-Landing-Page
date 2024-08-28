import About from "./components/about/About";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Menu from "./components/menu/Menu";
import Chef from "./components/chef/Chef";
import Gallery from "./components/gallery/Gallery";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">    
          <Header />
        <section id='Home'>
          <Hero />
        </section>
        <section className=" mt-[120px]" id="About">
          <About />
        </section>
        <section className="mt-[120px]" id="Menu">
          <Menu />
        </section>

        <section className=" mt-[120px]" >
          <Chef />
        </section>
        <section className=" mt-[120px]" id="Gallery">
          <Gallery />
        </section>
        <section className=" mt-[120px]" id="Contact">
          <Form />
        </section>
        <div className="mt-[120px]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
