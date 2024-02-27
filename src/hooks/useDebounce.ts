import React, { useState, useEffect } from 'react'

// Use a generic type T to allow any type of value
export const useDebounce = <T>(value: T, delay: number): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)

		// Cleanup function to clear the timeout
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}

export default useDebounce
