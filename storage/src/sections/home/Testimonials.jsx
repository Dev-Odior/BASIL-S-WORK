import { Container } from "../../layouts";
import { SlideBtn } from "../../components/button";
import { ellipse } from "../../assets/images";

const Testimonials = () => {
  return (
    <section className=" -mt-10 pt-24 pb-20 bg-transparent relative">
      <Container>
        <div className="relative top-0">
          <img
            src={ellipse}
            className="absolute -mt-9 -ml-11 h-[30rem]"
            alt=""
          />
          <p className="mb-7 w-[45%] text-center mx-auto">
            We make it easier and faster than ever for our customers to create
            fantastic banking experiences that their clients adore.
          </p>
          <div className="bg-brown-dark w-[85%] text-white mx-auto pt-24 pb-16 rounded-2xl flex flex-col items-center">
            <p className="w-[62%] font-bold text-center ">
              “Thanks to Airoplay's quick time to market, flexibility, and ease
              of integration, we can offer our consumers the best mobile banking
              experience possible, driven by technology.”
            </p>

            <div className="flex gap-2 mt-7">
              <SlideBtn angle="left" />
              <SlideBtn />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
