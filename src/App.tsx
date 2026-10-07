import Hero from './components/Hero.tsx'
import './App.css'
import Contact from './components/Contact.tsx'
import Resume from './components/Resume.tsx'
import Projects from './components/Projects.tsx'
import { useState } from 'react'

function App() {

    const [activeTab, setActiveTab] = useState('resume')
    const tabs = [
        {id: 'resume', label:'Resume'}, 
        {id: 'contact', label: 'Contact'}, 
        {id: 'projects', label: 'Projects'}
    ]

    
  return (
      <>
          <Hero />
          <nav className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={activeTab === tab.id ? 'active' : ''}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
          </nav>
          
          {activeTab === 'resume' && <Resume />}

          {activeTab === 'projects' && <Projects />}

          {activeTab === 'contact' && <Contact />}
      
    </>
  )
}

export default App
