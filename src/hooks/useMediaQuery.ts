import { useState, useEffect } from 'react'

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(false)

	useEffect(() => {
		// Ensure the hook runs safely in environments without `window`
		if (typeof window !== 'undefined') {
			const mediaQuery = window.matchMedia(query)

			const handleMediaQueryChange = (event: MediaQueryListEvent) => {
				setMatches(event.matches)
			}

			// Use `addEventListener` and `removeEventListener` for compatibility with modern browsers
			mediaQuery.addEventListener('change', handleMediaQueryChange)
			// Set the initial state based on the query
			setMatches(mediaQuery.matches)

			return () => {
				mediaQuery.removeEventListener('change', handleMediaQueryChange)
			}
		}
	}, [query])

	return matches
}

export default useMediaQuery
