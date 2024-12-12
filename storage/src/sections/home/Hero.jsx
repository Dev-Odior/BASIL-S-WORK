import { Container } from "../../layouts";
import { google, apple, firstImg, secondImg, card } from "../../assets/images";
import { blueBlur, goldBlur } from "../../assets/images/bg";

const Hero = () => {
  return (
    <section className="pb-7 border pt-32 bg-cover w-full relative">
      <img
        src={goldBlur}
        alt=""
        className="absolute h-[40rem] -z-[10] top-[2rem] right-[18rem]"
      />
      <img
        src={blueBlur}
        alt=""
        className="absolute h-[40rem] -z-[10] top-[17rem] right-[25rem]"
      />

      <Container>
        <div className=" flex items-center flex-col justify-center ">
          {/* The header on the hero */}
          <div className="lg:w-[55%] border text-center pb-7 px-3 mb-20">
            <h1 className="text-[1.35rem] lg:text-4xl flex flex-col gap-2 md:font-bold font-semibold mb-5">
              <span className="text-brown">Effortlessly streamline your</span>
              <span className="text-gold">business payments </span>
            </h1>
            <p>
              We help you with all banking integration and connection or
              transactions from your application or device at super fast speed
              in a secure manner with no hidden charges
            </p>

            <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
              <img src={google} alt="" className="h-10" />
              <img src={apple} alt="" className="h-[2.70rem]" />
            </div>
          </div>

          {/* The Display Images */}
          <div className="w-full h-[60vh] lg:w-[55%] border border-black lg:h-[40vh] relative">
            <img
              src={firstImg}
              alt=""
              className="absolute lg:h-32 left-0 z-10 bottom-0"
            />

            <img
              src={card}
              alt=""
              className="absolute top-0 -mt-24 ml-10 z-5 h-80"
            />

            <img
              src={secondImg}
              alt=""
              className="absolute h-40 -z-3 right-0 bottom-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Hero;
