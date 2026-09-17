import React from 'react'
import './skills.css'
import { FaCloud, FaDocker, FaShieldAlt, FaCode, FaChartLine, FaRobot } from 'react-icons/fa'

const skillGroups = [
  {
    icon: <FaCloud/>,
    title: 'Cloud & Infrastructure',
    desc: 'AWS, Azure (VNets) and GCore across hybrid cloud environments, designed for high availability and cost efficiency.',
    tags: ['AWS', 'Azure', 'GCore', 'Hybrid Cloud'],
  },
  {
    icon: <FaDocker/>,
    title: 'Containers & Orchestration',
    desc: 'Kubernetes (EKS/AKS) at production scale, with Docker and Helm for packaging and repeatable deployments.',
    tags: ['Kubernetes', 'Docker', 'Helm', 'EKS/AKS'],
  },
  {
    icon: <FaCode/>,
    title: 'IaC & Configuration Management',
    desc: 'Terraform and Ansible to provision infrastructure and automate routine operational workflows.',
    tags: ['Terraform', 'Ansible', 'Python', 'Bash'],
  },
  {
    icon: <FaChartLine/>,
    title: 'CI/CD & Delivery',
    desc: 'Building automated pipelines that cut release cycle time and improve visibility into delivery performance.',
    tags: ['GitHub Actions', 'Jenkins', 'Harness'],
  },
  {
    icon: <FaShieldAlt/>,
    title: 'Security & Observability',
    desc: 'End-to-end RBAC, least-privilege access, encryption at rest/in transit, plus Prometheus and Grafana for monitoring.',
    tags: ['RBAC', 'Prometheus', 'Grafana', 'Encryption'],
  },
  {
    icon: <FaRobot/>,
    title: 'MLOps & GenAI',
    desc: 'Applying SRE and container orchestration principles to GPU workloads, AI agent deployment and GenAI productionization.',
    tags: ['Amazon Bedrock', 'Agentcore', 'GPU Workloads'],
  },
]

const Skills = () => {
  return (
    <section id="skills">
        <span className="sectionTag mono">{'// what I work with'}</span>
        <span className="skillTitle">Skills &amp; Toolchain</span>
        <span className="skillDescription">
            Four+ years automating cloud infrastructure and securing enterprise platforms — now extending
            that foundation into MLOps and GenAI productionization.
        </span>
        <div className="skillBars">
            {skillGroups.map((group) => (
                <div className="skillBar" key={group.title}>
                    <div className="skillIcon">{group.icon}</div>
                    <div className="skillBarText">
                        <h2>{group.title}</h2>
                        <p>{group.desc}</p>
                        <div className="skillTags">
                            {group.tags.map((tag) => (
                                <span className="skillTag mono" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Skills;
