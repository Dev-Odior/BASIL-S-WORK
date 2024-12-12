import { Hero, Products, Testimonials } from "../sections/home";
import Feature from "../sections/home/Feature";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Testimonials />
      <Feature />
      <Products />
    </div>
  );
};
export default Home;
