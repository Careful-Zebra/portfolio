import './Resume.css'

export default function Resume() {

    return(
        <>
            <p>I'm a software engineer and recent UC Berkeley graduate (B.A. Computer Science, minor in Philosophy, 2026). I like building tools that people actually use: a daily football guessing game live at ovrdle.com, a ranking app that fits an entire ranking into a shareable link, and a shift scheduler that cut schedule-building time by a third for my team at the Student Union. Along the way I taught Unity in Berkeley's Game Design DeCal and led a large student staff at the Student Union, which taught me as much about communication as about code. I'm looking for a full-time software engineering role where I can ship things that matter to real users, and write code that puts a smile on people's faces.</p>
            <iframe className="resume-frame" src="/resume.pdf" width="100%" height="800px" title="Viktor Mooren resume" />
            <a className="resume-download" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download PDF</a>
        </>
    )
}
