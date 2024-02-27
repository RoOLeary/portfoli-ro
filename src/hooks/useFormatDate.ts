'use client'
import { parseISO, format } from 'date-fns'

type DateStringProps = {
	dateString?: any
}

export const useFormatDate = ({ dateString }: DateStringProps) => {
	const date = parseISO(dateString)
	console.log(date)
	//   @ts-nocheck
	//   return format(date, 'LLLL d, yyyy');
}

export default useFormatDate
