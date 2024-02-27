import React, { useState, useEffect } from 'react'

export const useFormUpdate = (): (() => void) => {
	const [isFormUpdated, setIsFormUpdated] = useState(false)

	useEffect(() => {
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			if (isFormUpdated) {
				const message = 'You have unsaved changes. Are you sure you want to leave?'
				event.returnValue = message // For legacy browsers
				return message
			}
		}

		window.addEventListener('beforeunload', handleBeforeUnload)

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload)
		}
	}, [isFormUpdated])

	const handleFormUpdate = () => {
		setIsFormUpdated(true)
	}

	useEffect(() => {
		// Use a more specific type for formElements if necessary
		const formElements = document.querySelectorAll<HTMLFormElement>(
			'form input, form select, form textarea',
		)

		const handleFieldChange = () => {
			setIsFormUpdated(true)
			//   console.log('Form Updated')
		}

		formElements.forEach(element => {
			element.addEventListener('change', handleFieldChange)
		})

		return () => {
			formElements.forEach(element => {
				element.removeEventListener('change', handleFieldChange)
			})
		}
	}, [])

	return handleFormUpdate
}

export default useFormUpdate
