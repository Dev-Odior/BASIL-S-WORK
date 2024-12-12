import { Container } from "../../layouts";

import { CallToAction, Line } from "../ui";
import { motion } from "framer-motion";

const Template = ({ children, first, second, actionTitle, actionBtnText }) => {
  return (
    <motion.main
      className="pt-28 md:pt-[165px] mb-[2rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "linear" }}
    >
      <Container className={`w-[93%]`}>
        <div className="relative  w-full lg:w-[85%] mx-auto mb-5 md:mb-10">
          {children}
        </div>
        {<CallToAction title={actionTitle} btnText={actionBtnText} />}
      </Container>
    </motion.main>
  );
};
export default Template;
