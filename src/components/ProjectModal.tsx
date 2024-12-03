import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { Project } from './Projects';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl transition-all">
                <div className="relative">
                  <button
                    onClick={onClose}
                    className="absolute right-0 top-0 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <X size={24} />
                  </button>
                  <div className="mt-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold mb-4 dark:text-white">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 dark:text-white">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 dark:text-white">Key Features:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                          {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-900 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        View Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;