import './Slide.css'
import {useEffect, useState} from 'react'

// TODO сделать фотку черно белой через  цсс , (фильтры)
const image = [
	['src/Art/imgBW/tomatoBW.png', 'src/Art/img/tomato.png', 'red'],
	['src/Art/imgBW/cucumberBW.png', 'src/Art/img/cucumber.png', 'green'],
	['src/Art/imgBW/sunBW.png', 'src/Art/img/sun.png', 'yellow'],
]

export function Slide({answer, conditionModal}) {
	const [picture, setPicture] = useState(0)
	const [pictureBW, setPictureBW] = useState(0)
	const currentImage = image[picture][pictureBW]

	useEffect(() => {
		let time = undefined

		if (picture >= image.length - 1) {
			setPictureBW(1)
			time = setTimeout(() => {
				conditionModal(true)
			}, 1000)
		} else {
			if (answer === image[picture][2]) {
				setPictureBW(1)
				time = setTimeout(() => {
					setPictureBW(0)
					setPicture((prevState) => {
						return prevState += 1
					})
				}, 2000)
			}
		}

		return () => {
			clearTimeout(time)
		}
	}, [answer])

	return (
		<img src={currentImage} alt="#"/>
	)
}

