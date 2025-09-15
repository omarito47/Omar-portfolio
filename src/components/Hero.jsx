import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Taamallah Omar</h1>
      <p className="text-xl mb-6">Junior Software Developer</p>
      <a
        href="https://www.linkedin.com/in/omartaamallah"
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 bg-white text-blue-600 rounded-full shadow hover:bg-gray-200 transition"
      >
        Connect on LinkedIn
      </a>
    </motion.div>
  );
}
