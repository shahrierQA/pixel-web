import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Services from "./components/Services";
import HeroSlider from "./components/HeroSlider";
import Products from "./components/products";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Services />
      <Offer />
      <Products />
      <Featured />
      <Footer />
    </div>
  );
}
