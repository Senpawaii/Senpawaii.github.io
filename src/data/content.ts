export const profile = {
  name: 'João Queirós',
  role: 'Full-Stack Engineer',
  place: 'Lisbon, Portugal',
  linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-queir%C3%B3s-659549b0/',
  github: 'https://github.com/Senpawaii',
};

export type StationId = 'about' | 'stack' | 'projects' | 'resume' | 'contact';

export const stations: { id: StationId; key: string; label: string; sub: string }[] = [
  { id: 'about', key: '1', label: "Foreman's Office", sub: 'About me' },
  { id: 'stack', key: '2', label: 'Engineering Bay', sub: 'Stack & tools' },
  { id: 'resume', key: '3', label: 'Records Room', sub: 'Resume & awards' },
  { id: 'contact', key: '4', label: 'Dispatch', sub: 'Get in touch' },
  { id: 'projects', key: '5', label: 'Output Dock', sub: 'Shipped projects' },
];

export const crew = [
  { name: 'Planner', color: '#4c8bd1', tool: 'clipboard', job: 'Breaks a goal into small, checkable steps.' },
  { name: 'Builder', color: '#e8742c', tool: 'wrench', job: 'Writes the code, one scoped change at a time.' },
  { name: 'Reviewer', color: '#2f8f83', tool: 'lens', job: 'Reads the diff like a skeptical teammate.' },
  { name: 'Tester', color: '#9b6bd1', tool: 'flag', job: 'Tries to break it before anyone else can.' },
] as const;

export const services = [
  ['Full-stack delivery', 'Spring Boot and Angular applications, from the first conversation to production.'],
  ['Distributed systems', 'Event-driven, resilient services; this was my research focus at INESC-ID.'],
  ['Cloud-native operations', 'Containers, Kubernetes, CI/CD and observability, so changes ship safely.'],
  ['AI-assisted engineering', 'Directing agents as a crew, with benchmarks to check they actually help.'],
] as const;

export const stack: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['Java 17/21', 'Spring Boot', 'Spring Security', 'OAuth 2', 'Kafka', 'Oracle DB', 'Python', 'C/C++'] },
  { group: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS'] },
  { group: 'Cloud & delivery', items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'GitHub Actions', 'AWS (EC2, RDS)', 'GCP'] },
  { group: 'Quality & observability', items: ['JUnit 5', 'Mockito', 'Testcontainers', 'PIT mutation testing', 'Grafana', 'Jaeger'] },
  { group: 'Architecture', items: ['Microservices', 'Event-driven', 'Clean / Hexagonal', 'Domain-Driven Design'] },
  { group: 'AI workflows', items: ['Claude Code', 'Agent skills', 'Skill benchmarking', 'LLM-as-judge evals'] },
];

export const projects = [
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
    text: 'A fork of Microsoft’s microservices reference application, used as a testbed for my MSc research on consistency.',
    tech: ['.NET', 'Kubernetes', 'RabbitMQ'],
  },
];

export const experience = [
  {
    org: 'Accenture Portugal',
    ctx: 'Fintech',
    when: 'Nov 2023 – Present',
    roles: [
      {
        title: 'Mid Full-Stack Engineer',
        when: 'Apr 2025 – Present',
        points: [
          'Resolved long-standing application bottlenecks, improving throughput and latency by roughly 300%.',
          'Led the migration of legacy applications to Spring Boot and Angular 19.',
          'Co-led a monitoring tool tracking deployments, downtime, error logs and integrations across 10+ applications.',
          'Run CI/CD with GitHub Actions and ArgoCD; trace and load-test distributed systems with Jaeger.',
          'Secure service-to-service access with Spring Security and OAuth 2; keep test quality high with mutation testing (PIT).',
        ],
      },
      {
        title: 'Junior Full-Stack Engineer',
        when: 'Nov 2023 – Mar 2025',
        points: [
          'Raised test coverage across several products from 20–30% to above 90%.',
          'Built the integration-test infrastructure for legacy products with colleagues.',
          'Helped migrate deployments to AWS Kubernetes clusters and shortened feature delivery times.',
          'Co-led the work that unblocked a three-year integration between two platforms in a Fintech automation initiative.',
        ],
      },
    ],
  },
  {
    org: 'INESC-ID Lisbon',
    ctx: 'Research',
    when: 'Feb 2023 – Nov 2023',
    roles: [
      {
        title: 'Early Stage Researcher',
        when: '',
        points: [
          'Designed, built and evaluated middleware that gives a microservices system versions of data consistent with Transactional Causal Consistency.',
        ],
      },
    ],
  },
];

export const education = [
  {
    school: 'Instituto Superior Técnico, University of Lisbon',
    degree: 'MSc, Computer Science and Engineering',
    when: 'Sep 2021 – Nov 2023',
    note: 'Distributed Systems and Data Science. Courses: Parallel and Distributed Computing, Highly Dependable Systems, Design of Distributed Applications, Cloud Computing and Virtualization, Deep Learning.',
  },
  {
    school: 'Instituto Superior Técnico, University of Lisbon',
    degree: 'BSc, Computer Science and Engineering',
    when: 'Sep 2018 – Jul 2021',
    note: 'Academic Merit Diploma 2019/20 and 2020/21. Mentored new students through their first year.',
  },
];

export const awards = [
  { title: 'Best Student Poster', where: 'INForum 2023, Porto', text: 'For research on consistency in distributed microservices (MicroTCC).', poster: true },
  { title: 'Academic Merit Diploma', where: '2020/2021', text: 'Top academic performance in the BSc.', poster: false },
  { title: 'Academic Merit Diploma', where: '2019/2020', text: 'Top academic performance in the BSc.', poster: false },
];
