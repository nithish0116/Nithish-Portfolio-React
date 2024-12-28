import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Contact Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 dark:text-white">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 dark:text-gray-300">
                    <Mail className="text-red-600" />
                    <span>gadalanithish07@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4 dark:text-gray-300">
                    <Phone className="text-red-600" />
                    <span>+91 9573114609</span>
                  </div>
                  <div className="flex items-center gap-4 dark:text-gray-300">
                    <MapPin className="text-red-600" />
                    <span>Hyderabad</span>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent dark:text-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-transparent border-black border-2 py-2 px-6 rounded-lg hover:bg-red-500 transition-colors dark:text-white"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;