import './Hero.css'

export default function Hero() {
    return(
        <section className="hero">
            <h1>Viktor Mooren</h1>
            <p>Software engineer. I studied computer science and philosophy at UC Berkeley.</p>
            <p>
                <a href="mailto:viktorm@berkeley.edu">Email</a> ·{' '}
                <a href="https://github.com/Careful-Zebra" target="_blank" rel="noopener noreferrer">GitHub</a> ·{' '}
                <a href="https://www.linkedin.com/in/viktor-mooren/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
        </section>
    )
}