import { motion } from "framer-motion";
import { useState } from "react";

const StaggeredDropDown = ({ onOptionClick, languageData }) => {
  const [open, setOpen] = useState(true);

  const handleOptionClick = () => {
    setOpen(false);
    if (onOptionClick) {
      onOptionClick();
    }
  };

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="absolute left-0 top-full mt-2 z-50"
    >
      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top" }}
        className="flex flex-col gap-2 p-3 rounded-lg bg-white shadow-xl w-48 overflow-hidden"
      >
        <Option 
          onClick={handleOptionClick} 
          text={languageData?.home || "Home"} 
        />
        <Option 
          onClick={handleOptionClick} 
          text={languageData?.order || "Order"} 
        />
        <Option 
          onClick={handleOptionClick} 
          text={languageData?.our_customers || "Our Customers"} 
        />
        <Option 
          onClick={handleOptionClick} 
          text={languageData?.about_us || "About us"} 
        />
        <Option 
          onClick={handleOptionClick} 
          text={languageData?.contact_us || "Contact Us"} 
        />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, onClick }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={onClick}
      className="flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

