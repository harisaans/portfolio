import React from 'react'
import './intro.css'
import { Link } from 'react-scroll';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="badge mono">● Available for new opportunities</span>
            <span className="introText">Hi, I'm <span className="introName">Haris</span><br/>DevOps Engineer</span>
            <p className="introPara">
                I build and scale cloud-native infrastructure — Kubernetes, Infrastructure as Code and
                automated CI/CD pipelines — and I'm bringing that foundation into MLOps: high-availability
                AI agent deployment and productionizing GenAI workloads.
            </p>
            <div className="introBtns">
                <Link to="works" spy={true} smooth={true} offset={-50} duration={500} className="btn primaryBtn">
                    View Projects <FiArrowRight/>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="btn secondaryBtn">
                    Get in Touch <FiMail/>
                </Link>
            </div>
            <div className="introStats">
                <div className="statItem">
                    <span className="statNum mono">4+</span>
                    <span className="statLabel">Years in DevOps &amp; SRE</span>
                </div>
                <div className="statItem">
                    <span className="statNum mono">800+</span>
                    <span className="statLabel">Devs onboarded to secure RBAC</span>
                </div>
                <div className="statItem">
                    <span className="statNum mono">2700+</span>
                    <span className="statLabel">Incidents resolved</span>
                </div>
            </div>
        </div>
        <div className="introVisual">
            <div className="terminalCard">
                <div className="terminalHeader">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="terminalTitle mono">whoami.sh</span>
                </div>
                <div className="terminalBody mono">
                    <p><span className="prompt">$</span> kubectl get engineer --focus</p>
                    <p className="out">NAME    ROLE            STATUS</p>
                    <p className="out">haris   devops-engineer Running</p>
                    <p><span className="prompt">$</span> cat stack.yaml</p>
                    <p className="out">cloud: [aws, azure, gcore]</p>
                    <p className="out">orchestration: [kubernetes, docker, helm]</p>
                    <p className="out">iac: [terraform, ansible]</p>
                    <p className="out">cicd: [github-actions, jenkins, harness]</p>
                    <p className="out">mlops: [bedrock, agentcore]</p>
                    <p><span className="prompt">$</span> <span className="cursor">▌</span></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro
