import Hero from './components/Hero.tsx'
import './App.css'
import Contact from './components/Contact.tsx'
import Resume from './components/Resume.tsx'
import ProjectCard from './components/ProjectCard.tsx'
import { useState } from 'react'

function App() {

    const [activeTab, setActiveTab] = useState('resume')
    const tabs = [
        {id: 'resume', label:'Resume'}, 
        {id: 'crossword', label: 'Crossword Creator'}, 
        {id: 'ranker', label: 'Ranker'}, 
        {id: 'contact', label: 'Contact'}
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
          {activeTab === 'crossword' && <ProjectCard 
            title="Crossword Creator" 
            description="A tool for creating crosswords." 
            repoURL='https://github.com/Careful-Zebra/crossword_creator' 
            liveURL='https://guarded-harbor-66706-11d0f678019c.herokuapp.com/'
            imageURL='/croscreator.png'
            />}
          {activeTab === 'ranker' && <ProjectCard 
            title="Ranker" 
            description='A client-side app to rank anything any way you want. Rankings are encoded entirely in a shareable URL allowing it to host as static files' 
            liveURL='https://main.dos1qc9suga1q.amplifyapp.com/#/' 
            embedURL='https://main.dos1qc9suga1q.amplifyapp.com/#/'
            />}
          {activeTab === 'contact' && <Contact />}
      
    </>
  )
}

export default App
