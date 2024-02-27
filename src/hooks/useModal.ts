'use client'
import { useState, useCallback } from 'react'

interface ModalState<T> {
	isVisible: boolean
	data?: T
}

export const useModal = <T>() => {
	const [modalState, setModalState] = useState<ModalState<T>>({
		isVisible: false,
	})

	const openModal = useCallback((data: T) => {
		setModalState({
			isVisible: true,
			data,
		})
	}, [])

	const closeModal = useCallback(() => {
		setModalState({
			isVisible: false,
		})
	}, [])

	return {
		isVisible: modalState.isVisible,
		data: modalState.data,
		openModal,
		closeModal,
	}
}
