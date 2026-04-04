import React from 'react';
import { Github, Linkedin, Mail, Code2, Brain, Database } from 'lucide-react';
import Header from './components/Header';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  const skills = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      title: "Frontend Development",
      items: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "Backend Development",
      items: ["Node.js", "Express.js", "MongoDB", "SQL"]
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: "Other Skills",
      items: ["Git", "Docker", "AWS", "Problem Solving"]
    }
  ];

  const projects = [
    {
      title: "F1-Inspired Streetwear",
      description: "A modern streetwear website inspired by Formula 1 aesthetics, showcasing fashion collections with a clean and visually engaging UI. Designed to deliver a smooth and responsive browsing experience.",
      tags: ["React","Tailwind CSS", "Node.js", "MongoDB", "Express"],
      link: "https://f1streatwer.netlify.app/login"
    },
    {
      title: "Points Leaderboard System",
      description: "A dynamic leaderboard application that allows users to submit scores and view real-time rankings. Built with React and integrated with APIs for seamless data updates.",
      tags: ["React", "REST API", "Tailwind CSS"],
      link: "https://leaderboard-frontend-1vsi.onrender.com/"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts using external APIs. Features include location search and weather alerts.",
      tags: ["React", "REST API", "Chart.js"],
      link: "#"
    }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Devvrat Sahu
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            A passionate React Developer and B.Tech Computer Science graduate.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/DevvratSahu07" target="_blank" rel="noopener noreferrer" 
               className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/devvrat-sahu-755671235" target="_blank" rel="noopener noreferrer"
               className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section title="About Me" id="about">
        <p className="text-lg text-gray-600 leading-relaxed">
          I’m a B.Tech Computer Science graduate with 6 months of experience in frontend development. I specialize in React.js and enjoy building responsive, user-friendly web applications. I’m passionate about creating clean UI and continuously improving my skills.
        </p>
      </Section>

      {/* Skills Section */}
      <Section title="Skills" id="skills" className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Projects" id="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Contact" id="contact" className="bg-white">
        <div className="flex flex-col items-center text-center">
          <p className="text-lg text-gray-600 mb-6">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          <div className="flex gap-4">
            <a href="mailto:devvratsahu223@gmail.com" 
               className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/devvrat-sahu-755671235" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors">
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p>© 2026 Devvrat Sahu. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </ThemeProvider>
  );
}

export default App;