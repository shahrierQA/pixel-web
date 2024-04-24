import Featured from "./components/Featured";
import Header from "./components/Header";
import Offer from "./components/Offer";
import Services from "./components/Services";
import Slides from "./components/Slides";
import Products from "./components/products";

export default function Home() {
  return (
    <div>
      <Header />
      <Slides />
      <Services />
      <Offer />
      <Products />
      <Featured />
    </div>
  );
}
