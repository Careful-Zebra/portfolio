import { useEffect, useState } from 'react'

function readHash(): string[] {
    return window.location.hash.replace(/^#\/?/, '').split('/').filter(Boolean)
}

export function useHashRoute() {
    const [segments, setSegments] = useState<string[]>(readHash)

    useEffect(() => {
        const onChange = () => setSegments(readHash())
        window.addEventListener('hashchange', onChange)
        return () => window.removeEventListener('hashchange', onChange)
    }, [])

    const navigate = (...parts: string[]) => {
        window.location.hash = '/' + parts.join('/')
    }

    return { segments, navigate }
}