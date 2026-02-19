import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="card group"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          )}
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
