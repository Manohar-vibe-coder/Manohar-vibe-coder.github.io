export const profile = {
  name: 'Manohar D',
  role: 'Automation Engineer',
  location: 'Bengaluru, India',
  email: 'manoharroy.d@gmail.com',
  linkedin: 'https://www.linkedin.com/in/manoharroyd/',
  github: 'https://github.com/Manohar-vibe-coder',
}

export const skills = [
  { title: 'Automation & Programming', items: ['Python', 'SQL', 'Java', 'Flask', 'Python Automation', 'QA Automation'] },
  { title: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'Amazon ECR', 'Git', 'GitHub', 'Kafdrop'] },
  { title: 'Data Engineering', items: ['Snowflake', 'Databricks', 'Informatica IICS', 'ETL Validation', 'Data Quality'] },
  { title: 'Testing & Delivery', items: ['Functional Testing', 'Regression Testing', 'Data Reconciliation', 'Agile', 'Jira'] },
]

export const experience = [
  {
    role: 'Automation Engineer',
    company: 'Tata Consultancy Services',
    location: 'Bengaluru, India',
    period: 'Sep 2026 — Present',
    bullets: [
      'Develop Python automation to execute and manage jobs within Kubernetes pods.',
      'Support workflows for Python- and Java-based applications running in Kubernetes environments.',
      'Use Kafdrop to inspect Kafka topics and messages during application troubleshooting.',
      'Work with Docker, Flask, Kubernetes, and Amazon ECR in cloud-native application workflows.',
    ],
  },
  {
    role: 'Analyst',
    company: 'Tata Consultancy Services',
    location: 'Bengaluru, India',
    period: 'Dec 2024 — Sep 2026',
    bullets: [
      'Contributed to on-premises data migration to Snowflake Cloud using Informatica IICS and Databricks.',
      'Performed SQL-based ETL validation, data-quality checks, and data reconciliation.',
      'Created Python scripts to support validation and reduce repetitive manual work.',
      'Supported functional, regression, and data-validation testing for migration workflows.',
    ],
  },
  {
    role: 'Graduate Trainee — Ignite',
    company: 'Tata Consultancy Services',
    location: 'Chennai, India',
    period: 'Aug 2024 — Dec 2024',
    bullets: [
      'Completed foundational training in programming, web development, AI/ML, testing, and Agile practices.',
      'Explored Python, Java, React, Django, Spring Boot, PostgreSQL, Selenium, and Jenkins.',
      'Built learning projects combining ReactJS, PostgreSQL, and open-source language-model concepts.',
    ],
  },
  {
    role: 'Intern',
    company: 'SMC Technologies',
    location: 'Coimbatore, India',
    period: 'May 2024 — Aug 2024',
    bullets: [
      'Gained practical exposure to web development, Python, MongoDB, Spring Boot, and machine-learning concepts.',
    ],
  },
]

export const projects = [
  {
    number: '01',
    title: 'Kubernetes Job Automation',
    description: 'Python-based automation to run and manage application jobs in Kubernetes pods, helping reduce repetitive operational steps and improve consistency.',
    tags: ['Python', 'Kubernetes', 'Docker'],
    image: '/images/kubernetes.svg',
    category: 'Cloud Automation',
  },
  {
    number: '02',
    title: 'Application & Kafka Monitoring',
    description: 'A troubleshooting workflow for containerized services, using Kafdrop to inspect Kafka topics and messages while investigating application behavior.',
    tags: ['Kafdrop', 'Kafka', 'Microservices'],
    image: '/images/monitoring.svg',
    category: 'Observability',
  },
  {
    number: '03',
    title: 'Cloud Data Migration Validation',
    description: 'SQL checks and Python utilities to validate migrated datasets, reconcile source and target results, and support data-quality assurance.',
    tags: ['Snowflake', 'SQL', 'Databricks', 'IICS'],
    image: '/images/data.svg',
    category: 'Data Engineering',
  },
  {
    number: '04',
    title: 'QA & ETL Validation Utilities',
    description: 'Reusable validation and testing workflows supporting functional, regression, and ETL quality checks across data-driven applications.',
    tags: ['Python', 'ETL', 'QA Testing'],
    image: '/images/quality.svg',
    category: 'Quality Engineering',
  },
]

export const certifications = [
  { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', detail: 'Cloud concepts and Azure services', icon: 'cloud' },
  { name: 'Microsoft Certified: Azure AI Fundamentals', issuer: 'Microsoft', detail: 'AI and machine-learning fundamentals', icon: 'brain' },
  { name: 'GitHub Foundations', issuer: 'GitHub', detail: 'GitHub collaboration and development workflows', icon: 'github' },
  { name: 'Deploying and Evaluating GenAI Apps with MongoDB', issuer: 'MongoDB', detail: 'Learning credential', icon: 'database' },
  { name: 'Building GenAI Apps Learning Badge Path', issuer: 'MongoDB', detail: 'Learning badge path', icon: 'badge' },
]
