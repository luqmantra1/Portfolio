import './PortfolioSkills.css'

const PortfolioSkills = () => {
  const skillCategories = [
    {
      category: 'Backend',
      skills: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'RESTful APIs'],
      color: '#FF6B35'
    },
    {
      category: 'Cybersecurity',
      skills: ['SIEM Tools', 'Burp Suite', 'Nmap', 'Secure Coding'],
      color: '#4ECDC4'
    },
    {
      category: 'AI/ML',
      skills: ['Python', 'Streamlit', 'Computer Vision', 'Machine Learning'],
      color: '#FF6B35'
    },
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design'],
      color: '#4ECDC4'
    }
  ]

  // return (
  //   <section id="skills" className="portfolio-skills">
  //     <div className="skills-container">
  //       <div className="section-header">
  //         <span className="section-number">04</span>
  //         <h2 className="section-title">
  //           My <span className="highlight">Skills</span>
  //         </h2>
  //       </div>
  //       <div className="skills-grid">
  //         {skillCategories.map((category, index) => (
  //           <div 
  //             key={index} 
  //             className="skill-category-card"
  //             style={{ animationDelay: `${index * 0.1}s` }}
  //           >
  //             <h3 className="category-title" style={{ color: category.color }}>
  //               {category.category}
  //             </h3>
  //             <div className="skills-list">
  //               {category.skills.map((skill, idx) => (
  //                 <span 
  //                   key={idx} 
  //                   className="skill-item"
  //                   style={{ 
  //                     '--skill-color': category.color,
  //                     animationDelay: `${(index * 0.1) + (idx * 0.05)}s`
  //                   }}
  //                 >
  //                   {skill}
  //                 </span>
  //               ))}
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default PortfolioSkills

