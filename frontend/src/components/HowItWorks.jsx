import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, Truck, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: <ShoppingBag size={32} />,
    title: "Explore & Choose",
    description: "Explore our collection and select your favorite jewellery.",
  },
  {
    icon: <CreditCard size={32} />,
    title: "Book & Pay",
    description: "Reserve your jewellery and complete the secure payment.",
  },
  {
    icon: <Truck size={32} />,
    title: "Get it Delivered",
    description: "We deliver to your doorstep with hassle-free shipping.",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Return with Ease",
    description: "After use, return it easily with our seamless process.",
  },
];

const boxVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const HowItWorks = () => {
  return (
    <section className="py-10 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Triggers on scroll
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-6 flex flex-col items-center border border-secondary cursor-pointer text-secondary hover:bg-secondary hover:text-light transition duration-300  hover:-translate-y-2 "
              variants={boxVariants}
              custom={index}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm mt-2">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
