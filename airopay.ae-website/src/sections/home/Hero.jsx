import { Container } from "../../layouts";
import {
  google,
  apple,
  firstImg,
  secondImg,
  card,
} from "../../assets/images/home";
import { blueBlur, goldBlur } from "../../assets/images/bg";
import { HeaderText, BodyText } from "../../components/text";
import { motion } from "framer-motion";

const Hero = () => {
  const bounceVariant = {
    animate: {
      x: [0, -300, -300, 0, 300, 0],
      y: [0, -120, 0, 0, -120, 0],
      rotate: [0, 30, 0, 0, -30, 0],
      ease: "linear",
      transition: { duration: 6, repeat: Infinity },
    },
  };

  return (
    <main className="pb-7 pt-32 md:pt-40 bg-cover w-full relative ">
      <img
        src={goldBlur}
        alt=""
        className="absolute inset-0 mx-auto my-auto max-h-[50rem] max-w-full -right-[5rem] -top-[10rem] md:top-[6rem] md:-right-[10rem]  -z-[10] "
      />
      <img
        src={blueBlur}
        alt=""
        className={`
        absolute
        inset-0
        mx-auto
        my-auto
        -z-10
        max-h-[40rem]
        max-w-full
        top-[15rem]
        left-[-10rem]
        md:top-[40rem]
        md:left-[-15rem]
      `}
      />

      <Container>
        <div className=" flex items-center flex-col justify-center ">
          {/* The header on the hero */}
          <div
            className={`
          text-center 
          pb-7 
          px-2 
          md:w-[75%] 
          lg:w-[65%] 
          `}
          >
            <HeaderText
              first="Effortlessly streamline your"
              second="business payments"
              className={` 
              mb-8
              text-center
              `}
              col={true}
            />

            <BodyText
              home={true}
              className="
              px-3
              sm:w-[60%]
              md:w-[80%]"
            >
              We help you with all banking integration and connection or
              transactions from your application or device at super fast speed
              in a secure manner with no hidden charges
            </BodyText>

            <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
              <motion.img
                whileTap={{ scale: 0.95 }}
                src={google}
                alt=""
                className="h-10 sm:h-12"
              />
              <motion.img
                whileTap={{ scale: 0.95 }}
                src={apple}
                alt=""
                className="h-[2.75rem] sm:h-[3.1rem]"
              />
            </div>
          </div>

          {/* The Display Images */}

          <div className={`relative mb-2`}>
            <motion.img
              animate={{
                zIndex: 10,
              }}
              src={firstImg}
              alt=""
              className="absolute max-h-[70px] xs:max-h-[95px] sm:max-h-[120px] bottom-0 md:-left-4"
            />

            <motion.img
              variants={bounceVariant}
              animate="animate"
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                type: "spring",
                stiffness: 500,
                damping: 20,
              }}
              src={card}
              alt=""
              className="object-cover xs:max-h-80 max-h-[400px] "
            />

            <img
              src={secondImg}
              alt=""
              className="absolute max-h-[90px] xs:max-h-28 lg:max-h-32 -bottom-2 right-0 -z-10"
            />
          </div>
        </div>
      </Container>
    </main>
  );
};
export default Hero;
