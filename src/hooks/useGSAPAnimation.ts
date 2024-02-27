// @ts-nocheck
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({ nullTargetWarn: false })

const useGSAPAnimation = () => {
	const loaderRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const images = gsap.utils.toArray('img.gsapGallery')
		const loader = loaderRef.current

		const updateProgress = (instance: any) => {
			if (loader) {
				loader.textContent = `${Math.round((instance.progressedCount * 100) / images.length)}%`
			}
		}

		const showDemo = () => {
			document.body.style.overflow = 'auto'
			document.scrollingElement?.scrollTo(0, 0)
			gsap.to(loader, { autoAlpha: 0 })

			gsap.utils.toArray('section').forEach((section, index) => {
				const w = section.querySelector('.wrapper')
					? section.querySelector('.wrapper')
					: window.innerWidth
				const [x, xEnd] =
					index % 2
						? ['100%', (w.scrollWidth - section.offsetWidth) * -1]
						: [[w.scrollWidth] * -1, 0]

				gsap.fromTo(
					w,
					{ x },
					{
						x: xEnd,
						scrollTrigger: {
							trigger: section,
							scrub: 0.5,
						},
					},
				)
			})
		}

		const imgLoader = imagesLoaded(images)
		imgLoader.on('progress', updateProgress).on('always', showDemo)

		return () => {
			imgLoader.off('progress', updateProgress).off('always', showDemo)
		}
	}, [])

	return {
		loaderRef,
	}
}

export default useGSAPAnimation
