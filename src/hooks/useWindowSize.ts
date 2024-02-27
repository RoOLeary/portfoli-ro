import { useState, useEffect } from 'react'

// Define an interface for the window size object
interface WindowSize {
	width: number
	height: number
}

export const useWindowSize = (): WindowSize => {
	// Using a lazy initial state to ensure SSR compatibility
	const [windowSize, setWindowSize] = useState<WindowSize>(() => {
		// Ensure window is defined (e.g., not in SSR)
		if (typeof window !== 'undefined') {
			return {
				width: window.innerWidth,
				height: window.innerHeight,
			}
		}
		// Return a default size if window is not defined
		return {
			width: 0,
			height: 0,
		}
	})

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		window.addEventListener('resize', handleResize)

		// Cleanup function to remove the event listener
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return windowSize
}

export default useWindowSize
