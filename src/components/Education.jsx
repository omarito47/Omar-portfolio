import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Software Engineering & Information Systems",
      school: "Faculty of Science, Monastir",
      date: "Graduated May 2022",
    },
    {
      degree: "Software Engineering (Evening Courses)",
      school: "Esprit, Tunis",
      date: "Expected Graduation: May 2026",
    },
  ];

  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.school}</p>
            <p className="text-sm text-gray-500">{edu.date}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
