import { motion } from "framer-motion";

const skills = [
  { category: "Mobile", items: ["Flutter", "Dart", "Firebase"] },
  { category: "Web", items: ["Angular", "Node.js", ".NET Core"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", ".NET Core"] },
  { category: "DevOps", items: ["Docker", "CI/CD", "Jenkins", "Nexus"] },
  { category: "Design", items: ["UI/UX", "Figma"] },
  { category: "Database", items: ["SQL", "MongoDB", "NoSQL"] },
];

export default function Skills() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="text-gray-700">• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
