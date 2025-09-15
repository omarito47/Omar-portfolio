import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="py-20 px-6 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg mb-4">Let’s connect and build something great!</p>
      <p className="text-gray-700">📧 omartaamallah4@gmail.com</p>
      <p className="text-gray-700">📞 +216 90 510 521</p>
      <p className="text-gray-700">📍 Tunis, Tunisia</p>
      <a
        href="https://www.linkedin.com/in/omartaamallah"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        LinkedIn Profile
      </a>
    </motion.div>
  );
}
