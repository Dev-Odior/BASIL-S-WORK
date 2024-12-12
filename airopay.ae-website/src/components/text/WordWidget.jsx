import { motion } from "framer-motion";

const WordWidget = ({ title, desc }) => {
  return (
    <motion.div>
      <motion.h3
        key={title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-bold text-lg mb-4"
      >
        {title}
      </motion.h3>
      <motion.p
        key={desc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`text-sm leading-7 text-grayish-infoText`}
      >
        {desc}
      </motion.p>
    </motion.div>
  );
};
export default WordWidget;
