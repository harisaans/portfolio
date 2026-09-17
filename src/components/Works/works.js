import React from 'react'
import './works.css'
import { FaServer, FaDatabase, FaLock, FaChartBar, FaRobot, FaCogs } from 'react-icons/fa'

const projects = [
  {
    icon: <FaServer/>,
    title: 'Multi-Cloud Kubernetes Platform',
    desc: 'Designed and maintained Kubernetes clusters spanning AWS and GCore, standardizing deployments for high availability and consistent performance.',
    tags: ['Kubernetes', 'AWS', 'GCore', 'Helm'],
  },
  {
    icon: <FaDatabase/>,
    title: 'Zero-Downtime Database Migration',
    desc: 'Orchestrated the migration of MariaDB and PerconaDB workloads across cloud providers with minimal service interruption.',
    tags: ['MariaDB', 'PerconaDB', 'Migration'],
  },
  {
    icon: <FaLock/>,
    title: 'Enterprise RBAC & Access Governance',
    desc: 'Architected end-to-end role-based access control for a CI/CD platform, securing access for 800+ developers while meeting compliance requirements.',
    tags: ['RBAC', 'Compliance', 'Security'],
  },
  {
    icon: <FaChartBar/>,
    title: 'Delivery Metrics Pipeline',
    desc: 'Built automated pipelines that aggregate SCM and CI/CD metrics into a single view, improving visibility into delivery performance and system health.',
    tags: ['GitHub Actions', 'Observability'],
  },
  {
    icon: <FaCogs/>,
    title: 'Infrastructure as Code Rollout',
    desc: 'Automated cloud provisioning with Terraform and Ansible, cutting manual provisioning effort and enabling scalable, repeatable environments.',
    tags: ['Terraform', 'Ansible', 'IaC'],
  },
  {
    icon: <FaRobot/>,
    title: 'GenAI Productionization',
    desc: 'Applying container orchestration and SRE practices to GPU workloads and high-availability AI agent deployment using Amazon Bedrock and Agentcore.',
    tags: ['Amazon Bedrock', 'Agentcore', 'MLOps'],
  },
]

const Works = () => {
  return (
    <section id="works">
        <span className="sectionTag mono">{'// selected work'}</span>
        <h2 className="worksTitle">Projects &amp; Impact</h2>
        <span className="worksDescription">
            A snapshot of the infrastructure, automation and reliability work I've led — from
            multi-cloud Kubernetes to GenAI productionization.
        </span>
        <div className="workImages">
            {projects.map((project) => (
                <div className="workCard" key={project.title}>
                    <div className="workIcon">{project.icon}</div>
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="workTags">
                        {project.tags.map((tag) => (
                            <span className="workTag mono" key={tag}>{tag}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Works
