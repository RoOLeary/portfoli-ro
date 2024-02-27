import React, { useState, useEffect } from 'react'

// Define a generic type for the hook that allows specifying the type of the initialValue
export const useLocalStorage = <T>(
	key: string,
	initialValue: T,
): [T, (value: T | ((val: T) => T)) => void] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = window.localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		} catch (error) {
			console.error(error)
			return initialValue
		}
	})

	// Define setValue as a function that accepts either a value of type T or a function that returns type T
	const setValue = (value: T | ((val: T) => T)) => {
		try {
			// Determine whether value is a function and call it if so, otherwise use value directly
			const valueToStore = value instanceof Function ? value(storedValue) : value
			setStoredValue(valueToStore)
			window.localStorage.setItem(key, JSON.stringify(valueToStore))
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		const handleStorageChange = () => {
			try {
				const item = window.localStorage.getItem(key)
				setStoredValue(item ? JSON.parse(item) : initialValue)
			} catch (error) {
				console.error(error)
			}
		}

		window.addEventListener('storage', handleStorageChange)

		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	}, [key, initialValue])

	return [storedValue, setValue]
}

export default useLocalStorage
