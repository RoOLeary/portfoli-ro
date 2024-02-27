'use client'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({ nullTargetWarn: false })

export const useParallaxHero = () => {
	const mainRef = useRef<HTMLElement>(null)
	const scrollDistRef = useRef<HTMLElement>(null)

	useEffect(() => {
		if (mainRef.current && scrollDistRef.current) {
			gsap.set(mainRef.current, {
				position: 'fixed',
				background: '#fff',
				width: '100%',
				height: '100%',
				top: 0,
				left: '50%',
				x: '-50%',
			})

			gsap.set(scrollDistRef.current, {
				width: '100%',
				height: '250%',
			})

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: scrollDistRef.current,
					start: 'top top',
					end: 'bottom bottom',
					scrub: 1,
				},
			})

			tl.fromTo('.sky', { y: 0 }, { y: -200 }, 0)
				.fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
				.fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
				.fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
				.fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
				.fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
				.fromTo('.mountFg', { y: -50 }, { y: -600 }, 0)
		}

		return () => {
			let currentPos = scrollDistRef
			if (currentPos.current) {
				const stInstance = ScrollTrigger.getById(currentPos.current.id)
				if (stInstance) {
					stInstance.kill()
				}
			}
		}
	}, [])

	return { mainRef, scrollDistRef }
}

export default useParallaxHero
