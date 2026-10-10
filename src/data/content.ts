export const profile = {
  name: 'João Queirós',
  role: 'Software Engineer',
  employer: 'Pictet Tech',
  place: 'Lisbon, Portugal',
  linkedin: 'https://www.linkedin.com/in/joaomiguelqueiros/',
  github: 'https://github.com/Senpawaii',
};

export type StationId = 'about' | 'stack' | 'projects' | 'resume' | 'contact';

export const services = [
  ['Full-stack delivery', 'Spring Boot and Angular applications, from the first discussion to production.'],
  ['Event-driven and workflow systems', 'Kafka, IBM MQ and Temporal, built to stay reliable and easy to reason about as they grow.'],
  ['AI-powered automation', 'Using LLMs to turn unstructured documents into structured payloads for banking systems.'],
  ['Technical leadership', 'Code review, mentoring, and shaping the backlog with product owners and stakeholders.'],
] as const;

export const stack: { group: string; items: string[] }[] = [
  { group: 'Languages and frameworks', items: ['Java 17/21', 'Spring Boot', 'Angular', 'TypeScript', 'RxJS', 'Python', 'C/C++'] },
  { group: 'Messaging and orchestration', items: ['Apache Kafka', 'IBM MQ', 'Temporal', 'Event-driven architecture'] },
  { group: 'Data', items: ['PostgreSQL', 'Oracle DB'] },
  { group: 'Delivery and operations', items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'GitHub Actions', 'AWS', 'GCP'] },
  { group: 'Observability, quality and security', items: ['Loki, Grafana, Tempo, Mimir', 'Jaeger', 'JUnit 5', 'Mockito', 'Testcontainers', 'PIT mutation testing', 'OAuth2', 'Spring Security'] },
  { group: 'Architecture and leadership', items: ['Software architecture', 'Distributed systems', 'API design', 'Domain-driven design', 'Technical leadership', 'Mentoring', 'Code review'] },
  { group: 'AI in engineering', items: ['LLM-based document processing', 'Claude Code', 'Agent skills and evals'] },
];

export const projects = [
  {
    name: 'Argus',
    url: 'https://github.com/Senpawaii/Argus',
    tag: 'Observability',
    text: 'A sandbox shop with deliberately planted bugs, for practising frontend monitoring with a self-hosted Sentry.',
    tech: ['Angular', 'Sentry', 'Express', 'Docker'],
  },
  {
    name: 'KumaCore',
    url: 'https://github.com/Senpawaii/KumaCore',
    tag: 'IoT',
    text: 'Home energy management that monitors and controls electricity per outlet, with rules to cut costs.',
    tech: ['IoT', 'Analytics'],
  },
  {
    name: 'MediaMaestro',
    url: 'https://github.com/Senpawaii/MediaMaestro',
    tag: 'Java',
    text: 'Organises a personal library of movies, shows and anime, with flat-file or relational storage and a watchlist.',
    tech: ['Java', 'Maven', 'Docker'],
  },
  {
    name: 'eShopOnContainersThesis',
    url: 'https://github.com/Senpawaii/eShopOnContainersThesis',
    tag: 'Research',
    text: 'A fork of Microsoft’s microservices reference application, which I used as a testbed for my MSc research on consistency.',
    tech: ['.NET', 'Kubernetes', 'RabbitMQ'],
  },
  {
    name: 'grimoire-lab',
    url: 'https://github.com/Senpawaii/grimoire-lab',
    tag: 'AI tooling',
    text: 'Benchmarks AI agent skills by running a task suite with and without the skill, then comparing pass rate, tokens, cost and time.',
    tech: ['TypeScript', 'Node.js', 'SQLite', 'Vitest'],
  },
  {
    name: 'spellbook',
    url: 'https://github.com/Senpawaii/spellbook',
    tag: 'AI tooling',
    text: 'My personal agent skills, versioned with semver tags, each shipped with a benchmark suite so changes are measured.',
    tech: ['Markdown', 'YAML', 'GitHub Actions'],
  },
];

export const experience = [
  {
    org: 'Pictet Tech',
    ctx: 'Banking technology',
    when: 'Dec 2023 to Present',
    note: 'Started on this work as an Accenture consultant placed at Pictet, then was internalized by Pictet Tech.',
    roles: [
      {
        title: 'Software Engineer',
        when: '',
        points: [
          'Lead the development of an AI-powered automation platform that turns unstructured data into structured, contract-aligned payloads for internal banking systems.',
          'Designed and built a self-service solution that uses LLMs to process different document types through modular connectors, so extraction workflows are scalable and reusable.',
          'Own the platform end to end (architecture, design, implementation and delivery) and became its primary technical authority after the initial architecture handover.',
          'Architect event-driven, workflow-based systems with Kafka, IBM MQ and Temporal for resilience, scalability and reliable orchestration of complex processes.',
          'Automated manual, time-intensive operational processes, which cut processing overhead for internal teams.',
          'Act as project lead in the team: review code, mentor engineers, and push for good practice in collaboration, quality and system design.',
          'Define and prioritise the backlog with Product Owners and Project Managers, and work directly with stakeholders and end users on discovery and feedback.',
          'Build and maintain CI/CD with GitHub Actions and ArgoCD, run observability and incident analysis on the LGTM stack, and enforce OAuth2 and Spring Security across services.',
        ],
      },
    ],
  },
  {
    org: 'Accenture Portugal',
    ctx: 'Consultant placed at Pictet',
    when: 'Nov 2023 to Nov 2025',
    roles: [
      {
        title: 'System Developer Analyst (Mid Full-Stack Engineer)',
        when: 'Apr 2025 to Nov 2025',
        points: [
          'Resolved long-standing application bottlenecks, improving throughput and latency by roughly 300%.',
          'Co-led the migration of legacy applications to Spring Boot and Angular 19.',
          'Co-designed a monitoring tool for 10+ applications, tracking deployments, downtime, error logs and integration health.',
          'Ran CI/CD with GitHub Actions, Bamboo and ArgoCD, and traced and load-tested distributed systems with Jaeger.',
          'Enforced Spring Security and OAuth 2 across services, and kept test quality high with mutation testing (PIT).',
        ],
      },
      {
        title: 'App/Cloud Support Associate (Junior Full-Stack Engineer)',
        when: 'Nov 2023 to Apr 2025',
        points: [
          'Co-led the work that unblocked a three-year Fintech integration project.',
          'Raised test coverage across several products from 20 to 30% to above 90%, and built the integration-test infrastructure for legacy systems.',
          'Migrated deployments to AWS Kubernetes, improving the CI/CD pipeline and delivery times.',
          'Worked in an Agile team on Spring Boot, Java 17/21, Angular, JUnit, Docker and Kafka, with peer code reviews.',
        ],
      },
    ],
  },
  {
    org: 'INESC-ID Lisbon',
    ctx: 'Research internship',
    when: 'Feb 2023 to Nov 2023',
    roles: [
      {
        title: 'Early Stage Researcher',
        when: '',
        points: [
          'Designed, built and evaluated µTCC, middleware that gives a microservices system data versions consistent with Transactional Causal Consistency.',
          'Eliminated consistency violations in over 95% of read operations, at a latency penalty of up to 25% that fewer aborts and re-executions largely offset.',
        ],
      },
    ],
  },
];

export const education = [
  {
    school: 'Instituto Superior Técnico, University of Lisbon',
    degree: 'MSc, Computer Science and Engineering',
    when: 'Sep 2021 to Nov 2023',
    note: 'Distributed Systems and Data Science. Courses: Parallel and Distributed Computing, Highly Dependable Systems, Design of Distributed Applications, Cloud Computing and Virtualization, Deep Learning.',
  },
  {
    school: 'Instituto Superior Técnico, University of Lisbon',
    degree: 'BSc, Computer Science and Engineering',
    when: 'Sep 2018 to Jul 2021',
    note: 'Academic Merit Diploma 2019/20 and 2020/21. Mentored new students through their first year.',
  },
];

export const awards = [
  { title: 'Best Student Poster', where: 'INForum 2023, Porto', text: 'For µTCC, a middleware that removed consistency violations in over 95% of read operations in microservices.', poster: true },
  { title: 'Academic Merit Diploma', where: '2020/2021', text: 'Top academic performance in the BSc.', poster: false },
  { title: 'Academic Merit Diploma', where: '2019/2020', text: 'Top academic performance in the BSc.', poster: false },
];
