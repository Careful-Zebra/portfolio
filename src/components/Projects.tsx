import type { CSSProperties } from 'react'
import ProjectCard from './ProjectCard.tsx'

type ProjectsProps = {
    selected?: string
    onSelect: (id: string) => void
}

export default function Projects({ selected, onSelect }: ProjectsProps) {

    const tabs = [
        {id: 'ovrdle', label: 'OVRdle'},
        {id: 'shift-manager', label: 'Shift Manager'},
        {id: 'crossword', label: 'Crossword Creator'},
        {id: 'ranker', label: 'Ranker'}
    ]
    const activeProject = tabs.find(t => t.id === selected)?.id ?? tabs[0].id
    const activeIndex = tabs.findIndex(t => t.id === activeProject)

    return(
        <>
            <nav className="tabs" style={{ '--active-index': activeIndex, '--tab-count': tabs.length } as CSSProperties}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={activeProject === tab.id ? 'active' : ''}
                    onClick={() => onSelect(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
            </nav>

            {activeProject === 'crossword' && <ProjectCard 
                title="Crossword Creator" 
                description={`A web app for building custom crosswords. Enter a title and a list of words with clues, and Crossword Creator arranges the words into an interlocking grid and generates a shareable code, allowing any user to solve it under timed conditions. The grid layout uses a backtracking algorithm with CSS Grid.

                Stack: Django, PostgreSQL, Heroku`}
                repoURL='https://github.com/Careful-Zebra/crossword_creator' 
                liveURL='https://guarded-harbor-66706-11d0f678019c.herokuapp.com/'
                imageURL='/croscreator.png'
            />}

            {activeProject === 'ovrdle' && <ProjectCard 
                title="OVRdle" 
                description={`A daily football guessing game at ovrdle.com. Each day, OVRdle shows five footballers, one from each of the last five EA FC editions, and players guess each one's overall rating in that edition. Every miss gets a higher or lower hint, with three tries per player. A practice mode offers unlimited rounds, and a spoiler-free emoji grid makes results easy to share.

                I built it in vanilla JavaScript, HTML, and CSS with no dependencies. Node.js scripts handle data validation and photo sourcing from Wikimedia Commons, and the site deploys continuously from GitHub to AWS Amplify, with the domain registered through Route 53.

                Stack: JavaScript, HTML, CSS, Node.js, AWS Amplify, Route 53`}
                liveURL='https://ovrdle.com'
                embedURL='https://ovrdle.com'
            />}

            {activeProject === 'ranker' && <ProjectCard 
                title="Ranker" 
                description={`Rank anything, any way you want, and share it with a link. Ranker offers six ways to rank a set of items: a 1 to 10 scale, an ordered list, a tier list, weighted pie, head-to-head matchups, and a two-axis grid. There's no backend: each ranking is compressed into the URL with lz-string, so sharing a ranking is just sharing a link, and friends can rank the same items and compare results. Saved rankings live in localStorage.

                Stack: React 18, Vite, React Router, lz-string, AWS Amplify with CI/CD from GitHub`}
                liveURL='https://main.dos1qc9suga1q.amplifyapp.com/#/' 
                embedURL='https://main.dos1qc9suga1q.amplifyapp.com/#/'
            />}

            {activeProject === 'shift-manager' && <ProjectCard 
                title="Shift Manager" 
                description={`An internal scheduling tool for the UC Berkeley Student Union. Scheduling used to run on paper unavailability forms and rules of thumb. I built a Python tool that uses staff availability and open shifts to draft schedules and present them in an easy-to-understand format, cutting the time it takes to build the schedule by 33%. I built it solo while iterating on constant feedback from the team, then spent a week adding a Django frontend so less technical colleagues could run it themselves. It's used by me and four other student specialists.

                Because it handles sensitive staff data, the code and a live demo can't be public.

                Stack: Python, Django, Heroku`}
                
            />}

        </>    
    )
}