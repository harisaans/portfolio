import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <span className="mono">© {new Date().getFullYear()} Mohd Haris Ansari — Built with React</span>
    </footer>
  )
}

export default Footer
