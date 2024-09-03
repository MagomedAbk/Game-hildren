import './Slide.css'
import {useEffect, useState} from 'react';


function 	Slide({answer,conditionModal}) {
	const image = [
		['src/Art/imgBW/tomatoBW.png','src/Art/img/tomato.png','red'],
		['src/Art/imgBW/cucumberBW.png','src/Art/img/cucumber.png','green'],
		['src/Art/imgBW/sunBW.png','src/Art/img/sun.png','yellow']
	]
	let [picture, setPicture] = useState(0)
	const [pictureBW, setPictureBW] = useState(0)


	useEffect(() => {
		if (picture >= image.length-1){
			setPictureBW(1)
			setTimeout(function(){
				conditionModal(true)
			},1000)
		}else {
			if(answer === image[picture][2]){
				setPictureBW(1)
				setTimeout(function(){
					setPictureBW(0)
					setPicture(picture+=1)
				},2000)
			}
			else {
			}
		}
	}, [answer]);

	return(
		<>
			<img src={image[picture][pictureBW]} alt="#"/>
		</>
	)
}

export default Slide