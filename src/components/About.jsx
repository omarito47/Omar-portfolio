import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="py-20 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed text-center">
        I am a junior Flutter Mobile Developer with experience in Android app
        development and web development using Angular, Node.js, and .NET Core.
        Passionate about technology, I continuously seek opportunities to expand
        my skills and excel in diverse projects. Currently, I am pursuing my
        Software Engineering degree at Esprit, Tunis.
      </p>
    </motion.div>
  );
}
