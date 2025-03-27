'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const skillLevelOptions = [
  { value: 'Low', description: 'Basic understanding, needs significant improvement' },
  { value: 'Medium', description: 'Working knowledge, can handle basic tasks' },
  { value: 'High', description: 'Strong understanding, can handle complex tasks' },
  { value: 'Advanced', description: 'Expert level, can mentor others' }
];

export default function SkillAssessment() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const department = searchParams.get('department');
  const field = searchParams.get('field');
  const [skillLevels, setSkillLevels] = useState<{ [key: string]: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (department && field) {
      const params = new URLSearchParams({
        department,
        field,
        ...skillLevels
      });
      router.push(`/results?${params.toString()}`);
    }
  };

  const handleSkillLevelChange = (skill: string, level: string) => {
    setSkillLevels(prev => ({
      ...prev,
      [skill]: level
    }));
  };

  // Get skills based on department and field
  const getSkills = () => {
    switch (department) {
      case 'IT':
        switch (field) {
          case 'Web Development':
            return [
              'Frontend Development',
              'Backend Development',
              'Database Management',
              'API Design',
              'Web Security',
              'Performance Optimization'
            ];
          case 'Mobile Development':
            return [
              'Native App Development',
              'Cross-platform Development',
              'Mobile UI/UX Design',
              'Mobile Testing',
              'App Store Deployment',
              'Mobile Security'
            ];
          case 'Cloud Computing':
            return [
              'Cloud Platforms (AWS/Azure/GCP)',
              'Infrastructure as Code',
              'Cloud Security',
              'Container Orchestration',
              'Serverless Computing',
              'Cloud Cost Optimization'
            ];
          case 'DevOps':
            return [
              'CI/CD Pipeline Development',
              'Infrastructure Automation',
              'Monitoring and Logging',
              'Version Control Systems',
              'Container Technologies',
              'DevOps Security'
            ];
          case 'Computer Networks':
            return [
              'Network Fundamentals',
              'Network Security',
              'Network Protocols',
              'Network Design'
            ];
          case 'Operating Systems':
            return [
              'OS Fundamentals',
              'System Administration',
              'Shell Scripting',
              'System Security'
            ];
          default:
            return [];
        }
      case 'CSE':
        switch (field) {
          case 'Software Engineering':
            return ['Programming Fundamentals', 'System Design', 'Software Testing'];
          case 'Database Systems':
            return ['Database Design', 'SQL', 'Data Modeling'];
          case 'Computer Networks':
            return [
              'Network Architecture',
              'Network Protocols',
              'Network Security',
              'Network Performance'
            ];
          case 'Operating Systems':
            return [
              'OS Architecture',
              'Process Management',
              'Memory Management',
              'File Systems'
            ];
          case 'Computer Architecture':
            return [
              'Digital Logic',
              'Computer Organization',
              'Processor Design',
              'Memory Systems'
            ];
          default:
            return [];
        }
      case 'Civil':
        switch (field) {
          case 'Structural Engineering':
            return ['Structural Analysis', 'Construction Management', 'Building Design'];
          case 'Environmental Engineering':
            return ['Environmental Impact Assessment', 'Waste Management', 'Sustainable Design'];
          case 'Transportation Engineering':
            return ['Traffic Engineering', 'Highway Design', 'Transportation Planning'];
          case 'Geotechnical Engineering':
            return ['Soil Mechanics', 'Foundation Design', 'Slope Stability'];
          case 'Construction Management':
            return ['Project Planning', 'Cost Estimation', 'Quality Control'];
          default:
            return [];
        }
      case 'Mechanical':
        switch (field) {
          case 'Thermal Engineering':
            return ['Heat Transfer', 'Fluid Mechanics', 'Thermal Systems Design'];
          case 'Manufacturing Engineering':
            return ['Manufacturing Processes', 'Quality Control', 'Production Planning'];
          case 'Robotics and Automation':
            return ['Robot Kinematics', 'Control Systems', 'Automation'];
          case 'Design Engineering':
            return ['CAD/CAM', 'Product Design', 'Machine Design'];
          case 'Maintenance Engineering':
            return ['Preventive Maintenance', 'Reliability Engineering', 'Equipment Management'];
          default:
            return [];
        }
      default:
        return [];
    }
  };

  const skills = getSkills();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Assess Your Skills
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Rate your current skill level for each area in {field} within {department}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {skills.map((skill) => (
            <div key={skill} className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {skill}
              </h3>
              <div className="space-y-4">
                {skillLevelOptions.map((level) => (
                  <label key={level.value} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name={skill}
                      value={level.value}
                      checked={skillLevels[skill] === level.value}
                      onChange={() => handleSkillLevelChange(skill, level.value)}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      required
                    />
                    <div>
                      <span className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        {level.value}
                      </span>
                      <span className="block text-sm text-gray-500 dark:text-gray-400">
                        {level.description}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={Object.keys(skillLevels).length !== skills.length}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              View Results
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}