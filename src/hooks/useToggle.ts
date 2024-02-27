import React, { useState } from 'react'

// Specify the type of the defaultValue parameter and the return type of the hook
export const useToggle = (defaultValue: boolean): [boolean, (value?: boolean) => void] => {
	const [value, setValue] = useState<boolean>(defaultValue)

	// Optionally accept a boolean value to set it directly
	const toggleValue = (value?: boolean) => {
		setValue(currentValue => (typeof value === 'boolean' ? value : !currentValue))
	}

	return [value, toggleValue]
}

export default useToggle
