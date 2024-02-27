import React, { useState, useEffect } from 'react'

// Define a generic type for the hook to allow specifying the type of data expected
export const useFetch = <T>(
	url: string,
): { data: T | null; loading: boolean; error: Error | null } => {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<Error | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url)
				if (!response.ok) {
					throw new Error('Network response was not ok')
				}
				const result: T = await response.json()
				setData(result)
			} catch (error) {
				setError(error as Error)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [url])

	return { data, loading, error }
}

export default useFetch
