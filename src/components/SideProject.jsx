import { motion } from "framer-motion";

const projects = [
  {
    name: "Real-Time Chat App",
    description: "Instant messaging app using Firebase Authentication and Firestore.",
    link: "https://github.com/omarito47", // replace with repo if available
  },
  {
    name: "Weather Forecast App",
    description: "Weather app showing real-time data using OpenWeather API.",
    link: "https://github.com/omarito47",
  },
  {
    name: "ToDo App",
    description: "Task manager with local data persistence.",
    link: "https://github.com/omarito47",
  },
  {
    name: "Photo Displayer",
    description: "Displays photo collections fetched from public APIs.",
    link: "https://github.com/omarito47",
  },
  {
    name: "Currency Converter",
    description: "Live currency exchange app with API integration.",
    link: "https://github.com/omarito47",
  },
  {
    name: "Login Options App",
    description: "Multi-authentication login interface with clean design.",
    link: "https://github.com/omarito47",
  },
];

export default function SideProjects() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Side Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col hover:scale-105 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {project.name}
            </h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
