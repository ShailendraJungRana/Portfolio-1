export const SKILLS = {
  "Cloud & Infrastructure": [
    { name: "AWS", icon: "☁️" }, 
    // { name: "GCP", icon: "🌐" },
    // { name: "Azure", icon: "⚡" }, 
    { name: "Terraform", icon: "🏗️" },
    // { name: "Pulumi", icon: "🔧" },
  ],
  "Containers & Orchestration": [
     { name: "Docker", icon: "🐳" },{ name: "Kubernetes", icon: "🚢" },
    // { name: "Helm", icon: "⎈" }, { name: "Istio", icon: "🕸️" },
    // { name: "ArgoCD", icon: "🎯" },
  ],
  "CI/CD & Automation": [
    { name: "GitHub Actions", icon: "🔄" }, { name: "Jenkins", icon: "🤖" },
    // { name: "GitLab CI", icon: "🦊" }, 
    { name: "Ansible", icon: "📋" },
    // { name: "Chef", icon: "🍴" },
  ],
  "Monitoring & Observability": [
    { name: "Prometheus", icon: "📊" }, { name: "Grafana", icon: "📈" },
    // { name: "ELK Stack", icon: "🔍" }, { name: "Datadog", icon: "🐕" },
    // { name: "PagerDuty", icon: "🚨" },
  ],
  "Scripting ": [
    { name: "Python", icon: "🐍" }, { name: "Bash", icon: "💻" },
    // { name: "Go", icon: "🐹" }, { name: "PostgreSQL", icon: "🐘" },
    // { name: "Redis", icon: "🔴" },
  ],
};

export const EXPERIENCES = [
  {
    date: "2025-2026",
    role: "DevOps Trainne",
    company: "TechAxis Pvt. Ltd.",
    desc: "Lead infrastructure modernization across 3 AWS regions, managing a microservices platform serving 2M+ daily users. Reduced deployment time by 70% through GitOps pipelines and improved platform uptime to 99.98%.",
    tags: ["Linux","Docker", "Jenkins","Kubernetes", "Terraform", "AWS", "Prometheus", "Grafana"],
  },
  // {
  //   date: "2020 — 2022",
  //   role: "DevOps Engineer",
  //   company: "Axiom Systems",
  //   desc: "Built CI/CD pipelines for 40+ microservices and containerized legacy monolith into Docker-based architecture. Implemented centralized logging with ELK stack, cutting MTTR by 60%.",
  //   tags: ["Docker", "Jenkins", "Ansible", "ELK Stack", "GCP"],
  // },
  // {
  //   date: "2018 — 2020",
  //   role: "Systems Administrator",
  //   company: "DataBridge Corp",
  //   desc: "Managed on-premise infrastructure and led cloud migration pilot, moving 30% of workloads to AWS. Automated server provisioning with Ansible playbooks, saving 15+ hours/week.",
  //   tags: ["Linux", "Ansible", "AWS EC2", "Bash", "Nagios"],
  // },
];

export const PROJECTS = [
  {
    num: "01", category: "INFRASTRUCTURE AS CODE",
    name: "Multi-Region K8s Platform",
    desc: "Production-grade Kubernetes platform across 3 AWS regions with auto-failover, HPA, and full GitOps workflow using ArgoCD and Flux.",
    stack: ["Terraform", "EKS", "ArgoCD", "Helm", "Prometheus"],
  },
  {
    num: "02", category: "CI/CD AUTOMATION",
    name: "Zero-Downtime Deploy Engine",
    desc: "Canary deployment system with automated rollback triggers. Reduced release risk by 85% and enabled 20+ deploys per day.",
    stack: ["GitHub Actions", "Kubernetes", "Istio", "Python", "Datadog"],
  },
  {
    num: "03", category: "OBSERVABILITY",
    name: "Unified Monitoring Stack",
    desc: "Full-stack observability: metrics, logs, traces, and alerting. Custom dashboards for 12 engineering teams with SLO tracking.",
    stack: ["Prometheus", "Grafana", "Loki", "Tempo", "PagerDuty"],
  },
  {
    num: "04", category: "COST OPTIMIZATION",
    name: "Cloud FinOps Dashboard",
    desc: "Real-time cloud cost visibility integrating AWS Cost Explorer and GCP Billing APIs. Identified $200K/yr in savings.",
    stack: ["Python", "Terraform", "AWS", "Grafana", "BigQuery"],
  },
  {
    num: "05", category: "SECURITY",
    name: "DevSecOps Pipeline",
    desc: "Security scanning integrated into every PR: SAST, DAST, dependency checks, and container image scanning with automated gating.",
    stack: ["Trivy", "SonarQube", "OWASP ZAP", "GitHub Actions", "OPA"],
  },
  {
    num: "06", category: "DISASTER RECOVERY",
    name: "Automated DR Orchestrator",
    desc: "Chaos engineering + automated disaster recovery. RPO < 15min, RTO < 30min tested monthly with zero manual intervention.",
    stack: ["Chaos Monkey", "Terraform", "AWS Route53", "Python", "Ansible"],
  },
];

export const EDUCATION = [
  {
    degree: "Master in Information Technology",
    school: "Bhaktapur Multiple Campus",
    year: "2026 — Present",
    // desc: "Graduated with distinction. Thesis on distributed systems fault tolerance. Active member of the systems research lab.",
  },
  {
    degree: "DevOps Course",
    school: "TechAxis Pvt.Ltd",
    year: "2025 — 2026",
    desc: "Learned CI/CD pipelines, containerization (Docker, Kubernetes), Infrastructure as Code (Terraform), and monitoring (Prometheus, Grafana). Gained hands-on experience in automating deployments, managing cloud infrastructure, and improving system reliability.",
  
  },
  {
    degree: "B.Sc. Computer Science & Information Technology",
    school: "Tribhuvan University",
    year: "2019 — 2024",
    // desc: "Graduated with distinction. Thesis on distributed systems fault tolerance. Active member of the systems research lab.",
  },
  // {
  //   degree: "AWS Certified Solutions Architect – Professional",
  //   school: "Amazon Web Services",
  //   year: "2023",
  //   desc: "Advanced cloud architecture, multi-region design, cost optimization and security best practices.",
  // },
  // {
  //   degree: "Certified Kubernetes Administrator (CKA)",
  //   school: "Cloud Native Computing Foundation",
  //   year: "2022",
  //   desc: "Container orchestration, cluster management, networking, storage, and workload scheduling.",
  // },
  // {
  //   degree: "HashiCorp Certified: Terraform Associate",
  //   school: "HashiCorp",
  //   year: "2021",
  //   desc: "Infrastructure as code, state management, modules, and cloud provisioning at scale.",
  // },
];

export const PROFILE = {
  name: "Shailendra Jung Rana",
  title: "Junior DevOps Engineer",
  location: "Bhaktapur,Lokanthali Nepal",
  email: "shailendera.jungrana@gmail.com",
  linkedin: "https://www.linkedin.com/in/shailendra-jung-rana-aa78781a1/",
  github: "https://github.com/ShailendraJungRana",
  available: true,
};
