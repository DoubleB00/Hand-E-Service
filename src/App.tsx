import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Discounts from './components/Discounts';
import Pricing from './components/Pricing';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Discounts />
        <Pricing />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
