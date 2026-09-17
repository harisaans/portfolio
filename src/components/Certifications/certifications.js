import React from 'react'
import './certifications.css'
import { SiGooglecloud } from 'react-icons/si'
import { TbBrandAzure } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa'

const certs = [
  {
    icon: <TbBrandAzure/>,
    title: 'Azure Fundamentals',
    code: 'AZ-900',
  },
  {
    icon: <FaAws/>,
    title: 'AWS Certified Cloud Practitioner',
    code: 'AWS CCP',
  },
  {
    icon: <SiGooglecloud/>,
    title: 'Google Cloud Platform Fundamentals: Core Infrastructure',
    code: 'GCP Fundamentals',
  },
]

const Certifications = () => {
  return (
    <section id="certifications">
        <span className="sectionTag mono">{'// credentials'}</span>
        <span className="certTitle">Certifications</span>
        <div className="certGrid">
            {certs.map((cert) => (
                <div className="certCard" key={cert.code}>
                    <div className="certIcon">{cert.icon}</div>
                    <h3>{cert.title}</h3>
                    <span className="certCode mono">{cert.code}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Certifications
