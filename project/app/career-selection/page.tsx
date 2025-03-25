'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const departments = [
  'IT',
  'CSE',
  'Mechanical',
  'Civil',
  'AI/ML',
  'Cybersecurity',
];

const fieldsByDepartment: { [key: string]: string[] } = {
  'IT': ['Web Development', 'Mobile Development', 'Cloud Computing', 'DevOps'],
  'CSE': ['Software Engineering', 'Database Systems', 'Computer Networks', 'Operating Systems'],
  'Mechanical': ['Design', 'Manufacturing', 'Thermal Engineering', 'Robotics'],
  'Civil': ['Structural Engineering', 'Construction Management', 'Environmental Engineering', 'Transportation'],
  'AI/ML': ['Computer Vision', 'Natural Language Processing', 'Deep Learning', 'Data Science'],
  'Cybersecurity': ['Network Security', 'Application Security', 'Cloud Security', 'Ethical Hacking'],
};

export default function CareerSelection() {
  const router = useRouter();
  const [department, setDepartment] = useState('');
  const [field, setField] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (department && field) {
      router.push(`/skill-assessment?department=${department}&field=${field}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Select Your Career Path
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Choose your department and field of interest to begin the assessment
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Department
              </label>
              <select
                id="department"
                name="department"
                value={department}
                onChange={(e) => {
                  setDepartment(e.target.value);
                  setField('');
                }}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              >
                <option value="">Select a department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="field" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Field
              </label>
              <select
                id="field"
                name="field"
                value={field}
                onChange={(e) => setField(e.target.value)}
                disabled={!department}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white disabled:opacity-50"
                required
              >
                <option value="">Select a field</option>
                {department && fieldsByDepartment[department].map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={!department || !field}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Assessment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}