'use client'
import { useRef, useCallback } from 'react'

// Define the hook with TypeScript
export const useFocus = () => {
	// Specify the type of ref as HTMLInputElement or null
	const ref = useRef<HTMLInputElement | null>(null)

	// No changes needed here as TypeScript can infer the types
	const focusElement = useCallback(() => {
		if (ref.current) {
			ref.current.focus()
		}
	}, [])

	// Explicitly define the return type of the hook
	return [ref, focusElement] as const
}

export default useFocus
