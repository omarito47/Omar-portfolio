import { motion } from "framer-motion";

const frontend = [
  {
    name: "Flutter",
    description: "Cross-platform mobile app development using Dart.",
    link: "https://flutter.dev",
    logo: "https://cdn.worldvectorlogo.com/logos/flutter.svg"
  },
  {
    name: "Angular",
    description: "Frontend framework for scalable web apps.",
    link: "https://angular.dev",
    logo: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg"
  }
];

const backend = [
  {
    name: "Node.js",
    description: "Backend runtime for scalable applications.",
    link: "https://nodejs.org",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
  },
  {
    name: "Spring Boot",
    description: "Java backend framework for microservices.",
    link: "https://spring.io/projects/spring-boot",
    logo: "https://cdn.worldvectorlogo.com/logos/spring-3.svg"
  }
];

export default function Frameworks() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Frameworks</h2>

      {/* Frontend */}
      <h3 className="text-2xl font-semibold mb-6 text-blue-600">Frontend</h3>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {frontend.map((fw, index) => (
          <motion.a
            key={index}
            href={fw.link}
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={fw.logo} alt={fw.name} className="w-16 h-16 mb-4" />
            <h4 className="text-xl font-semibold mb-2">{fw.name}</h4>
            <p className="text-gray-600">{fw.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Backend */}
      <h3 className="text-2xl font-semibold mb-6 text-green-600">Backend</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {backend.map((fw, index) => (
          <motion.a
            key={index}
            href={fw.link}
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={fw.logo} alt={fw.name} className="w-16 h-16 mb-4" />
            <h4 className="text-xl font-semibold mb-2">{fw.name}</h4>
            <p className="text-gray-600">{fw.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
