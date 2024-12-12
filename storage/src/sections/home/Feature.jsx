import { Container } from "../../layouts";
import { featureImg } from "../../assets/images";
import { SlideBtn } from "../../components/button";
import { Button } from "../../components/button";
import testimonialImg from "../../assets/images/testimonial.png";
import { WordWidget } from "../../components/text";

const Feature = () => {
  return (
    <section>
      <Container>
        <div>
          <div className="flex gap-10 items-center justify-center mb-12">
            <img src={featureImg} alt="" className="h-80" />
            <div className="w-[37.5%] ml-5">
              <WordWidget
                title="Deliver distinctive CX."
                desc=" By integrating Airoplay into your banking or lending
                infrastructure, you can create a scalable technological base
                upon which to develop experiences that are entirely focused on
                your customers and under your complete control. You can access
                independent services and solutions for the development of unique
                financial offers through our vast partner network."
              />
              <div className="gap-2 flex items-end mt-4">
                <SlideBtn
                  color="border-brown"
                  angle="left"
                  dark={true}
                  padding="p-2"
                />
                <SlideBtn color="border-brown" dark={true} padding="p-2" />
              </div>
            </div>
          </div>

          <div
            className="py-16 rounded-2xl mx-auto w-[90%]  overflow-hidden border grid capitalize place-items-center bg-cover bg-center relative text-primary"
            style={{ backgroundImage: `url(${testimonialImg})` }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="z-10  grid  place-items-center ">
              <h3 className="text-white capitalize font-semibold mb-10 text-xl">
                Book a Demo with Airoplay now
              </h3>
              <Button name="book demo" light="text-white" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Feature;
