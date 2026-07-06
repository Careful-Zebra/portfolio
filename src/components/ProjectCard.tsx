import './ProjectCard.css'

type ProjectCardProps = {
    title: string
    description: string
    liveURL?: string
    repoURL: string
}

export default function ProjectCard({ title, description, liveURL, repoURL}: ProjectCardProps) {

    return(
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul className="project-links">
                {liveURL && <li><a href={ liveURL } target="_blank" rel="noopener noreferrer">Live URL</a></li>}
                <li><a href={ repoURL } target="_blank" rel="noopener noreferrer">Github URL</a></li>
            </ul>
            
            
        </section>
    )

}