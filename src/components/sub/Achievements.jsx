import { motion, useMotionValue } from "framer-motion";

const Achievements = ({ title, amount, children }) => {
  const number = useMotionValue(0);
  const count = (amount) => {
        let i = 0;
        const updateCount = () => {
            let timeOut;

            if(i <= amount) {
                number.set(i++); // Increment the counter
                timeOut = setTimeout(updateCount, 100); // With 0 second delay it will do it right after the increment
            }
            else{
                clearTimeout(timeOut);
            }
        }
        updateCount();
  }
  return (
    <div className="flex items-end gap-x-3 ">
      {/* children is a special prop in react that represents the content passed between the opening and closing tag*/}
      <span className="text-4xl lg:text-2xl text-gray-300">{children}</span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span className="text-2xl lg:text-xl font-light text-purple-300" whileInView={() => {count(amount)}} viewport={{once: true}}>
          {number}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500">{title}</span>
      </h1>
    </div>
  );
};

export default Achievements;
