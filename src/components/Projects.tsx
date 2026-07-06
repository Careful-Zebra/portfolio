import ProjectCard from "./ProjectCard"

export default function Projects() {

    return(

    <section id="projects">
        <ProjectCard title="Crossword Creator" description="A Django-based web app that lets you create and share crosswords" liveURL="https://guarded-harbor-66706-11d0f678019c.herokuapp.com/" repoURL='https://github.com/Careful-Zebra/crossword_creator' />

        <ProjectCard 
            title="Shift Manager" 
            description="A Django-based web app used to allow a 60+ workforce sign up for the specific shifts they want, complete with transaction locking and other database features"
            repoURL="https://github.com/Careful-Zebra/shift_manager"
        />

    </section>

    )
    
}