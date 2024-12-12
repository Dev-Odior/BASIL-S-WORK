import { Container } from "../../layouts";
import { WordWidget } from "../../components/text";
import { Button } from "../../components/button";
import { productImg } from "../../assets/images";
import { ClientSlider } from "../../components/displays";

const Products = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="px-28">
          {/* The Navigation */}
          <nav className="border-y mb-8">
            <ul className="flex gap-32 text-lg font-semibold items-center justify-center capitalize">
              <li className="py-3 px-2 cursor-pointer ">Composable</li>
              <li className="py-3 px-6 cursor-pointer border-b-[3px] border-brown-dark">
                lending
              </li>
              <li className="py-3 cursor-pointer  px-2">Deposit</li>
            </ul>
          </nav>

          {/* The Card */}
          <div className="border rounded-2xl px-6 py-10 flex justify-between">
            <div className="w-[50%]  ml-5 flex flex-col gap-4 items-start">
              <WordWidget
                textStyle="text-brown-lighterTwo"
                title="Lending Engine"
                desc="With Airoplay's cloud-native lending engine, banks, fintechs, retailers, corporate, and other businesses may create a range of loan products that are customized to meet the demands of their clients. SME loans, buy now pay later, mortgages, embedded finance, and purchase financing are all examples."
              />
              <Button name="explore lending" />
            </div>
            <img src={productImg} alt="" className="h-56" />
          </div>

          {/* The customer */}

          <ClientSlider />
        </div>
      </Container>
    </section>
  );
};
export default Products;
