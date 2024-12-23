import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';

export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
  features: string[];
}

const projects: Project[] = [
  {
    title: 'Netflix Clone',
    description: 'A full-featured Netflix clone built with React, Firebase, and TMDB API. Features include user authentication, movie browsing, and responsive design.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80',
    github: 'https://github.com/yourusername/netflix-clone',
    live: 'https://netflix-clone-demo.netlify.app',
    technologies: ['React', 'Firebase', 'TMDB API', 'Tailwind CSS'],
    features: [
      'User authentication and profiles',
      'Dynamic content loading',
      'Responsive design',
      'Movie and TV show browsing',
      'Video trailer playback'
    ]
  },
  {
    title: 'Inshorts Clone',
    description: 'A news aggregator app inspired by Inshorts, featuring bite-sized news articles and a clean interface.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80',
    github: 'https://github.com/yourusername/inshorts-clone',
    live: 'https://inshorts-clone-demo.netlify.app',
    technologies: ['React', 'Node.js', 'News API', 'Express'],
    features: [
      'Real-time news updates',
      'Category filtering',
      'Share functionality',
      'Bookmark articles',
      'Dark mode support'
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleProjectClick(project)}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-medium">Click to view details</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
export default Projects;