export function downloadCV() {
  const cvContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Oladepo Rokeeb Olayinka - CV</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1a1a2e; max-width: 800px; margin: 0 auto; padding: 40px; }
    h1 { color: #4f46e5; font-size: 28px; margin-bottom: 5px; }
    h2 { color: #4f46e5; font-size: 18px; border-bottom: 2px solid #4f46e5; padding-bottom: 5px; margin: 25px 0 15px; }
    h3 { color: #1a1a2e; font-size: 16px; margin: 15px 0 5px; }
    .contact { color: #4a5568; font-size: 14px; margin-bottom: 20px; }
    .contact a { color: #4f46e5; text-decoration: none; }
    .section { margin-bottom: 20px; }
    ul { margin-left: 20px; margin-bottom: 15px; }
    li { margin-bottom: 5px; font-size: 14px; }
    .skills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 15px; }
    .skill-category { width: 100%; margin-bottom: 10px; }
    .skill-category strong { color: #4f46e5; display: block; margin-bottom: 5px; font-size: 14px; }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 5px; }
    .skill-tag { background: #eef2ff; color: #4f46e5; padding: 3px 8px; border-radius: 4px; font-size: 12px; }
    .project { margin-bottom: 15px; }
    .project-tech { color: #4f46e5; font-size: 13px; font-style: italic; }
    .highlight { font-weight: 600; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <h1>OLADEPO ROKEEB OLAYINKA</h1>
  <div class="contact">
    Lagos, Nigeria (Open to Remote Work Worldwide)<br>
    oladeporokeeb203@gmail.com | +2349011105681 (WhatsApp)<br>
    Portfolio: # | GitHub: https://github.com/Alphcast | Fiverr: # | LinkedIn: #
  </div>

  <h2>PROFESSIONAL SUMMARY</h2>
  <div class="section">
    <p>Frontend-Focused Full-Stack Software Engineer with <span class="highlight">4+ years of experience in frontend development</span> and <span class="highlight">2+ years in full-stack engineering</span>, building scalable, high-performance web applications.</p>
    <p>Proficient in modern JavaScript ecosystems including React, TypeScript, and TanStack, with hands-on experience delivering production-ready applications for global clients. Strong foundation in Pure Mathematics, bringing advanced analytical thinking and problem-solving skills to software development.</p>
    <p>Seeking a <span class="highlight">remote Frontend or Full-Stack Engineer role</span> where I can contribute to building impactful, user-focused digital products.</p>
  </div>

  <h2>TECHNICAL SKILLS</h2>
  <div class="skills">
    <div class="skill-category">
      <strong>Frontend (Primary Strength):</strong>
      <div class="skill-tags">
        <span class="skill-tag">React.js</span><span class="skill-tag">TypeScript</span><span class="skill-tag">JavaScript (ES6+)</span><span class="skill-tag">HTML5</span><span class="skill-tag">CSS3</span><span class="skill-tag">Tailwind CSS</span><span class="skill-tag">TanStack Router</span><span class="skill-tag">TanStack Query</span>
      </div>
    </div>
    <div class="skill-category">
      <strong>Backend:</strong>
      <div class="skill-tags">
        <span class="skill-tag">Node.js</span><span class="skill-tag">Express.js</span><span class="skill-tag">REST API Development</span>
      </div>
    </div>
    <div class="skill-category">
      <strong>Databases:</strong>
      <div class="skill-tags">
        <span class="skill-tag">MongoDB (MERN)</span><span class="skill-tag">PostgreSQL (PERN)</span>
      </div>
    </div>
    <div class="skill-category">
      <strong>Tools & Technologies:</strong>
      <div class="skill-tags">
        <span class="skill-tag">Git</span><span class="skill-tag">GitHub</span><span class="skill-tag">Vercel</span><span class="skill-tag">Netlify</span><span class="skill-tag">Firebase</span><span class="skill-tag">API Integration</span><span class="skill-tag">Responsive Design</span>
      </div>
    </div>
    <div class="skill-category">
      <strong>Other Competencies:</strong>
      <div class="skill-tags">
        <span class="skill-tag">Performance Optimization</span><span class="skill-tag">Debugging</span><span class="skill-tag">Clean Code Architecture</span><span class="skill-tag">Cross-Browser Compatibility</span>
      </div>
    </div>
  </div>

  <h2>PROFESSIONAL EXPERIENCE</h2>
  <div class="section">
    <h3>Freelance Software Engineer (Frontend & Full-Stack)</h3>
    <p style="color: #4a5568; font-size: 14px; margin-bottom: 10px;">Fiverr — Remote | 2022 – Present</p>
    <ul>
      <li>Delivered <span class="highlight">50+ web development projects</span> to international clients across multiple industries</li>
      <li>Specialized in <span class="highlight">frontend development</span>, building responsive and user-friendly interfaces using React, TypeScript, and Tailwind CSS</li>
      <li>Developed <span class="highlight">full-stack applications</span> using MERN and PERN stacks with secure backend APIs</li>
      <li>Integrated third-party APIs and payment systems (e.g., Paystack)</li>
      <li>Improved application performance and optimized load times by up to <span class="highlight">40%</span></li>
      <li>Maintained strong client satisfaction with consistent <span class="highlight">5-star ratings</span></li>
    </ul>
  </div>

  <h2>PROJECTS</h2>
  <div class="section">
    <div class="project">
      <h3>AI Document & Research Platform</h3>
      <ul>
        <li>Developed a full-stack web application for document upload, editing, and AI-powered analysis</li>
        <li>Implemented clean frontend architecture with responsive UI</li>
        <li>Built backend APIs for file handling and data processing</li>
      </ul>
      <p class="project-tech">Tech: React, TypeScript, Node.js, Express, MongoDB</p>
    </div>
    <div class="project">
      <h3>PrintPress – SaaS Printing Service Platform</h3>
      <ul>
        <li>Designed and developed a scalable platform for managing online printing services</li>
        <li>Integrated secure payment system and order management features</li>
        <li>Focused on performance, usability, and clean UI design</li>
      </ul>
      <p class="project-tech">Tech: React, TypeScript, Express.js, Paystack</p>
    </div>
    <div class="project">
      <h3>AI CBT Practice Platform (Nigeria Curriculum)</h3>
      <ul>
        <li>Built an AI-powered exam system with auto-grading and performance tracking</li>
        <li>Developed dynamic frontend interfaces for real-time interaction</li>
        <li>Integrated AI APIs for generating questions and solutions</li>
      </ul>
      <p class="project-tech">Tech: React, Node.js, OpenAI API</p>
    </div>
    <div class="project">
      <h3>Alphcast Collection (E-commerce Website)</h3>
      <ul>
        <li>Created a responsive e-commerce website with modern UI and animations</li>
        <li>Implemented interactive product display and smooth navigation</li>
        <li>Focused on frontend performance and user experience</li>
      </ul>
      <p class="project-tech">Tech: HTML, CSS, JavaScript, Tailwind</p>
    </div>
  </div>

  <h2>EDUCATION</h2>
  <div class="section">
    <h3>B.Sc. Pure Mathematics</h3>
    <p style="color: #4a5568; font-size: 14px;">Tai Solarin University of Education, Nigeria</p>
  </div>

  <h2>KEY ACHIEVEMENTS</h2>
  <div class="section">
    <ul>
      <li>Successfully completed <span class="highlight">50+ freelance projects</span> for global clients</li>
      <li>Built multiple <span class="highlight">production-ready full-stack applications</span></li>
      <li>Developed strong expertise in <span class="highlight">modern frontend technologies (React + TanStack)</span></li>
      <li>Proven ability to work independently in <span class="highlight">remote environments</span></li>
    </ul>
  </div>

  <h2>WHY HIRE ME</h2>
  <div class="section">
    <ul>
      <li><span class="highlight">4+ years frontend expertise</span> (UI, UX, performance-focused development)</li>
      <li><span class="highlight">2+ years full-stack experience</span> (API design, database integration)</li>
      <li>Strong analytical thinking from Mathematics background</li>
      <li>Proven track record with international clients</li>
      <li>Clean, scalable, and maintainable code practices</li>
      <li>Reliable and efficient in remote work environments</li>
    </ul>
  </div>

  <h2>ADDITIONAL INFORMATION</h2>
  <div class="section">
    <ul>
      <li>Available for <span class="highlight">remote roles (full-time, contract, freelance)</span></li>
      <li>Flexible with time zones</li>
      <li>Open to collaboration on innovative and impactful projects</li>
    </ul>
  </div>
</body>
</html>
  `

  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(cvContent)
    printWindow.document.close()
    printWindow.focus()
    setTimeout(() => {
      printWindow.print()
    }, 250)
  }
}
