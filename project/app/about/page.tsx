'use client';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Rajesh',
    role: 'Full Stack Web Developer',
    specialties: ['Hacking', 'Cyber Security'],
    image: 'https://api.dicebear.com/6.x/initials/svg?seed=RS&backgroundColor=indigo'
  },
  {
    name: 'Thirumoorthy',
    role: 'Marketing & Game Developer',
    specialties: ['Marketing', 'Sales', 'Basic Web Development'],
    image: 'https://api.dicebear.com/6.x/initials/svg?seed=T&backgroundColor=green'
  },
  {
    name: 'Saur Basha',
    role: 'Full Stack Developer',
    specialties: ['Web Development', 'Graphic Design', 'App Development'],
    image: 'https://api.dicebear.com/6.x/initials/svg?seed=SB&backgroundColor=purple'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            We are a team of college students passionate about technology, cybersecurity, web development, and marketing. 
            Our goal is to build innovative projects that solve real-world problems.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="relative w-32 h-32 mx-auto">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full"
                      unoptimized
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {member.role}
                    </p>
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Connect With Us
          </h3>
          <div className="mt-4 space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              Email: <a href="mailto:starkcloudie@gmail.com" className="text-indigo-600 dark:text-indigo-400">starkcloudie@gmail.com</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Instagram: <a href="https://instagram.com/starkcloudie" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400">@starkcloudie</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Twitter: <a href="https://twitter.com/Rajeshcoder" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400">@Rajeshcoder</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              GitHub: <a href="https://github.com/rajeshstark2" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400">rajeshstark2</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}