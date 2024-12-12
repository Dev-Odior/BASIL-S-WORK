import { Container } from "../../layouts";
import { ellipse } from "../../assets/images/home";

const Testimonials = () => {
  return (
    <section className="-mt-20 -mb-10 md:-mb-3 md:-mt-10 pt-24 pb-20 bg-transparent relative">
      <Container>
        <div className="relative top-0">
          <img
            src={ellipse}
            className="absolute md:-mt-9 md:-ml-11 md:h-[30rem] h-[12rem] -ml-20"
            alt=""
          />

          {/* The header task */}
          <p
            className={`
            text-[9px]
            md:text-sm
            text-center
            mx-auto 
            mb-4
            lg:mb-7 
            w-[60%]
            xs:w-[65%] 
            md:w-[55%] 
            lg:w-[45%] 
            sm:leading-none
            md:leading-4
            lg:leading-normal
            `}
          >
            We make it easier and faster than ever for our customers to create
            fantastic banking experiences that their clients adore.
          </p>

          {/* The review box */}

          <div
            className={`
            bg-grayish
            text-white 
            mx-auto
            // py-0
            pt-5
            rounded-md 
            w-full 
            md:w-[90%] 
            md:pt-24
            md:pb-16 
            md:rounded-2xl 
            flex 
            flex-col 
            items-center 
            justify-center
            `}
          >
            {/* The text in the review box */}

            <p className="text-[9px] leading-6 w-[85%] lg:w-[59%] md:text-[0.865rem] text-white font-semibold md:font-bold text-center">
              “Thanks to Airopay's quick time to market, flexibility, and ease
              of integration, we can offer our consumers the best mobile banking
              experience possible, driven by technology.”
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
