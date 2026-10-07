import { useState } from 'react'
import ProjectCard from './ProjectCard.tsx'

export default function Projects() {

    const [activeProject, setActiveProject] = useState('crossword')
    const tabs = [
        {id: 'crossword', label: 'Crossword Creator'}, 
        {id: 'ranker', label: 'Ranker'}
    ]

    return(
        <>
            <nav className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={activeProject === tab.id ? 'active' : ''}
                    onClick={() => setActiveProject(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
            </nav>

            {activeProject === 'crossword' && <ProjectCard 
                title="Crossword Creator" 
                description="A tool for creating crosswords." 
                repoURL='https://github.com/Careful-Zebra/crossword_creator' 
                liveURL='https://guarded-harbor-66706-11d0f678019c.herokuapp.com/'
                imageURL='/croscreator.png'
            />}

            {activeProject === 'ranker' && <ProjectCard 
                title="Ranker" 
                description='A client-side app to rank anything any way you want. Rankings are encoded entirely in a shareable URL allowing it to host as static files' 
                liveURL='https://main.dos1qc9suga1q.amplifyapp.com/#/' 
                embedURL='https://main.dos1qc9suga1q.amplifyapp.com/#/'
            />}

        </>    
    )
}