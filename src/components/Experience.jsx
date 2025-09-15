import { motion } from "framer-motion";

export default function Experience() {
  const jobs = [
    {
      role: "Junior Mobile Developer",
      company: "Biwam Consulting",
      date: "Jun 2023 - Dec 2024",
      tasks: [
        "Developed and maintained functionalities in a transport mobile app",
        "Integrated multi-language support",
        "Added map and profile management features",
        "Tested and maintained app in production",
      ],
    },
    {
      role: "Junior Web Developer",
      company: "Biwam Consulting",
      date: "Jun 2022 - Jan 2023",
      tasks: [
        "Developed and maintained CRM web application",
        "Created and consumed APIs",
        "Built profile management module",
      ],
    },
  ];

  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="space-y-10">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-gray-600">{job.company} • {job.date}</p>
            <ul className="list-disc ml-6 mt-3 text-gray-700">
              {job.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
