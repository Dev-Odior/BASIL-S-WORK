import { Container } from "../../layouts";
import { WordWidget } from "../../components/text";
import { Button } from "../../components/button";
import { ProductsInfo } from "../../components/text";
import { productInfoContent } from "../../db/content";
import { useDispatch, useSelector } from "react-redux";
import { toggleWidget } from "../../state/nav/navReducer";
import { motion } from "framer-motion";

const Products = () => {
  const dispatch = useDispatch();
  const { productNav } = useSelector((store) => store.nav);

  const active = productNav.find((item) => {
    return item.active === true;
  });

  const toggleContent = (title) => {
    dispatch(toggleWidget(title));
  };

  return (
    <section className="py-10 md:py-10  ">
      <Container>
        <div className="md:px-16 lg:block">
          {/* The Navigation */}
          <nav className="border-t hidden lg:block  mb-8">
            <ul className="flex gap-32 text-lg border-b items-center justify-center capitalize">
              {productNav.map((nav, index) => {
                return (
                  <motion.li
                    onClick={() => toggleContent(nav?.title)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    key={index}
                    className={`py-4 px-2 cursor-pointer capitalize ${
                      nav?.active ? "border-b-[3px] border-brown" : ""
                    }`}
                  >
                    {nav?.title}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* The Card */}
          <div className="border hidden lg:flex rounded-2xl px-8 py-10 items-start justify-between">
            <div className="w-[50%] flex flex-col gap-4 items-start">
              <WordWidget
                textStyle="text-brown-lighterTwo"
                title={active.title}
                desc={active.desc}
              />
              <Button name="explore lending" />
            </div>
            <img src={active?.img} alt="" className="h-[15rem] rounded-xl" />
          </div>

          {productInfoContent.map((each, index) => {
            return <ProductsInfo key={index} {...each} />;
          })}
        </div>
      </Container>
    </section>
  );
};
export default Products;
