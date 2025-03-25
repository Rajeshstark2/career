import Link from 'next/link';

const features = [
  {
    title: 'Personalized Assessment',
    description: 'Get a detailed evaluation of your skills based on industry standards and requirements.',
    icon: '📊'
  },
  {
    title: 'Career Roadmap',
    description: 'Receive a customized learning path to help you achieve your career goals.',
    icon: '🎯'
  },
  {
    title: 'Industry Insights',
    description: 'Access up-to-date information about various tech fields and their requirements.',
    icon: '💡'
  },
  {
    title: 'Skill Gap Analysis',
    description: 'Identify areas where you need improvement to succeed in your chosen career.',
    icon: '📈'
  }
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Transform Your Skills into Career Success
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Evaluate your skills, receive personalized recommendations, and build a structured roadmap for your career growth.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/career-selection"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Assessment
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              Comprehensive Evaluation
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to assess your career readiness
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                    <span className="text-3xl">{feature.icon}</span>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}