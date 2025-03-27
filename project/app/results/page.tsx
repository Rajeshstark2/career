'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { assessments } from '../data/assessments';

interface SkillDetail {
  name: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  learningResources: {
    courses: string[];
    books: string[];
    documentation: string[];
  };
  handsOnProjects: string[];
  certifications: string[];
  tools: string[];
  realWorldApplications: {
    industries: string[];
    researchAreas: string[];
  };
  improvementGuide: {
    topics: string[];
    learningPath: string[];
    milestones: string[];
    timeEstimates: string;
  };
}

interface DepartmentSkills {
  department: string;
  field: string;
  skills: SkillDetail[];
}

interface SkillAssessment {
  name: string;
  currentLevel: 'Low' | 'Medium' | 'High' | 'Advanced';
  targetLevel: 'Medium' | 'High' | 'Advanced';
  improvementNeeded: boolean;
  improvementGuide: {
    topics: string[];
    learningPath: string[];
    resources: string[];
    timeEstimate: string;
    projects: string[];
    targetLevel: 'Medium' | 'High' | 'Advanced';
  };
}

interface FieldAssessment {
  field: string;
  skills: SkillAssessment[];
  overallStatus: 'Needs Improvement' | 'Proficient' | 'Master';
  recommendations: string[];
}

const departmentSkills: DepartmentSkills[] = [
  {
    department: 'IT',
    field: 'Web Development',
    skills: [
      {
        name: 'Frontend Development',
        proficiency: 'Beginner',
        description: 'Building user interfaces and interactive web applications',
        learningResources: {
          courses: [
            'Complete Web Development Bootcamp by Angela Yu (Udemy)',
            'Frontend Web Development with React (Coursera)',
            'Advanced CSS and Sass (Udemy)'
          ],
          books: [
            'Eloquent JavaScript by Marijn Haverbeke',
            'You Don\'t Know JS Series by Kyle Simpson',
            'CSS in Depth by Keith J. Grant'
          ],
          documentation: [
            'MDN Web Docs',
            'React Documentation',
            'Vue.js Documentation'
          ]
        },
        handsOnProjects: [
          'Build a responsive e-commerce website',
          'Create a real-time chat application',
          'Develop a social media dashboard',
          'Design a portfolio website with animations'
        ],
        certifications: [
          'Meta Frontend Developer Professional Certificate',
          'Google Web Development Certificate',
          'AWS Certified Frontend Developer'
        ],
        tools: [
          'VS Code',
          'Chrome DevTools',
          'Figma',
          'Git',
          'npm/yarn'
        ],
        realWorldApplications: {
          industries: [
            'E-commerce',
            'Digital Marketing',
            'Financial Services',
            'Healthcare'
          ],
          researchAreas: [
            'Web Performance Optimization',
            'Accessibility Standards',
            'Progressive Web Apps'
          ]
        },
        improvementGuide: {
          topics: [
            "Data Structures and Algorithms",
            "Object-Oriented Programming",
            "Design Patterns",
            "Clean Code Practices"
          ],
          learningPath: [
            "Start with basic programming concepts",
            "Learn data structures and algorithms",
            "Practice problem-solving on platforms like LeetCode",
            "Study design patterns and best practices"
          ],
          milestones: [
            "Understand basic programming concepts",
            "Implement simple programs",
            "Solve medium-level problems",
            "Design and implement complex systems"
          ],
          timeEstimates: "3-6 months"
        }
      },
      {
        name: 'Backend Development',
        proficiency: 'Intermediate',
        description: 'Server-side programming and database management',
        learningResources: {
          courses: [
            'Node.js and Express.js Bootcamp (Udemy)',
            'Backend Development with Python (Coursera)',
            'Database Design and Management (edX)'
          ],
          books: [
            'Node.js Design Patterns by Mario Casciaro',
            'Clean Code by Robert C. Martin',
            'Database Design for Mere Mortals by Michael J. Hernandez'
          ],
          documentation: [
            'Node.js Documentation',
            'Express.js Documentation',
            'MongoDB Documentation'
          ]
        },
        handsOnProjects: [
          'Build a RESTful API with authentication',
          'Create a real-time notification system',
          'Develop a content management system',
          'Design a scalable microservices architecture'
        ],
        certifications: [
          'MongoDB Certified Developer',
          'AWS Certified Backend Developer',
          'Node.js Certified Developer'
        ],
        tools: [
          'Postman',
          'MongoDB Compass',
          'Docker',
          'Redis',
          'PostgreSQL'
        ],
        realWorldApplications: {
          industries: [
            'Cloud Computing',
            'Enterprise Software',
            'IoT Platforms',
            'Financial Technology'
          ],
          researchAreas: [
            'Distributed Systems',
            'Microservices Architecture',
            'Database Optimization'
          ]
        },
        improvementGuide: {
          topics: [
            "Version Control (Git)",
            "CI/CD Pipelines",
            "Testing Methodologies",
            "Code Review Practices"
          ],
          learningPath: [
            "Master Git and GitHub workflows",
            "Learn about CI/CD tools and practices",
            "Study different testing approaches",
            "Practice code review techniques"
          ],
          milestones: [
            "Understand basic Git usage",
            "Implement CI/CD pipelines",
            "Test and review code",
            "Refactor and optimize code"
          ],
          timeEstimates: "2-4 months"
        }
      }
    ]
  },
  {
    department: 'CSE',
    field: 'Software Engineering',
    skills: [
      {
        name: 'Software Architecture',
        proficiency: 'Intermediate',
        description: 'Designing scalable and maintainable software systems',
        learningResources: {
          courses: [
            'Software Architecture & Design (Udacity)',
            'Clean Architecture by Robert C. Martin (Udemy)',
            'System Design for Developers (Educative)'
          ],
          books: [
            'Clean Architecture by Robert C. Martin',
            'Designing Data-Intensive Applications by Martin Kleppmann',
            'Building Microservices by Sam Newman'
          ],
          documentation: [
            'Microsoft Azure Architecture Documentation',
            'AWS Well-Architected Framework',
            'Google Cloud Architecture Center'
          ]
        },
        handsOnProjects: [
          'Design a scalable e-commerce system',
          'Create a microservices-based application',
          'Build a distributed caching system',
          'Develop a real-time analytics platform'
        ],
        certifications: [
          'AWS Certified Solutions Architect',
          'Google Cloud Professional Architect',
          'Azure Solutions Architect Expert'
        ],
        tools: [
          'Draw.io',
          'Lucidchart',
          'Enterprise Architect',
          'Visual Paradigm'
        ],
        realWorldApplications: {
          industries: [
            'Enterprise Software',
            'Cloud Computing',
            'Financial Services',
            'Healthcare Systems'
          ],
          researchAreas: [
            'Distributed Systems',
            'Cloud Native Architecture',
            'Service Mesh Design'
          ]
        },
        improvementGuide: {
          topics: [
            "Clean Architecture Principles",
            "Microservices Design Patterns",
            "Service Mesh Implementation",
            "Cloud-Native Application Development"
          ],
          learningPath: [
            "Study clean architecture principles",
            "Implement microservices",
            "Deploy and manage service mesh",
            "Develop cloud-native applications"
          ],
          milestones: [
            "Understand clean architecture principles",
            "Design microservices",
            "Implement service mesh",
            "Develop cloud-native applications"
          ],
          timeEstimates: "2-4 months"
        }
      }
    ]
  },
  {
    department: 'AI/ML',
    field: 'Deep Learning',
    skills: [
      {
        name: 'Neural Networks',
        proficiency: 'Beginner',
        description: 'Understanding and implementing deep learning models',
        learningResources: {
          courses: [
            'Deep Learning Specialization by Andrew Ng (Coursera)',
            'PyTorch for Deep Learning (Udemy)',
            'Fast.ai Practical Deep Learning'
          ],
          books: [
            'Deep Learning by Ian Goodfellow',
            'Hands-On Machine Learning with Scikit-Learn and TensorFlow',
            'Python for Data Science Handbook'
          ],
          documentation: [
            'PyTorch Documentation',
            'TensorFlow Documentation',
            'Keras Documentation'
          ]
        },
        handsOnProjects: [
          'Build an image classification model',
          'Create a natural language processing system',
          'Develop a recommendation engine',
          'Design a computer vision application'
        ],
        certifications: [
          'TensorFlow Developer Certificate',
          'IBM AI Engineering Professional Certificate',
          'DeepLearning.AI Deep Learning Specialization'
        ],
        tools: [
          'Jupyter Notebook',
          'PyTorch',
          'TensorFlow',
          'Keras',
          'scikit-learn'
        ],
        realWorldApplications: {
          industries: [
            'Healthcare',
            'Autonomous Vehicles',
            'Financial Services',
            'Retail Analytics'
          ],
          researchAreas: [
            'Transfer Learning',
            'Neural Architecture Search',
            'Explainable AI'
          ]
        },
        improvementGuide: {
          topics: [
            "Transfer Learning Techniques",
            "Neural Architecture Search",
            "Explainable AI",
            "Deep Learning Frameworks"
          ],
          learningPath: [
            "Study transfer learning",
            "Implement neural architecture search",
            "Study explainable AI",
            "Use deep learning frameworks"
          ],
          milestones: [
            "Understand transfer learning",
            "Implement neural architecture search",
            "Study explainable AI",
            "Use deep learning frameworks"
          ],
          timeEstimates: "2-4 months"
        }
      }
    ]
  }
];

const skillAssessments: { [key: string]: { [key: string]: FieldAssessment } } = {
  'CSE': {
    'Software Engineering': {
      field: 'Software Engineering',
      skills: [
        {
          name: 'Programming Fundamentals',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Data Structures and Algorithms',
              'Object-Oriented Programming',
              'Design Patterns',
              'Clean Code Practices'
            ],
            learningPath: [
              'Start with basic programming concepts',
              'Learn data structures and algorithms',
              'Practice problem-solving on LeetCode',
              'Study design patterns'
            ],
            resources: [
              'Introduction to Algorithms by CLRS',
              'Clean Code by Robert C. Martin',
              'GeeksforGeeks DSA Course',
              'LeetCode Premium'
            ],
            timeEstimate: '3-4 months',
            projects: [
              'Build a data structure visualization tool',
              'Create a simple compiler',
              'Develop a design pattern implementation library'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'System Design',
          currentLevel: 'Medium',
          targetLevel: 'High',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Distributed Systems',
              'Microservices Architecture',
              'Cloud Computing',
              'System Scalability'
            ],
            learningPath: [
              'Study distributed systems fundamentals',
              'Learn microservices design patterns',
              'Practice system design interviews',
              'Build scalable applications'
            ],
            resources: [
              'System Design Primer on GitHub',
              'Designing Data-Intensive Applications',
              'AWS Architecture Center',
              'Google Cloud Architecture'
            ],
            timeEstimate: '4-6 months',
            projects: [
              'Design a scalable e-commerce system',
              'Build a distributed caching system',
              'Create a microservices-based application'
            ],
            targetLevel: 'High'
          }
        }
      ],
      overallStatus: 'Needs Improvement',
      recommendations: [
        'Focus on strengthening programming fundamentals',
        'Practice system design problems regularly',
        'Build more complex projects to improve practical skills'
      ]
    },
    'Database Systems': {
      field: 'Database Systems',
      skills: [
        {
          name: 'Database Design',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Database Normalization',
              'SQL Optimization',
              'Indexing Strategies',
              'Data Modeling'
            ],
            learningPath: [
              'Learn database fundamentals',
              'Study normalization techniques',
              'Practice query optimization',
              'Master data modeling'
            ],
            resources: [
              'Database Design for Mere Mortals',
              'SQL Performance Explained',
              'PostgreSQL Documentation',
              'MongoDB University'
            ],
            timeEstimate: '2-3 months',
            projects: [
              'Design a normalized database schema',
              'Optimize slow queries',
              'Create a database performance monitoring tool'
            ],
            targetLevel: 'Medium'
          }
        }
      ],
      overallStatus: 'Needs Improvement',
      recommendations: [
        'Focus on database design fundamentals',
        'Practice query optimization',
        'Learn about different database types'
      ]
    }
  },
  'IT': {
    'Web Development': {
      field: 'Web Development',
      skills: [
        {
          name: 'Frontend Development',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'HTML5 and CSS3 fundamentals',
              'JavaScript ES6+ features',
              'React.js and Next.js',
              'Responsive design principles',
              'Web accessibility standards',
              'Frontend testing frameworks'
            ],
            learningPath: [
              'Start with HTML/CSS basics',
              'Learn JavaScript fundamentals',
              'Study React.js framework',
              'Practice responsive design',
              'Learn testing with Jest/React Testing Library',
              'Build portfolio projects'
            ],
            resources: [
              'MDN Web Docs',
              'React Documentation',
              'Frontend Masters courses',
              'Udemy Web Development courses',
              'CSS-Tricks tutorials'
            ],
            timeEstimate: '3-6 months',
            projects: [
              'Build a responsive portfolio website',
              'Create a React-based e-commerce site',
              'Develop a real-time chat application',
              'Build a social media dashboard'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Backend Development',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Node.js and Express.js',
              'RESTful API design',
              'Database integration',
              'Authentication and authorization',
              'API security best practices',
              'Performance optimization'
            ],
            learningPath: [
              'Learn Node.js basics',
              'Study Express.js framework',
              'Understand RESTful principles',
              'Learn database integration',
              'Practice API security',
              'Build backend services'
            ],
            resources: [
              'Node.js Documentation',
              'Express.js Guide',
              'MongoDB University',
              'PostgreSQL Tutorials',
              'Backend Development courses on Udemy'
            ],
            timeEstimate: '3-6 months',
            projects: [
              'Build a RESTful API service',
              'Create a user authentication system',
              'Develop a real-time notification system',
              'Build a content management system'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Database Management',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'SQL fundamentals',
              'Database design principles',
              'Query optimization',
              'Indexing strategies',
              'Database security',
              'Data modeling'
            ],
            learningPath: [
              'Learn SQL basics',
              'Study database design',
              'Practice query optimization',
              'Learn indexing techniques',
              'Understand database security',
              'Build database schemas'
            ],
            resources: [
              'SQL Tutorial',
              'Database Design courses',
              'MongoDB University',
              'PostgreSQL Documentation',
              'Database Management courses'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Design and implement a database schema',
              'Optimize slow queries',
              'Create a database backup system',
              'Build a data migration tool'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'API Design',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'RESTful principles',
              'API versioning',
              'Documentation standards',
              'Error handling',
              'Rate limiting',
              'API testing'
            ],
            learningPath: [
              'Learn RESTful API design',
              'Study API documentation tools',
              'Practice error handling',
              'Learn API testing',
              'Implement security measures',
              'Build API services'
            ],
            resources: [
              'RESTful API Design Guide',
              'Swagger Documentation',
              'Postman Learning Center',
              'API Design courses',
              'OpenAPI Specification'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Design a RESTful API',
              'Create API documentation',
              'Build an API testing suite',
              'Implement API security measures'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Web Security',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'OWASP Top 10',
              'XSS prevention',
              'CSRF protection',
              'SQL injection prevention',
              'HTTPS implementation',
              'Security headers'
            ],
            learningPath: [
              'Learn web security basics',
              'Study common vulnerabilities',
              'Practice security testing',
              'Learn security best practices',
              'Implement security measures',
              'Conduct security audits'
            ],
            resources: [
              'OWASP Documentation',
              'Web Security Academy',
              'Security courses on Udemy',
              'Security blogs and articles',
              'Security testing tools'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Implement security measures in a web app',
              'Conduct a security audit',
              'Build a secure authentication system',
              'Create a security testing tool'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Performance Optimization',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Frontend optimization',
              'Backend optimization',
              'Database optimization',
              'Caching strategies',
              'Load balancing',
              'Performance monitoring'
            ],
            learningPath: [
              'Learn performance basics',
              'Study optimization techniques',
              'Practice performance testing',
              'Learn monitoring tools',
              'Implement optimization',
              'Measure and improve'
            ],
            resources: [
              'Web Performance Guide',
              'Performance optimization courses',
              'Google Web Fundamentals',
              'Performance testing tools',
              'Monitoring tools documentation'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Optimize a slow website',
              'Implement caching',
              'Set up performance monitoring',
              'Create a performance testing tool'
            ],
            targetLevel: 'Medium'
          }
        }
      ],
      overallStatus: 'Needs Improvement',
      recommendations: [
        'Focus on building a strong foundation in web development fundamentals',
        'Practice building full-stack applications',
        'Learn modern web development frameworks and tools',
        'Stay updated with web development trends and best practices',
        'Build a portfolio of web applications'
      ]
    },
    'Mobile Development': {
      field: 'Mobile Development',
      overallStatus: 'Needs Improvement',
      skills: [
        {
          name: 'Native App Development',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'iOS Development (Swift)',
              'Android Development (Kotlin)',
              'Platform-specific UI/UX',
              'App architecture patterns',
              'Native APIs integration',
              'App store guidelines'
            ],
            learningPath: [
              'Choose a platform (iOS/Android)',
              'Learn platform-specific language',
              'Study UI/UX guidelines',
              'Practice app development',
              'Learn app store deployment',
              'Build portfolio apps'
            ],
            resources: [
              'Apple Developer Documentation',
              'Android Developer Guide',
              'Platform-specific courses',
              'App development tutorials',
              'Developer forums'
            ],
            timeEstimate: '4-6 months',
            projects: [
              'Build a native weather app',
              'Create a social media app',
              'Develop a fitness tracking app',
              'Build a news reader app'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Cross-platform Development',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'React Native',
              'Flutter',
              'Cross-platform UI/UX',
              'Platform-specific code',
              'State management',
              'Native module integration'
            ],
            learningPath: [
              'Choose a framework (React Native/Flutter)',
              'Learn framework basics',
              'Study cross-platform UI',
              'Practice app development',
              'Learn native integration',
              'Build cross-platform apps'
            ],
            resources: [
              'React Native Documentation',
              'Flutter Documentation',
              'Cross-platform courses',
              'Development tutorials',
              'Community resources'
            ],
            timeEstimate: '3-5 months',
            projects: [
              'Build a cross-platform todo app',
              'Create a chat application',
              'Develop a shopping app',
              'Build a news aggregator'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Mobile UI/UX Design',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Mobile design principles',
              'Platform guidelines',
              'User interaction patterns',
              'Responsive layouts',
              'Accessibility',
              'Design systems'
            ],
            learningPath: [
              'Learn mobile design basics',
              'Study platform guidelines',
              'Practice UI/UX design',
              'Learn prototyping tools',
              'Implement designs',
              'Test user experience'
            ],
            resources: [
              'Material Design Guide',
              'Human Interface Guidelines',
              'UI/UX design courses',
              'Design tools tutorials',
              'Design community resources'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Design a mobile app interface',
              'Create a design system',
              'Build a prototype',
              'Conduct user testing'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Mobile Testing',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Unit testing',
              'UI testing',
              'Integration testing',
              'Performance testing',
              'Security testing',
              'Test automation'
            ],
            learningPath: [
              'Learn testing fundamentals',
              'Study testing frameworks',
              'Practice test writing',
              'Learn automation tools',
              'Implement test suites',
              'Set up CI/CD testing'
            ],
            resources: [
              'Testing documentation',
              'Testing courses',
              'Framework guides',
              'Testing tools tutorials',
              'Testing best practices'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Write test suites for an app',
              'Set up automated testing',
              'Create a testing framework',
              'Implement performance testing'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'App Store Deployment',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'App store guidelines',
              'App signing',
              'Version management',
              'Store listing optimization',
              'Analytics integration',
              'Distribution strategies'
            ],
            learningPath: [
              'Learn store guidelines',
              'Study app signing',
              'Practice deployment',
              'Learn analytics',
              'Optimize listings',
              'Manage releases'
            ],
            resources: [
              'App Store Guidelines',
              'Play Store Guidelines',
              'Deployment guides',
              'Analytics tools',
              'Store optimization guides'
            ],
            timeEstimate: '1-2 months',
            projects: [
              'Deploy an app to stores',
              'Optimize store listings',
              'Set up analytics',
              'Manage app updates'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Mobile Security',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'App security best practices',
              'Data encryption',
              'Authentication',
              'Secure storage',
              'Network security',
              'Security testing'
            ],
            learningPath: [
              'Learn security basics',
              'Study encryption methods',
              'Practice secure coding',
              'Learn security testing',
              'Implement security measures',
              'Conduct security audits'
            ],
            resources: [
              'Security documentation',
              'Security courses',
              'Security tools guides',
              'Security best practices',
              'Security testing resources'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Implement app security',
              'Set up encryption',
              'Create security tests',
              'Conduct security audit'
            ],
            targetLevel: 'Medium'
          }
        }
      ],
      recommendations: [
        'Start with a single platform before moving to cross-platform development',
        'Focus on building a strong foundation in mobile UI/UX principles',
        'Learn platform-specific guidelines and best practices',
        'Build a portfolio of mobile applications',
        'Stay updated with mobile development trends'
      ]
    },
    'Cloud Computing': {
      field: 'Cloud Computing',
      overallStatus: 'Needs Improvement',
      skills: [
        {
          name: 'Cloud Platforms (AWS/Azure/GCP)',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Cloud service models',
              'Core services',
              'Resource management',
              'Cost optimization',
              'Security services',
              'Monitoring tools'
            ],
            learningPath: [
              'Choose a cloud provider',
              'Learn core services',
              'Study resource management',
              'Practice cost optimization',
              'Learn security features',
              'Set up monitoring'
            ],
            resources: [
              'AWS Documentation',
              'Azure Documentation',
              'GCP Documentation',
              'Cloud courses',
              'Cloud certification guides'
            ],
            timeEstimate: '3-6 months',
            projects: [
              'Set up cloud infrastructure',
              'Deploy applications',
              'Implement monitoring',
              'Optimize cloud costs'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Infrastructure as Code',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Terraform',
              'CloudFormation',
              'ARM templates',
              'Infrastructure automation',
              'Version control',
              'State management'
            ],
            learningPath: [
              'Learn IaC basics',
              'Study automation tools',
              'Practice infrastructure coding',
              'Learn version control',
              'Implement automation',
              'Manage infrastructure'
            ],
            resources: [
              'Terraform Documentation',
              'CloudFormation Guide',
              'ARM Templates Guide',
              'IaC courses',
              'Automation tutorials'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Create infrastructure code',
              'Set up automated deployment',
              'Manage infrastructure state',
              'Implement infrastructure testing'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Cloud Security',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Security best practices',
              'Identity management',
              'Access control',
              'Network security',
              'Data protection',
              'Compliance'
            ],
            learningPath: [
              'Learn security basics',
              'Study security services',
              'Practice security implementation',
              'Learn compliance requirements',
              'Implement security measures',
              'Conduct security audits'
            ],
            resources: [
              'Security documentation',
              'Security courses',
              'Compliance guides',
              'Security tools',
              'Best practices guides'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Set up security measures',
              'Implement access control',
              'Create security policies',
              'Conduct security assessment'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Container Orchestration',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Docker',
              'Kubernetes',
              'Container management',
              'Service mesh',
              'Scaling strategies',
              'Monitoring'
            ],
            learningPath: [
              'Learn container basics',
              'Study orchestration tools',
              'Practice container management',
              'Learn scaling techniques',
              'Implement monitoring',
              'Deploy applications'
            ],
            resources: [
              'Docker Documentation',
              'Kubernetes Guide',
              'Container courses',
              'Orchestration tutorials',
              'Community resources'
            ],
            timeEstimate: '3-5 months',
            projects: [
              'Set up container environment',
              'Deploy containerized apps',
              'Implement scaling',
              'Set up monitoring'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Serverless Computing',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Serverless architecture',
              'Function as a Service',
              'Event-driven programming',
              'API Gateway',
              'Cost optimization',
              'Monitoring'
            ],
            learningPath: [
              'Learn serverless basics',
              'Study serverless services',
              'Practice function development',
              'Learn event handling',
              'Implement monitoring',
              'Optimize costs'
            ],
            resources: [
              'Serverless documentation',
              'Serverless courses',
              'Function guides',
              'Architecture tutorials',
              'Best practices'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Build serverless functions',
              'Create event-driven system',
              'Set up API Gateway',
              'Implement monitoring'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Cloud Cost Optimization',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Cost analysis',
              'Resource optimization',
              'Pricing models',
              'Budget management',
              'Cost monitoring',
              'Optimization tools'
            ],
            learningPath: [
              'Learn cost basics',
              'Study pricing models',
              'Practice cost analysis',
              'Learn optimization techniques',
              'Implement monitoring',
              'Optimize resources'
            ],
            resources: [
              'Cost optimization guides',
              'Pricing documentation',
              'Cost courses',
              'Optimization tools',
              'Best practices'
            ],
            timeEstimate: '1-2 months',
            projects: [
              'Analyze cloud costs',
              'Optimize resource usage',
              'Set up cost monitoring',
              'Implement cost controls'
            ],
            targetLevel: 'Medium'
          }
        }
      ],
      recommendations: [
        'Start with a single cloud provider and learn its core services',
        'Focus on understanding cloud security and best practices',
        'Learn infrastructure as code tools and automation',
        'Practice deploying and managing cloud resources',
        'Stay updated with cloud computing trends and new services'
      ]
    },
    'DevOps': {
      field: 'DevOps',
      overallStatus: 'Needs Improvement',
      skills: [
        {
          name: 'CI/CD Pipeline Development',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Pipeline automation',
              'Build tools',
              'Testing integration',
              'Deployment strategies',
              'Environment management',
              'Pipeline security'
            ],
            learningPath: [
              'Learn CI/CD basics',
              'Study automation tools',
              'Practice pipeline creation',
              'Learn deployment methods',
              'Implement security',
              'Optimize pipelines'
            ],
            resources: [
              'Jenkins Documentation',
              'GitLab CI/CD Guide',
              'GitHub Actions Guide',
              'Pipeline courses',
              'Automation tutorials'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Set up CI/CD pipeline',
              'Automate testing',
              'Implement deployment',
              'Create pipeline security'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Infrastructure Automation',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Configuration management',
              'Infrastructure as Code',
              'Automation tools',
              'Version control',
              'State management',
              'Testing'
            ],
            learningPath: [
              'Learn automation basics',
              'Study automation tools',
              'Practice infrastructure coding',
              'Learn version control',
              'Implement testing',
              'Manage infrastructure'
            ],
            resources: [
              'Ansible Documentation',
              'Puppet Guide',
              'Chef Guide',
              'Automation courses',
              'Infrastructure tutorials'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Automate infrastructure',
              'Set up configuration management',
              'Implement testing',
              'Manage infrastructure state'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Monitoring and Logging',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Monitoring tools',
              'Log management',
              'Alerting systems',
              'Metrics collection',
              'Performance monitoring',
              'Log analysis'
            ],
            learningPath: [
              'Learn monitoring basics',
              'Study monitoring tools',
              'Practice log management',
              'Learn alerting systems',
              'Implement metrics',
              'Analyze logs'
            ],
            resources: [
              'Prometheus Documentation',
              'ELK Stack Guide',
              'Grafana Guide',
              'Monitoring courses',
              'Logging tutorials'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Set up monitoring',
              'Implement logging',
              'Create alerting system',
              'Analyze system metrics'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Version Control Systems',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Git fundamentals',
              'Branching strategies',
              'Merge workflows',
              'Repository management',
              'Collaboration tools',
              'Security practices'
            ],
            learningPath: [
              'Learn Git basics',
              'Study branching strategies',
              'Practice merge workflows',
              'Learn repository management',
              'Implement security',
              'Collaborate effectively'
            ],
            resources: [
              'Git Documentation',
              'GitHub Guide',
              'GitLab Guide',
              'Version control courses',
              'Collaboration tutorials'
            ],
            timeEstimate: '1-2 months',
            projects: [
              'Set up Git workflow',
              'Manage branches',
              'Implement security',
              'Collaborate on projects'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Container Technologies',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Docker basics',
              'Container management',
              'Image creation',
              'Registry management',
              'Security practices',
              'Performance optimization'
            ],
            learningPath: [
              'Learn container basics',
              'Study container tools',
              'Practice image creation',
              'Learn registry management',
              'Implement security',
              'Optimize containers'
            ],
            resources: [
              'Docker Documentation',
              'Container courses',
              'Registry guides',
              'Security tutorials',
              'Optimization guides'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Create container images',
              'Set up registry',
              'Implement security',
              'Optimize containers'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'DevOps Security',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Security best practices',
              'Access control',
              'Secret management',
              'Compliance',
              'Security scanning',
              'Incident response'
            ],
            learningPath: [
              'Learn security basics',
              'Study security tools',
              'Practice security implementation',
              'Learn compliance requirements',
              'Implement scanning',
              'Handle incidents'
            ],
            resources: [
              'Security documentation',
              'Security courses',
              'Compliance guides',
              'Security tools',
              'Incident response guides'
            ],
            timeEstimate: '2-4 months',
            projects: [
              'Implement security measures',
              'Set up scanning',
              'Create incident response plan',
              'Manage compliance'
            ],
            targetLevel: 'Medium'
          }
        }
      ],
      recommendations: [
        'Focus on automation and infrastructure as code',
        'Learn container technologies and orchestration',
        'Master CI/CD pipeline development',
        'Develop strong monitoring and logging skills',
        'Stay updated with DevOps tools and practices'
      ]
    }
  },
  'Civil': {
    'Structural Engineering': {
      field: 'Structural Engineering',
      skills: [
        {
          name: 'Structural Analysis',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Structural Mechanics',
              'Load Analysis',
              'Material Properties',
              'Design Codes'
            ],
            learningPath: [
              'Study structural mechanics fundamentals',
              'Learn load analysis techniques',
              'Understand material behavior',
              'Master design codes and standards'
            ],
            resources: [
              'Structural Analysis by R.C. Hibbeler',
              'IS 456: Plain and Reinforced Concrete',
              'IS 800: General Construction in Steel',
              'Structural Engineering Institute Resources'
            ],
            timeEstimate: '4-6 months',
            projects: [
              'Design a simple beam structure',
              'Analyze a truss system',
              'Create a structural model using software'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Construction Management',
          currentLevel: 'Medium',
          targetLevel: 'High',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Project Planning',
              'Resource Management',
              'Quality Control',
              'Safety Standards'
            ],
            learningPath: [
              'Learn project management principles',
              'Study construction methodologies',
              'Understand quality control processes',
              'Master safety protocols'
            ],
            resources: [
              'Project Management Body of Knowledge (PMBOK)',
              'Construction Management by Daniel W. Halpin',
              'OSHA Safety Standards',
              'Construction Project Management by Frederick Gould'
            ],
            timeEstimate: '3-4 months',
            projects: [
              'Create a project schedule',
              'Develop a quality control plan',
              'Design a safety management system'
            ],
            targetLevel: 'High'
          }
        }
      ],
      overallStatus: 'Needs Improvement',
      recommendations: [
        'Focus on strengthening structural analysis skills',
        'Practice construction management techniques',
        'Stay updated with latest building codes'
      ]
    }
  },
  'Mechanical': {
    'Thermal Engineering': {
      field: 'Thermal Engineering',
      skills: [
        {
          name: 'Heat Transfer',
          currentLevel: 'Low',
          targetLevel: 'Medium',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Conduction',
              'Convection',
              'Radiation',
              'Heat Exchangers'
            ],
            learningPath: [
              'Study heat transfer fundamentals',
              'Learn conduction principles',
              'Understand convection mechanisms',
              'Master heat exchanger design'
            ],
            resources: [
              'Heat Transfer by J.P. Holman',
              'Fundamentals of Heat and Mass Transfer by Incropera',
              'ASHRAE Handbooks',
              'Thermal Engineering Resources'
            ],
            timeEstimate: '3-4 months',
            projects: [
              'Design a heat exchanger',
              'Analyze thermal systems',
              'Create thermal models'
            ],
            targetLevel: 'Medium'
          }
        },
        {
          name: 'Fluid Mechanics',
          currentLevel: 'Medium',
          targetLevel: 'High',
          improvementNeeded: true,
          improvementGuide: {
            topics: [
              'Fluid Properties',
              'Flow Analysis',
              'Turbulence',
              'Pump Design'
            ],
            learningPath: [
              'Learn fluid mechanics basics',
              'Study flow analysis techniques',
              'Understand turbulence modeling',
              'Master pump design principles'
            ],
            resources: [
              'Fluid Mechanics by Frank M. White',
              'Introduction to Fluid Mechanics by Fox',
              'ASME Fluid Engineering Resources',
              'Pump Handbook by Karassik'
            ],
            timeEstimate: '4-6 months',
            projects: [
              'Design a pump system',
              'Analyze fluid flow',
              'Create CFD models'
            ],
            targetLevel: 'High'
          }
        }
      ],
      overallStatus: 'Needs Improvement',
      recommendations: [
        'Focus on strengthening heat transfer concepts',
        'Practice fluid mechanics problems',
        'Learn thermal system design'
      ]
    }
  }
};

const defaultImprovementGuide = {
  title: "Department-Specific Career Development Guide",
  departments: {
    'IT': {
      name: "Information Technology",
      fields: {
        'Web Development': {
          skills: [
            {
              name: "Frontend Development",
              level: "Beginner",
              topics: [
                "HTML5, CSS3, and JavaScript Fundamentals",
                "React.js or Vue.js Framework",
                "Responsive Design Principles",
                "Web Accessibility Standards"
              ],
              learningPath: [
                "Start with HTML and CSS basics",
                "Learn JavaScript fundamentals",
                "Master a frontend framework",
                "Practice responsive design"
              ],
              timeEstimate: "3-4 months"
            },
            {
              name: "Backend Development",
              level: "Intermediate",
              topics: [
                "Server-side Programming",
                "Database Management",
                "API Design",
                "Cloud Services"
              ],
              learningPath: [
                "Learn Node.js or Python",
                "Master database design",
                "Study API development",
                "Explore cloud platforms"
              ],
              timeEstimate: "4-6 months"
            }
          ]
        },
        'Mobile Development': {
          skills: [
            {
              name: "iOS Development",
              level: "Beginner",
              topics: [
                "Swift Programming",
                "iOS UI/UX Design",
                "App Store Guidelines",
                "iOS Frameworks"
              ],
              learningPath: [
                "Learn Swift basics",
                "Study iOS UI components",
                "Practice app development",
                "Learn app deployment"
              ],
              timeEstimate: "4-6 months"
            },
            {
              name: "Android Development",
              level: "Intermediate",
              topics: [
                "Kotlin/Java Programming",
                "Android UI/UX Design",
                "Play Store Guidelines",
                "Android Frameworks"
              ],
              learningPath: [
                "Learn Kotlin/Java",
                "Study Android UI components",
                "Practice app development",
                "Learn app deployment"
              ],
              timeEstimate: "4-6 months"
            }
          ]
        }
      }
    },
    'CSE': {
      name: "Computer Science Engineering",
      fields: {
        'Software Engineering': {
          skills: [
            {
              name: "Software Architecture",
              level: "Intermediate",
              topics: [
                "System Design",
                "Design Patterns",
                "Clean Architecture",
                "Microservices"
              ],
              learningPath: [
                "Study software architecture principles",
                "Learn design patterns",
                "Practice system design",
                "Explore microservices"
              ],
              timeEstimate: "4-6 months"
            },
            {
              name: "Testing and Quality Assurance",
              level: "Intermediate",
              topics: [
                "Unit Testing",
                "Integration Testing",
                "Test Automation",
                "Performance Testing"
              ],
              learningPath: [
                "Learn testing frameworks",
                "Study test automation",
                "Practice test-driven development",
                "Master performance testing"
              ],
              timeEstimate: "3-4 months"
            }
          ]
        },
        'Database Systems': {
          skills: [
            {
              name: "Database Design",
              level: "Beginner",
              topics: [
                "Database Normalization",
                "SQL Programming",
                "Database Optimization",
                "Data Modeling"
              ],
              learningPath: [
                "Learn SQL fundamentals",
                "Study database design",
                "Practice optimization",
                "Master data modeling"
              ],
              timeEstimate: "3-4 months"
            }
          ]
        }
      }
    },
    'AI/ML': {
      name: "Artificial Intelligence and Machine Learning",
      fields: {
        'Deep Learning': {
          skills: [
            {
              name: "Neural Networks",
              level: "Beginner",
              topics: [
                "Deep Learning Fundamentals",
                "Neural Network Architectures",
                "Model Training",
                "Transfer Learning"
              ],
              learningPath: [
                "Learn deep learning basics",
                "Study neural networks",
                "Practice model training",
                "Explore transfer learning"
              ],
              timeEstimate: "4-6 months"
            }
          ]
        },
        'Computer Vision': {
          skills: [
            {
              name: "Image Processing",
              level: "Beginner",
              topics: [
                "Image Processing Fundamentals",
                "Computer Vision Algorithms",
                "Deep Learning for Vision",
                "Object Detection"
              ],
              learningPath: [
                "Learn image processing basics",
                "Study computer vision algorithms",
                "Practice with OpenCV",
                "Explore deep learning models"
              ],
              timeEstimate: "4-6 months"
            }
          ]
        }
      }
    }
  }
};

export default function Results() {
  const router = useRouter();
  const [department, setDepartment] = useState('');
  const [field, setField] = useState('');
  const [skillLevels, setSkillLevels] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const dept = params.get('department');
    const fld = params.get('field');
    
    if (dept) {
      setDepartment(dept);
      setField(fld || '');
      
      // Get skill levels from URL parameters
      const levels: { [key: string]: string } = {};
      params.forEach((value, key) => {
        if (key !== 'department' && key !== 'field') {
          levels[key] = value;
        }
      });
      setSkillLevels(levels);
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Needs Improvement':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Proficient':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Master':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Low':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'High':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Advanced':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const renderAssessment = (assessment: any) => (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-medium text-gray-900 dark:text-white">
            {assessment.field}
          </h4>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(assessment.overallStatus)}`}>
            {assessment.overallStatus}
          </span>
        </div>

        <div className="space-y-6">
          {assessment.skills.map((skill: any, index: number) => {
            const currentLevel = skillLevels[skill.name] || 'Low';
            const targetLevel = skill.improvementGuide.targetLevel;
            const improvementNeeded = currentLevel === 'Low' || currentLevel === 'Medium';

            return (
              <div key={index} className="border-l-4 border-indigo-500 pl-4">
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-lg font-medium text-gray-900 dark:text-white">
                    {skill.name}
                  </h5>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(currentLevel)}`}>
                      Current: {currentLevel}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(targetLevel)}`}>
                      Target: {targetLevel}
                    </span>
                  </div>
                </div>

                {improvementNeeded ? (
                  <div className="space-y-4">
                    <div>
                      <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Topics to Focus On:
                      </h6>
                      <ul className="list-disc pl-5 space-y-1">
                        {skill.improvementGuide.topics.map((topic: string, topicIndex: number) => (
                          <li key={topicIndex} className="text-sm text-gray-600 dark:text-gray-400">
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Learning Path:
                      </h6>
                      <ol className="list-decimal pl-5 space-y-1">
                        {skill.improvementGuide.learningPath.map((step: string, stepIndex: number) => (
                          <li key={stepIndex} className="text-sm text-gray-600 dark:text-gray-400">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Recommended Resources:
                      </h6>
                      <ul className="list-disc pl-5 space-y-1">
                        {skill.improvementGuide.resources.map((resource: string, resourceIndex: number) => (
                          <li key={resourceIndex} className="text-sm text-gray-600 dark:text-gray-400">
                            {resource}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h6 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Practice Projects:
                      </h6>
                      <ul className="list-disc pl-5 space-y-1">
                        {skill.improvementGuide.projects.map((project: string, projectIndex: number) => (
                          <li key={projectIndex} className="text-sm text-gray-600 dark:text-gray-400">
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Estimated Time to Improve: {skill.improvementGuide.timeEstimate}
                    </p>
                  </div>
                ) : (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Your current level is already at or above the target level. Focus on maintaining and practicing your skills regularly.
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <h5 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Overall Recommendations
          </h5>
          <ul className="list-disc pl-5 space-y-2">
            {assessment.recommendations.map((rec: string, index: number) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400">
                {rec}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (!department) {
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Please select a department to view skill improvement suggestions
          </h2>
          <button
            onClick={() => router.push('/career-selection')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Start New Assessment
          </button>
        </div>
      );
    }

    // If both department and field are selected, show only that field's assessment
    if (department && field && assessments[department]?.[field]) {
      return (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {field} Skill Assessment
            </h2>
            <button
              onClick={() => router.push('/career-selection')}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start New Assessment
            </button>
          </div>
          {renderAssessment(assessments[department][field])}
        </div>
      );
    }

    // If only department is selected, show all fields in that department
    if (department && assessments[department]) {
      return (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b pb-2">
            {department} Department
          </h2>
          {Object.entries(assessments[department]).map(([fieldName, assessment]) => (
            <div key={fieldName}>
              {renderAssessment(assessment)}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          No assessment available for the selected department
        </h2>
        <button
          onClick={() => router.push('/career-selection')}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Start New Assessment
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Department-Specific Skill Improvement Guide
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {department ? `Skill improvement suggestions for ${department} department` : 'Select a department'}
          </p>
        </div>

        <div className="space-y-8">
          {renderContent()}
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