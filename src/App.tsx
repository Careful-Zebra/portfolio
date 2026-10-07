import Hero from './components/Hero.tsx'
import './App.css'
import Resume from './components/Resume.tsx'
import Projects from './components/Projects.tsx'
import type { CSSProperties } from 'react'
import { useHashRoute } from './hooks/useHashRoute.ts'

function App() {

    const { segments, navigate } = useHashRoute()
    const tabs = [
        {id: 'about', label: 'About'},
        {id: 'projects', label: 'Projects'}
    ]
    const activeTab = tabs.find(t => t.id === segments[0])?.id ?? 'about'
    const activeIndex = tabs.findIndex(t => t.id === activeTab)

  return (
      <>
          <Hero />
          <nav className="tabs" style={{ '--active-index': activeIndex, '--tab-count': tabs.length } as CSSProperties}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={activeTab === tab.id ? 'active' : ''}
                    onClick={() => navigate(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
          </nav>

          {activeTab === 'about' && <Resume />}

          {activeTab === 'projects' && (
              <Projects
                  selected={segments[1]}
                  onSelect={(id) => navigate('projects', id)}
              />
          )}
    </>
  )
}

export default App