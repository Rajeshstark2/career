'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Recommendation {
  skill: string;
  level: string;
  priority: 'high' | 'medium' | 'low';
  actions: string[];
}

const mockRecommendations: Recommendation[] = [
  {
    skill: 'Network Protocols',
    level: 'Beginner',
    priority: 'high',
    actions: [
      'Complete the CompTIA Network+ certification',
      'Practice with Wireshark for packet analysis',
      'Study TCP/IP fundamentals daily for 2 months'
    ]
  },
  {
    skill: 'Firewall Configuration',
    level: 'Below Average',
    priority: 'medium',
    actions: [
      'Set up a home lab with pfSense',
      'Take an online course on firewall management',
      'Practice with different firewall rules and policies'
    ]
  },
  {
    skill: 'Security Auditing',
    level: 'Average',
    priority: 'low',
    actions: [
      'Join security forums and communities',
      'Read security audit reports and case studies',
      'Participate in bug bounty programs'
    ]
  }
];

export default function Results() {
  const router = useRouter();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  useEffect(() => {
    // In a real app, this would fetch results from an API
    // For now, we'll use mock data
    setRecommendations(mockRecommendations);
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your Personalized Career Roadmap
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Based on your skill assessment, here are your recommended improvement areas
          </p>
        </div>

        <div className="space-y-8">
          {recommendations.map((rec) => (
            <div
              key={rec.skill}
              className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {rec.skill}
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                      rec.priority
                    )}`}
                  >
                    {rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1)} Priority
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Current Level: {rec.level}
                </p>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Recommended Actions:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {rec.actions.map((action, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/career-selection')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Start New Assessment
          </button>
        </div>
      </div>
    </div>
  );
}