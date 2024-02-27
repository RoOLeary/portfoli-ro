import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Observer } from 'gsap/Observer' // Assuming gsap has this, if not you'd need to import it properly from wherever it's defined

gsap.registerPlugin(ScrollTrigger, Observer)
gsap.config({ nullTargetWarn: false })

const useGSAPScrollSlide = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [animating, setAnimating] = useState(false)

	useEffect(() => {
		const sections = gsap.utils.toArray('.slide')
		const images = gsap.utils.toArray('.image').reverse()
		const slideImages = gsap.utils.toArray('.slide__img')
		const outerWrappers = gsap.utils.toArray('.slide__outer')
		const innerWrappers = gsap.utils.toArray('.slide__inner')
		const count = document.querySelector('.count')
		const wrap = gsap.utils.wrap(0, sections.length)

		gsap.set(outerWrappers, { xPercent: 100 })
		gsap.set(innerWrappers, { xPercent: -100 })
		gsap.set('.slide:nth-of-type(1) .slide__outer', { xPercent: 0 })
		gsap.set('.slide:nth-of-type(1) .slide__inner', { xPercent: 0 })

		const gotoSection = (index: number, direction: number) => {
			setAnimating(true)
			index = wrap(index)

			const tl = gsap.timeline({
				defaults: { duration: 1, ease: 'expo.inOut' },
			})

			setAnimating(false)

			const currentSection = sections[currentIndex] as HTMLElement
			const heading = currentSection.querySelector('.slide__heading')
			const nextSection = sections[index] as HTMLElement
			const nextHeading = nextSection.querySelector('.slide__heading')

			gsap.set([sections, images], { zIndex: 0, autoAlpha: 0 })
			gsap.set([sections[currentIndex], images[index]], {
				zIndex: 1,
				autoAlpha: 1,
			})
			gsap.set([sections[index], images[currentIndex]], {
				zIndex: 2,
				autoAlpha: 1,
			})

			tl
				//  @ts-ignore
				.set(count, { text: index + 1 }, 0.32)
				.fromTo(
					// @ts-ignore
					outerWrappers[index],
					{ xPercent: 100 * direction },
					{ xPercent: 0 },
					0,
				)
				.fromTo(
					//  @ts-ignore
					innerWrappers[index],
					{ xPercent: -100 * direction },
					{ xPercent: 0 },
					0,
				)
				.to(
					heading,
					{
						'--width': 800,
						xPercent: 30 * direction,
					},
					0,
				)
				.fromTo(
					nextHeading,
					{
						'--width': 800,
						xPercent: -30 * direction,
					},
					{
						'--width': 200,
						xPercent: 0,
					},
					0,
				)
				.fromTo(
					//  @ts-ignore
					images[index],
					{
						xPercent: 125 * direction,
						scaleX: 1.5,
						scaleY: 1.3,
					},
					{ xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
					0,
				)
				.fromTo(
					//  @ts-ignore
					images[currentIndex],
					{ xPercent: 0, scaleX: 1, scaleY: 1 },
					{
						xPercent: -125 * direction,
						scaleX: 1.5,
						scaleY: 1.3,
					},
					0,
				)
				.fromTo(
					//  @ts-ignore
					slideImages[index],
					{
						scale: 2,
					},
					{ scale: 1 },
					0,
				)
				.timeScale(0.8)

			setCurrentIndex(index)
		}

		Observer.create({
			type: 'wheel,touch,pointer',
			preventDefault: true,
			wheelSpeed: -1,
			onUp: () => {
				//  console.log("down");
				if (animating) return
				gotoSection(currentIndex + 1, +1)
			},
			onDown: () => {
				//  console.log("up");
				if (animating) return
				gotoSection(currentIndex - 1, -1)
			},
			tolerance: 10,
		})

		const logKey = (e: KeyboardEvent) => {
			// /console.log(e.code);
			if ((e.code === 'ArrowUp' || e.code === 'ArrowLeft') && !animating) {
				gotoSection(currentIndex - 1, -1)
			}
			if (
				(e.code === 'ArrowDown' ||
					e.code === 'ArrowRight' ||
					e.code === 'Space' ||
					e.code === 'Enter') &&
				!animating
			) {
				gotoSection(currentIndex + 1, 1)
			}
		}
		// const logKey = (e: KeyboardEvent) => {
		//   if (e.code === "ArrowUp" || e.code === "ArrowLeft" && !animating) {
		//     gotoSection(currentIndex - 1, -1);
		//   }
		//   if ((e.code === "ArrowDown" || e.code === "ArrowRight" || e.code === "Space" || e.code === "Enter") && !animating) {
		//     gotoSection(currentIndex + 1, 1);
		//   }
		// };

		document.addEventListener('keydown', logKey)

		return () => {
			// cleanup
			document.removeEventListener('keydown', logKey)
		}
	}, [currentIndex, animating])

	return {
		currentIndex,
		animating,
	}
}

export default useGSAPScrollSlide
