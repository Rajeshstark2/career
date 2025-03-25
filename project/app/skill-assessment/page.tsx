'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type SkillLevel = 'Beginner' | 'Below Average' | 'Average' | 'Above Average' | 'Great' | 'Expert';

interface Skill {
  name: string;
  level: SkillLevel;
}

const skillsByField: { [key: string]: string[] } = {
  'Web Development': [
    'HTML/CSS',
    'JavaScript',
    'React/Next.js',
    'Backend Development',
    'Database Management',
    'API Design',
  ],
  'Mobile Development': [
    'iOS Development',
    'Android Development',
    'React Native',
    'Flutter',
    'Mobile UI/UX',
    'App Performance',
  ],
  'Cloud Computing': [
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'Cloud Security',
    'Serverless',
  ],
  'DevOps': [
    'CI/CD',
    'Infrastructure as Code',
    'Monitoring',
    'Version Control',
    'Automation',
    'Container Orchestration',
  ],
  'Software Engineering': [
    'Data Structures',
    'Algorithms',
    'System Design',
    'Software Architecture',
    'Testing',
    'Code Quality',
  ],
  'Database Systems': [
    'SQL',
    'NoSQL',
    'Database Design',
    'Query Optimization',
    'Data Modeling',
    'Database Administration',
  ],
  'Computer Networks': [
    'Network Protocols',
    'Network Security',
    'Routing',
    'Switching',
    'Network Design',
    'Troubleshooting',
  ],
  'Operating Systems': [
    'Process Management',
    'Memory Management',
    'File Systems',
    'System Programming',
    'Shell Scripting',
    'OS Security',
  ],
  'Network Security': [
    'Network Protocols',
    'Firewall Configuration',
    'Intrusion Detection',
    'VPN Setup',
    'Security Auditing',
    'Packet Analysis',
  ],
  'Application Security': [
    'Code Review',
    'Vulnerability Assessment',
    'Security Testing',
    'Authentication Systems',
    'API Security',
    'Secure Coding Practices',
  ],
  'Cloud Security': [
    'Cloud Platforms',
    'Identity Management',
    'Data Encryption',
    'Security Architecture',
    'Compliance',
    'Cloud Native Security',
  ],
  'Ethical Hacking': [
    'Penetration Testing',
    'Social Engineering',
    'Malware Analysis',
    'Web Application Security',
    'Wireless Security',
    'Reverse Engineering',
  ],
  'Design': [
    'CAD Software',
    'Technical Drawing',
    'Product Design',
    '3D Modeling',
    'Design Analysis',
    'Material Selection',
  ],
  'Manufacturing': [
    'Production Planning',
    'Quality Control',
    'Process Optimization',
    'CNC Programming',
    'Manufacturing Systems',
    'Lean Manufacturing',
  ],
  'Thermal Engineering': [
    'Heat Transfer',
    'Thermodynamics',
    'HVAC Systems',
    'Energy Systems',
    'Fluid Mechanics',
    'Thermal Design',
  ],
  'Robotics': [
    'Robot Programming',
    'Control Systems',
    'Sensor Integration',
    'Motion Planning',
    'Robot Design',
    'Automation',
  ],
  'Structural Engineering': [
    'Structural Analysis',
    'Building Codes',
    'Material Properties',
    'Foundation Design',
    'Seismic Design',
    'Construction Methods',
  ],
  'Construction Management': [
    'Project Planning',
    'Cost Estimation',
    'Site Management',
    'Safety Protocols',
    'Contract Management',
    'Resource Allocation',
  ],
  'Environmental Engineering': [
    'Water Treatment',
    'Air Quality',
    'Waste Management',
    'Environmental Impact',
    'Sustainability',
    'Remediation',
  ],
  'Transportation': [
    'Traffic Analysis',
    'Transportation Planning',
    'Highway Design',
    'Public Transit',
    'Infrastructure',
    'Safety Analysis',
  ],
};

const skillLevels: SkillLevel[] = [
  'Beginner',
  'Below Average',
  'Average',
  'Above Average',
  'Great',
  'Expert',
];

export default function SkillAssessment() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const department = searchParams.get('department');
  const field = searchParams.get('field');

  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    if (field && skillsByField[field]) {
      setSkills(
        skillsByField[field].map((skillName) => ({
          name: skillName,
          level: 'Beginner',
        }))
      );
    }
  }, [field]);

  const handleSkillLevelChange = (skillName: string, level: SkillLevel) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill) =>
        skill.name === skillName ? { ...skill, level } : skill
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Assessment Results:', { department, field, skills });
    router.push('/results');
  };

  if (!department || !field) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
            Invalid Parameters
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Please start from the career selection page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Skill Assessment
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {department} - {field}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Skill
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Proficiency Level
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {skills.map((skill) => (
                  <tr key={skill.name}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      <select
                        value={skill.level}
                        onChange={(e) =>
                          handleSkillLevelChange(
                            skill.name,
                            e.target.value as SkillLevel
                          )
                        }
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      >
                        {skillLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Assessment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}