import { lazy } from "react";
const Header = lazy(() => import("./components/header/Header"));
const Hero = lazy(() => import("./components/hero/Hero"));
const About = lazy(() => import("./components/about/About"));
const Menu = lazy(() => import("./components/menu/Menu"));
const Chef = lazy(() => import("./components/chef/Chef"));
const Chef2 = lazy(() => import("./components/chef/Chef2"));
const Form = lazy(() => import("./components/form/Form"));
const Footer = lazy(() => import("./components/footer/Footer"));

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <section
          id="Home"
          className="bg-hero1 bg-cover bg-center md:bg-left-top bg-fixed"
        >
          <Header />
          <Hero />
        </section>
        <section className=" mt-[120px]" id="About">
          <About />
        </section>
        <section className="mt-[120px]" id="Menu">
          <Menu />
        </section>

        <section className=" mt-[120px]">
          <Chef />
        </section>
        <section className=" mt-[120px]">
          <Chef2 />
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
