'use client';
import Image from 'next/image';

const projects = [
  {
    title: 'Clip Hunt',
    description: 'A platform for discovering and sharing video clips from your favorite content creators.',
    url: 'https://cliphunt.in',
    image: 'https://api.dicebear.com/6.x/shapes/svg?seed=ClipHunt&backgroundColor=indigo'
  },
  {
    title: 'Ebook Store',
    description: 'Digital bookstore offering a wide range of ebooks across various genres and topics.',
    url: 'https://ebookcart.in',
    image: 'https://api.dicebear.com/6.x/shapes/svg?seed=EbookStore&backgroundColor=green'
  },
  {
    title: 'Chat Mate',
    description: 'Real-time chat application with features like group messaging and file sharing.',
    url: 'https://chatmate-dc97.onrender.com',
    image: 'https://api.dicebear.com/6.x/shapes/svg?seed=ChatMate&backgroundColor=purple'
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Check out some of our innovative projects that showcase our skills and passion for technology.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9 relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="px-6 py-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-6">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                      Visit Website
                      <svg
                        className="ml-2 -mr-1 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}