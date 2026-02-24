import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Backend Development',
      skills: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'RESTful APIs', 'CakePHP','Node.js']
    },
    {
      category: 'Cybersecurity',
      skills: ['SIEM Tools', 'Burp Suite', 'Nmap', 'Secure Coding', 'Vulnerability Assessment']
    },
    {
      category: 'AI/ML Development',
      skills: ['Python', 'Streamlit', 'Computer Vision', 'Machine Learning', 'OpenAI', 'LangChain', 'Hugging Face', 'TensorFlow', 'PyTorch']
    },
    {
      category: 'Frontend & Design',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Figma', 'UI/UX Design','React','Astro','Tailwind CSS', 'WordPress', 'Divi Builder']
    },
    {
      category: 'Tools & Practices',
      skills: ['Git', 'Agile Project Management', 'Digital Marketing', 'System Administration', 'Docker', 'Kubernetes']
    }
  ]

  return (
    <div id="skills" className="skills-sidebar">
      <h3 className="skills-title">Skills</h3>
      <div className="skills-list">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h4 className="skill-category-title">{category.category}</h4>
            <div className="skill-tags">
              {category.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills

