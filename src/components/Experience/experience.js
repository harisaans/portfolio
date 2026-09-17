import React from 'react'
import './experience.css'

const timeline = [
  {
    role: 'DevOps Engineer',
    context: 'Logistics & Delivery Platform',
    period: 'Jul 2026 — Present',
    points: [
      'Manage and scale core DevOps tooling and deployment pipelines across multi-cloud environments.',
      'Architect and maintain Kubernetes clusters on AWS and GCore for high availability and performance.',
      'Led the seamless migration of MariaDB and PerconaDB workloads between cloud providers with minimal downtime.',
      'Automate configuration management and infrastructure provisioning using Ansible and IaC.',
    ],
  },
  {
    role: 'DevOps Engineer II',
    context: 'Enterprise SaaS Platform',
    period: 'Oct 2025 — Jul 2026',
    points: [
      'Architected end-to-end RBAC for the CI/CD platform, securing access for 800+ developers under strict compliance requirements.',
      'Led migration and onboarding of engineering teams to standardized deployment workflows for AI systems.',
      'Designed automated pipelines to aggregate SCM and CI/CD metrics, improving visibility into delivery performance.',
      'Configured integrations across the DevOps stack to improve tracking and engineering velocity.',
    ],
  },
  {
    role: 'Software Engineer, DevOps',
    context: 'Global IT Services',
    period: 'Jul 2022 — Oct 2025',
    points: [
      'Designed GitHub Actions pipelines integrated with Kubernetes, reducing release cycle time by 40%.',
      'Automated cloud provisioning with Terraform, cutting manual effort by 40% and enabling scalable ML environments.',
      'Managed Hadoop/Spark clusters and resolved 2,200+ incidents, ensuring data platform reliability.',
      'Built Python and Shell automation that improved workflow execution time by 50%.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience">
        <span className="sectionTag mono">{"// where I've worked"}</span>
        <span className="expTitle">Experience</span>
        <div className="timeline">
            {timeline.map((item, idx) => (
                <div className="timelineItem" key={idx}>
                    <div className="timelineMarker">
                        <span className="timelineDot"></span>
                        {idx !== timeline.length - 1 && <span className="timelineLine"></span>}
                    </div>
                    <div className="timelineCard">
                        <span className="timelinePeriod mono">{item.period}</span>
                        <h3 className="timelineRole">{item.role}</h3>
                        <span className="timelineContext">{item.context}</span>
                        <ul className="timelinePoints">
                            {item.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Experience
